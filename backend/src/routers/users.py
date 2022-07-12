from uuid import UUID
from fastapi import APIRouter, HTTPException, Depends
from typing import List
from firebase_admin import auth

from utils.firebase import SecurityCheck
from database.db_engine import engine
from schema.user import User, UserCreate, FirebaseUserCreate
from manager import UserManager


router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.get("", response_model=List[User | None])
def get_all_users():
    with engine.begin() as conn:
        return list(UserManager.get_all_users(conn))


# Get user by id
@router.get("/{uid}", response_model=User)
def get_user(uid: UUID, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            user = UserManager.get_user_by_id(conn, uid)
            if user is None:
                raise HTTPException(404, "User not found")
            else:
                return user
        else:
            raise HTTPException(403, "Action not permitted")


# Create User
@router.post("/create")
def create_user(create_user: FirebaseUserCreate):
    if create_user.password is None:
        raise HTTPException(400, "Password is required")
    with engine.begin() as conn:
        user = UserManager.create_user(conn, create_user)
        if user is not None:
            try:
                auth.create_user(uid=str(user.id), display_name=user.pseudo,
                                 email=user.email, password=create_user.password)
            except (auth.EmailAlreadyExistsError):
                UserManager.delete_user_by_id(conn, user.id)
                raise ValueError("This email is already used")


# Update user by id
@router.put("/update/{uid}")
def update_user(user: UserCreate, uid: UUID, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            auth.update_user(
                uid=str(uid), display_name=user.pseudo, email=user.email,)
            return UserManager.update_user(conn, user, uid)
        else:
            raise HTTPException(404, "User not found")


# Delete one user by id
@router.delete("/delete/{uid}", response_model=bool)
def delete_user(uid: UUID, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return UserManager.delete_user_by_id(conn, uid)
        else:
            raise HTTPException(403, "Action not permitted")

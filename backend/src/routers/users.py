from uuid import UUID
from fastapi.security import APIKeyHeader
from fastapi import APIRouter, HTTPException, Depends
from typing import List

from firebase_admin import auth

from utils.firebase import SecurityCheck
from database.db_engine import engine
from schema.user import User, UserCreate
from manager import UserManager


router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# Get all users
@router.get("", response_model=List[User | None])
def get_all_users():
    with engine.begin() as conn:
        return list(UserManager.get_all_users(conn))


# Get user by id
@router.get("/{user_id}", response_model=User)
def get_user(user_id: str, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if user_id == authentified_user.id or authentified_user.is_admin:
            user = UserManager.get_user_by_id(conn, user_id)
            if user is None:
                raise HTTPException(404, "User not found")
            else:
                return user
        else:
            raise HTTPException(403, "Action not permitted")


# Create User
@router.post("/create")
def create_user(create_user: UserCreate, bearer_token: str = Depends(APIKeyHeader(name="Authorization"))):
    decoded_token = auth.verify_id_token(bearer_token)
    uid = decoded_token['uid']
    with engine.begin() as conn:
        user = UserManager.get_user_by_id(conn, uid)
        if user is None or user.is_admin:
            return UserManager.create_user(conn, create_user, uid)
        else:
            raise HTTPException(409, "User already exists")


# Update user by id
@router.put("/update/{id}")
def update_user(user: UserCreate, id: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == id:
            return UserManager.update_user(conn, user, id)
        else:
            raise HTTPException(404, "User not found")


# Delete one user by id
@router.delete("/delete/{user_id}", response_model=bool)
def delete_user(user_id: str, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if user_id == authentified_user.id or authentified_user.is_admin:
            return UserManager.delete_user_by_id(conn, user_id)
        else:
            raise HTTPException(403, "Action not permitted")

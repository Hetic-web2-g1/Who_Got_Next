from uuid import UUID
from fastapi import APIRouter, HTTPException, Depends
from typing import List

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
def get_user(user_id: str):
    with engine.begin() as conn:
        user = UserManager.get_user_by_id(conn, user_id)
        if user is None:
            raise HTTPException(404, "User not found")
        else:
            return user


# Create User
@router.post("/create")
def create_user(create_user: UserCreate, user_id: str = Depends(lambda: SecurityCheck(only_return_uid=True))):
    with engine.begin() as conn:
        user = UserManager.get_user_by_id(conn, user_id)
        if user is None or user.is_admin:
            return UserManager.create_user(conn, create_user, user_id)
        else:
            raise HTTPException(409, "User already exists")


# Update user by id
@ router.put("/update/{id}")
def update_user(user: UserCreate, id: UUID, user_id: str = Depends(lambda: SecurityCheck(only_return_uid=True))):
    with engine.begin() as conn:
        if user_id == id:
            return UserManager.update_user(conn, user, id)
        else:
            raise HTTPException(400, "User not found")


# Delete one user by id
@ router.delete("/delete/{user_id}", response_model=bool)
def delete_user(user_id: str):
    with engine.begin() as conn:
        UserManager.delete_user_by_id(conn, user_id)

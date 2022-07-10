from uuid import UUID
from fastapi import APIRouter
from typing import List

from utils.error_handelers import check_no_data
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
        data = UserManager.get_user_by_id(conn, user_id)
        check_no_data(data, "user")
        return data


# Create User
@router.post("/create")
def create_user(user: UserCreate):
    with engine.begin() as conn:
        UserManager.create_user(conn, user)


# Update user by id
@ router.put("/update/{id}")
def update_user(user: UserCreate, id: UUID):
    with engine.begin() as conn:
        UserManager.update_user(conn, user, id)


# Delete one user by id
@ router.delete("/delete/{user_id}", response_model=bool)
def delete_user(user_id: str):
    with engine.begin() as conn:
        UserManager.delete_user_by_id(conn, user_id)

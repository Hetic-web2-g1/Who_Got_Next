from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

from database.db_engine import engine
from schema.user import User
from manager import UserManager

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# Get all user
@router.get("", response_model=List[User | None])
def get_all_users():
    with engine.begin() as conn:
        return list(UserManager.get_all_users(conn))


# Get one user by id
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
def create_user(user):
    with engine.begin() as conn:
        user = UserManager.create_user(conn, user)
        if user == 0:
            return False
        else:
            return True


# Update user by id
@router.put("/update/{user_id}")
def update_user(user):
    with engine.begin() as conn:
        user = UserManager.update_user(conn, user)
        if user == 0:
            return False
        else:
            return True
# TODO Tester et vérifier les inputs a envoyer a user missing data to test


# Delete one user by id
@router.delete("/delete/{user_id}", response_model=bool)
def delete_user(user_id: str):
    with engine.begin() as conn:
        user = UserManager.delete_user_by_id(conn, user_id)
        if user == 0:
            return False
        else:
            return True

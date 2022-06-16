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


@router.get("", response_model=List[User | None])
async def get_all_users():
    with engine.begin() as conn:
        return list(UserManager.get_all_users(conn))


@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str):
    with engine.begin() as conn:
        user =  UserManager.get_user_by_id(conn, user_id)
        if user is None:
            raise HTTPException(404, "User not found")
        else:
            return user
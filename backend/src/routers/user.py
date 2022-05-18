from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from typing import List

from database.db_engine import engine
from schema.user import User
from manager import UserManager

router = APIRouter(
    prefix="/user",
    tags=["User"],
)


@router.get("/{user_id}", response_model=User)
def get_user(user_id: str):
    with engine.begin() as conn:
        user =  UserManager.get_user_by_id(conn, user_id)
        if user is None:
            raise HTTPException(404, "User not found")
        else:
            return user
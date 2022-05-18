from fastapi import APIRouter
from typing import List

from database.db_engine import engine
from schema.user import User
from manager import UserManager

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.get("", response_model=List[User | None])
def get_all_users():
    with engine.begin() as conn:
        return list(UserManager.get_all_users(conn))
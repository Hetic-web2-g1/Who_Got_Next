from fastapi import APIRouter
from typing import List

from database.db_engine import engine
from schema.message import Message
from manager import MessageManager

router = APIRouter(
    prefix="/messages",
    tags=["Messages"],
)


@router.get("", response_model=List[Message | None])
def get_all_messages():
    with engine.begin() as conn:
        return list(MessageManager.get_all_messages(conn))
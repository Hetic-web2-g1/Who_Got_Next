from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

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


@router.get("/{message_id}", response_model=Message)
def get_message(message_id: str):
    with engine.begin() as conn:
        message =  MessageManager.get_message_by_id(conn, message_id)
        if message is None:
            raise HTTPException(404, "Message not found")
        else:
            return message

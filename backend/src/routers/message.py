from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from typing import List

from database.db_engine import engine
from schema.message import Message
from manager import MessageManager

router = APIRouter(
    prefix="/message",
    tags=["Message"],
)


@router.get("/{message_id}", response_model=Message)
def get_message(message_id: str):
    with engine.begin() as conn:
        message =  MessageManager.get_message_by_id(conn, message_id)
        if message is None:
            raise HTTPException(404, "Message not found")
        else:
            return message

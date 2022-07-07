from uuid import UUID
from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

from database.db_engine import engine
from schema.message import Message, MessageCreate
from manager import MessageManager


# TODO Need to be completed with more specific errror
router = APIRouter(
    prefix="/messages",
    tags=["Messages"],
)


# Get all message
@router.get("", response_model=List[Message | None])
def get_all_messages():
    with engine.begin() as conn:
        return list(MessageManager.get_all_messages(conn))


# Get one message by id
@router.get("/id/{message_id}", response_model=Message)
def get_message(message_id: str):
    with engine.begin() as conn:
        message = MessageManager.get_message_by_id(conn, message_id)
        if message is None:
            raise HTTPException(404, "Message not found")
        else:
            return message


# Create message
@router.post("/create")
def create_message(message: MessageCreate):
    with engine.begin() as conn:
        MessageManager.create_message(conn, message)
        if message == 0:
            return False
        else:
            return True


# Update message by id
@router.put("/update/id/{id}")
def update_message(message: MessageCreate, id: UUID):
    with engine.begin() as conn:
        MessageManager.update_message(conn, message, id)
        if message == 0:
            return False
        else:
            return True


# Delete one message by id
@router.delete("/delete/{message_id}", response_model=bool)
def delete_event(message_id: str):
    with engine.begin() as conn:
        message = MessageManager.delete_message_by_id(conn, message_id)
        if message == 0:
            return False
        else:
            return True

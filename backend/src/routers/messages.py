from uuid import UUID
from fastapi import APIRouter
from typing import List

from utils.error_handelers import check_no_data
from database.db_engine import engine
from schema.message import Message, MessageCreate
from manager import MessageManager


router = APIRouter(
    prefix="/messages",
    tags=["Messages"],
)


# Get all messages
@router.get("", response_model=List[Message | None])
def get_all_messages():
    with engine.begin() as conn:
        return list(MessageManager.get_all_messages(conn))


# Get message by id
@router.get("/{message_id}", response_model=Message)
def get_message(message_id: str):
    with engine.begin() as conn:
        data = MessageManager.get_message_by_id(conn, message_id)
        check_no_data(data, "message")
        return data


# Create message
@router.post("/create")
def create_message(message: MessageCreate):
    with engine.begin() as conn:
        MessageManager.create_message(conn, message)


# Update message by id
@router.put("/update/{id}")
def update_message(message: MessageCreate, id: UUID):
    with engine.begin() as conn:
        MessageManager.update_message(conn, message, id)


# Delete one message by id
@router.delete("/delete/{message_id}", response_model=bool)
def delete_event(message_id: str):
    with engine.begin() as conn:
        MessageManager.delete_message_by_id(conn, message_id)

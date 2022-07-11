from uuid import UUID
from fastapi import APIRouter, HTTPException, Depends
from typing import List

from utils.firebase import SecurityCheck
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
def get_message(message_id: str, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        message = MessageManager.get_message_by_id(conn, message_id)
        if message is None:
            raise HTTPException(404, "Message not found")
        else:
            return message


# Create message
@router.post("/create")
def create_message(message: MessageCreate, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return MessageManager.create_message(conn, message)
        else:
            raise HTTPException(409, "Message already exists")


# Update message by id
@router.put("/update/{id}")
def update_message(message: MessageCreate, message_id: UUID, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return MessageManager.update_message(conn, message, message_id)
        else:
            raise HTTPException(404, "Message not found")


# Delete one message by id
@router.delete("/delete/{message_id}", response_model=bool)
def delete_event(message_id: str, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return MessageManager.delete_message_by_id(conn, message_id)
        else:
            raise HTTPException(403, "Action not permitted")

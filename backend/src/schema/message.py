from datetime import datetime
from pydantic import BaseModel
from uuid import UUID
from typing import Optional


class MessageCreate(BaseModel):
    id_user: Optional[UUID] = None
    id_field: Optional[UUID] = None
    id_event: Optional[UUID] = None
    message_type: str
    content: str


class Message(MessageCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime

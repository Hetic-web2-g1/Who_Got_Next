from datetime import datetime
from pydantic import BaseModel
from uuid import UUID


class MessageCreate(BaseModel):
    id_user: UUID | None
    id_field: UUID | None
    id_event: UUID | None
    message_type: str
    content: str


class Message(MessageCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime

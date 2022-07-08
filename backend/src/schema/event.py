from pydantic import BaseModel
from datetime import datetime
from uuid import UUID
from typing import Optional


class EventCreate(BaseModel):
    id_user: UUID
    id_field: UUID
    name: str
    description: str
    data: Optional[dict] = None


class Event(EventCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime

from pydantic import BaseModel
from datetime import datetime
from uuid import UUID
from typing import Optional


class EventCreate(BaseModel):
    id_user: UUID
    id_field: Optional[UUID] = None
    name: str
    place: Optional[str] = None
    description: Optional[str] = None
    sport: Optional[str] = None
    niveau: Optional[str] = None
    capacite: Optional[int] = None
    handisport: Optional[bool] = None
    acces_handicap: Optional[bool] = None
    date_start: Optional[datetime] = None
    data: Optional[dict] = None


class Event(EventCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime

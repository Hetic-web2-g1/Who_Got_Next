from datetime import datetime, date
from typing import List
from pydantic import BaseModel
from uuid import UUID
from typing import Optional


class UserCreate(BaseModel):
    pseudo: str
    email: str
    description: Optional[str] = None
    sport_level: Optional[int] = None
    favorite: Optional[List[str]] = None
    date_of_birth: Optional[date] = None
    sexe: Optional[str] = None
    longitude: Optional[float] = None
    latitude: Optional[float] = None
    img_path: Optional[str] = None


class User(UserCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime
    is_admin: Optional[bool] = False

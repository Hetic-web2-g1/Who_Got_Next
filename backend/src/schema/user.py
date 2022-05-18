from datetime import datetime, date
from typing import List
from pydantic import BaseModel
from uuid import UUID


class UserCreate(BaseModel):
    is_admin: bool
    pseudo: str
    password: str
    email: str
    description: str
    sport_level: int
    favorite: List[str]
    date_of_birth: datetime
    location: List[float]
    img_path: str


class User(UserCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime

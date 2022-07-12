from datetime import datetime, date
from typing import List
from uuid import UUID
from pydantic import BaseModel
from typing import Optional
from pydantic import Field


class FirebaseUserCreate(BaseModel):
    pseudo: str
    email: str
    password: str = Field(min_length=6, strip_whitespace=True)
    date_of_birth: date
    sexe: str


class UserCreate(BaseModel):
    pseudo: str
    email: str
    description: Optional[str] = None
    sport_level: Optional[int] = None
    favorite: Optional[List[str]] = None
    date_of_birth: date
    sexe: str
    phone: str
    longitude: Optional[float] = None
    latitude: Optional[float] = None
    phone_number: Optional[str] = None
    adress: Optional[str] = None
    city: Optional[str] = None
    postal_code: Optional[str] = None
    img_path: Optional[str] = None


class User(UserCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime
    is_admin: Optional[bool] = False

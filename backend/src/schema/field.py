from datetime import datetime
from typing import Dict
from pydantic import BaseModel
from uuid import UUID
from typing import Optional


class FieldCreate(BaseModel):
    id: Optional[str] = None
    id_user: Optional[UUID] = None
    name: str
    type: str
    longitude: float
    latitude: float
    img_path: Optional[str] = None
    id_sports_equipment: Optional[str] = None
    handicap: Optional[bool] = None
    parking: Optional[bool] = None
    public_transport: Optional[bool] = None
    lightening: Optional[bool] = None
    free_access: Optional[bool] = None
    dressing_room: Optional[bool] = None
    shower: Optional[bool] = None
    bathroom: Optional[bool] = None
    heating: Optional[bool] = None
    ground_type: Optional[str] = None
    nature_place: Optional[str] = None


class Field(FieldCreate):
    created_at: datetime
    edited_at: datetime


class GPSBounds(BaseModel):
    north_east: Dict[str, str]
    south_west: Dict[str, str]

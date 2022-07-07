from datetime import datetime
from typing import List
from pydantic import BaseModel
from uuid import UUID


class SportsEquipmentCreate(BaseModel):
    id_facility_number: str
    id_sports_equipment: str
    type_equipement: str
    family_equipement: str
    activity: str
    caract1: List[str]
    caract2: str


class SportsEquipment(SportsEquipmentCreate):
    id: UUID
    created_at: datetime
    edited_at: datetime

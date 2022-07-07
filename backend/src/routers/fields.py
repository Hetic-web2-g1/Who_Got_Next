from uuid import UUID
from pydantic import BaseModel
import time
from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

from database.db_engine import engine
from schema.field import Field, FieldCreate
from manager import FieldManager


# TODO Need to be completed with more specific errror
router = APIRouter(
    prefix="/fields",
    tags=["Fields"],
)


# Get all field
@router.get("", response_model=List[Field | None])
def get_all_fields():
    with engine.begin() as conn:
        return list(FieldManager.get_all_field(conn))


# Get one field by id
@router.get("/{field_id}", response_model=Field)
def get_field(field_id: str):
    with engine.begin() as conn:
        field = FieldManager.get_field_by_id(conn, field_id)
        if field is None:
            raise HTTPException(404, "Field not found")
        else:
            return field


# Create field
@router.post("/create")
def create_field(field: FieldCreate):
    with engine.begin() as conn:
        FieldManager.create_field(conn, field)
        if field == 0:
            return False
        else:
            return True


# Update field by id
@router.put("/update/{id}")
def update_field(field: FieldCreate, id: UUID):
    with engine.begin() as conn:
        FieldManager.update_field(conn, field, id)
        if field == 0:
            return False
        else:
            return True


# Delete one field by id
@router.delete("/delete/{field_id}", response_model=bool)
def delete_field(field_id: str):
    with engine.begin() as conn:
        field = FieldManager.delete_field_by_id(conn, field_id)
        if field == 0:
            return False
        else:
            return True


# Get field by location
@router.get("/location/")
def get_field_by_pos_radius(circle_x: float, circle_y: float, circle_radius: float):
    start = time.time()
    with engine.begin() as conn:
        field = FieldManager.get_field_by_pos_radius(
            conn, circle_x, circle_y, circle_radius)
    if field is None:
        raise HTTPException(404, "Field not found")
    else:
        end = time.time()
        print(format(end-start))
        return field

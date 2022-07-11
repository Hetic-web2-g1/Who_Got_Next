from fastapi import APIRouter, HTTPException, Depends
from typing import List

from utils.error_handelers import check_no_data
from utils.firebase import SecurityCheck
from database.db_engine import engine
from schema.field import Field, FieldCreate, GPSBounds
from manager import FieldManager


router = APIRouter(
    prefix="/fields",
    tags=["Fields"],
)


# Get all fields
@router.get("", response_model=List[Field | None])
def get_all_fields():
    with engine.begin() as conn:
        return list(FieldManager.get_all_field(conn))


# Get field by id
@router.get("/{field_id}", response_model=Field)
def get_field(field_id: str, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid:
            field = FieldManager.get_field_by_id(conn, field_id)
            if field is None:
                raise HTTPException(404, "Field not found")
            else:
                return field
        else:
            raise HTTPException(403, "Action not permitted")


# Create field
@router.post("/create")
def create_field(field: FieldCreate):
    with engine.begin() as conn:
        FieldManager.create_field(conn, field)


# Update field by id
@router.put("/update/{id}")
def update_field(field: FieldCreate, id: str):
    with engine.begin() as conn:
        FieldManager.update_field(conn, field, id)


# Delete one field by id
@router.delete("/delete/{field_id}", response_model=bool)
def delete_field(field_id: str):
    with engine.begin() as conn:
        FieldManager.delete_field_by_id(conn, field_id)


# Get field by location
@router.post("/location/", response_model=List[Field | None])
def get_field_by_pos_radius(gps_bounds: GPSBounds):
    with engine.begin() as conn:
        return list(FieldManager.get_field_by_position(
            conn, gps_bounds.south_west, gps_bounds.north_east))

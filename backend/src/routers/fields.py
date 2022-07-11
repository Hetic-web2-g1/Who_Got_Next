from fastapi import APIRouter, HTTPException, Depends
from typing import List

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
        field = FieldManager.get_field_by_id(conn, field_id)
        if field is None:
            raise HTTPException(404, "Field not found")
        else:
            return field


# Create field
@router.post("/create")
def create_field(field: FieldCreate, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return FieldManager.create_field(conn, field)
        else:
            raise HTTPException(409, "Field already exists")


# Update field by id
@router.put("/update/{id}")
def update_field(field: FieldCreate, field_id: str, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return FieldManager.update_field(conn, field, field_id)
        else:
            raise HTTPException(404, "Field not found")


# Delete one field by id
@router.delete("/delete/{field_id}", response_model=bool)
def delete_field(field_id: str, uid: str, authentified_user: str = Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return FieldManager.delete_field_by_id(conn, field_id)
        else:
            raise HTTPException(403, "Action not permitted")


# Get field by location
@router.post("/location/", response_model=List[Field | None])
def get_field_by_pos_radius(gps_bounds: GPSBounds):
    with engine.begin() as conn:
        return list(FieldManager.get_field_by_position(
            conn, gps_bounds.south_west, gps_bounds.north_east))

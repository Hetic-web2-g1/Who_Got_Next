from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from typing import List

from database.db_engine import engine
from schema.field import Field
from manager import FieldManager

router = APIRouter(
    prefix="/field",
    tags=["Field"],
)

@router.get("/{field_id}", response_model=Field)
def get_user(field_id: str):
    with engine.begin() as conn:
        field =  FieldManager.get_field_by_id(conn, field_id)
        if field is None:
            raise HTTPException(404, "Field not found")
        else:
            return field
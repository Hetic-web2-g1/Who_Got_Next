from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

from database.db_engine import engine
from schema.field import Field
from manager import FieldManager

router = APIRouter(
    prefix="/fields",
    tags=["Fields"],
)


@router.get("", response_model=List[Field | None])
async def get_all_fields():
    with engine.begin() as conn:
        return list(FieldManager.get_all_field(conn))


@router.get("/{field_id}", response_model=Field)
async def get_user(field_id: str):
    with engine.begin() as conn:
        field =  FieldManager.get_field_by_id(conn, field_id)
        if field is None:
            raise HTTPException(404, "Field not found")
        else:
            return field
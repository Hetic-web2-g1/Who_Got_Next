from fastapi import APIRouter
from typing import List

from database.db_engine import engine
from schema.field import Field
from manager import FieldManager

router = APIRouter(
    prefix="/fields",
    tags=["Fields"],
)


@router.get("", response_model=List[Field | None])
def get_all_fields():
    with engine.begin() as conn:
        return list(FieldManager.get_all_field(conn))
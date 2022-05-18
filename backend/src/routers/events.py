from fastapi import APIRouter
from typing import List

from database.db_engine import engine
from schema.event import Event
from manager import EventManager

router = APIRouter(
    prefix="/events",
    tags=["Events"],
)


@router.get("", response_model=List[Event | None])
def get_all_events():
    with engine.begin() as conn:
        return list(EventManager.get_all_events(conn))
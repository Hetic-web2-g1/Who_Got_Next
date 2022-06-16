from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

from database.db_engine import engine
from schema.event import Event
from manager import EventManager

router = APIRouter(
    prefix="/events",
    tags=["Events"],
)


@router.get("", response_model=List[Event | None])
async def get_all_events():
    with engine.begin() as conn:
        return list(EventManager.get_all_events(conn))


@router.get("/{event_id}", response_model=Event)
async def get_event(event_id: str):
    with engine.begin() as conn:
        event =  EventManager.get_event_by_id(conn, event_id)
        if event is None:
            raise HTTPException(404, "Event not found")
        else:
            return event

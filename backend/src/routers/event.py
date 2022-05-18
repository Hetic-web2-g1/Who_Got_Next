from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from typing import List

from database.db_engine import engine
from schema.event import Event
from manager import EventManager

router = APIRouter(
    prefix="/event",
    tags=["Event"],
)


@router.get("/{event_id}", response_model=Event)
def get_event(event_id: str):
    with engine.begin() as conn:
        event =  EventManager.get_event_by_id(conn, event_id)
        if event is None:
            raise HTTPException(404, "Event not found")
        else:
            return event

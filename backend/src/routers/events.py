from uuid import UUID
from fastapi import APIRouter
from typing import List

from utils.error_handelers import check_no_data
from database.db_engine import engine
from schema.event import Event, EventCreate
from manager import EventManager


router = APIRouter(
    prefix="/events",
    tags=["Events"],
)


# Get all events
@router.get("", response_model=List[Event | None])
def get_all_events():
    with engine.begin() as conn:
        return list(EventManager.get_all_events(conn))


# Get event by id
@router.get("/{event_id}", response_model=Event)
def get_event(event_id: str):
    with engine.begin() as conn:
        data = EventManager.get_event_by_id(conn, event_id)
        check_no_data(data, "event")
        return data


# Create event
@router.post("/create")
def create_event(event: EventCreate):
    with engine.begin() as conn:
        EventManager.create_event(conn, event)


# Update event by id
@ router.put("/update/{id}")
def update_event(event: EventCreate, id: UUID):
    with engine.begin() as conn:
        EventManager.update_event(conn, event, id)


# Delete one event by id
@ router.delete("/delete/{event_id}", response_model=bool)
def delete_event(event_id: str):
    with engine.begin() as conn:
        EventManager.delete_event_by_id(conn, event_id)

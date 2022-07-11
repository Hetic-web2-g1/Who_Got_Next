from uuid import UUID
from fastapi import APIRouter, HTTPException, Depends
from typing import List

from utils.firebase import SecurityCheck
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
        event = EventManager.get_event_by_id(conn, event_id)
        if event is None:
            raise HTTPException(404, "Event not found")
        else:
            return event


# Create event
@router.post("/create")
def create_event(event: EventCreate, uid: str, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return EventManager.create_event(conn, event)
        else:
            raise HTTPException(409, "Event already exists")


# Update event by id
@router.put("/update/{id}")
def update_event(event: EventCreate, event_id: UUID, uid: str, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return EventManager.update_event(conn, event, event_id)
        else:
            raise HTTPException(404, "Event not found")


# Delete one event by id
@router.delete("/delete/{event_id}", response_model=bool)
def delete_event(event_id: UUID, uid: str, authentified_user=Depends(SecurityCheck)):
    with engine.begin() as conn:
        if authentified_user.id == uid or authentified_user.is_admin:
            return EventManager.delete_event_by_id(conn, event_id)
        else:
            raise HTTPException(403, "Action not permitted")

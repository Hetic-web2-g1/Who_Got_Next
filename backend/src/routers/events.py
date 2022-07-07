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


# Get all event
@router.get("", response_model=List[Event | None])
def get_all_events():
    with engine.begin() as conn:
        return list(EventManager.get_all_events(conn))


# Get one event by id
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
def create_event(event):
    with engine.begin() as conn:
        event = EventManager.create_event(conn, event)
        if event == 0:
            return False
        else:
            return True


# Update event by id
@router.put("/update/{event_id}")
def update_event(event):
    with engine.begin() as conn:
        event = EventManager.update_event(conn, event)
        if event == 0:
            return False
        else:
            return True
# TODO Tester et vérifier les inputs a envoyer a event missing data to test


# Delete one event by id
@router.delete("/delete/{event_id}", response_model=bool)
def delete_event(event_id: str):
    with engine.begin() as conn:
        event = EventManager.delete_event_by_id(conn, event_id)
        if event == 0:
            return False
        else:
            return True

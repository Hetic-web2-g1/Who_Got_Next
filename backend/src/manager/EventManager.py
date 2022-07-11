from uuid import UUID
import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.event import Event, EventCreate
from database.tables.event import event_table


def get_all_events(conn: Connection):
    result = conn.execute(sa.select([event_table]).limit(100))
    if result is None:
        return []
    else:
        for event in result:
            yield Event(**event)


def get_event_by_id(conn: Connection, id: str):
    stmt = sa.select([event_table]).where(event_table.c.id == id)
    row = conn.execute(stmt).first()

    if row is not None:
        return Event(**row)


def create_event(conn: Connection, event: EventCreate) -> Event | None:
    return db_srv.create_object(conn, 'event', event)


def update_event(conn: Connection, event: EventCreate, id: UUID) -> Event | None:
    return db_srv.update_object(conn, 'event', id, event)


def delete_event_by_id(conn: Connection, id: UUID) -> Event | None:
    return db_srv.delete_object(conn, 'event', id)

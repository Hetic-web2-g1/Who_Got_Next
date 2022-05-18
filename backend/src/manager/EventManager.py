import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.event import Event, EventCreate
from database.tables.event import event_table

def get_all_events(conn):
    result = conn.execute(sa.select([event_table]))
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
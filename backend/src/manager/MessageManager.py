import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.message import Message, MessageCreate
from database.tables.message import message_table

def get_all_messages(conn):
    result = conn.execute(sa.select([message_table]))
    if result is None:
        return []
    else:
        for message in result:
            yield Message(**message)


def get_message_by_id(conn: Connection, id: str):
    stmt = sa.select([message_table]).where(message_table.c.id == id)
    row = conn.execute(stmt).first()

    if row is not None:
        return Message(**row)


def create_message(conn: Connection, message: MessageCreate) -> Message | None:
    return db_srv.create_object(conn, 'message', message)
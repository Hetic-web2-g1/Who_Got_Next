import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.field import Field, FieldCreate
from database.tables.field import field_table

def get_all_field(conn):
    result = conn.execute(sa.select([field_table]))
    if result is None:
        return []
    else:
        for field in result:
            yield Field(**field)


def get_field_by_id(conn: Connection, id: str):
    stmt = sa.select([field_table]).where(field_table.c.id == id)
    row = conn.execute(stmt).first()

    if row is not None:
        return Field(**row)

def create_field(conn: Connection, field: FieldCreate) -> Field | None:
    return db_srv.create_object(conn, 'field', field)
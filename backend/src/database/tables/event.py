from sqlalchemy import Table, Column, Integer, String, DateTime, Boolean, JSON
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from database.db_engine import metadata


event_table = Table(
    "event",
    metadata,
    Column('id', UUID(as_uuid=True),
           primary_key=True,
           default=uuid4,
           unique=True
           ),
    Column('id_user', UUID(as_uuid=True)),
    Column('id_field', String()),
    Column('name', String()),
    Column('place', String()),
    Column('description', String()),
    Column('sport', String()),
    Column('niveau', String()),
    Column('capacite', String()),
    Column('handisport', Boolean),
    Column('acces_handicap', Boolean),
    Column('date_start', DateTime()),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

from sqlalchemy import Table, Column, Integer, String, DateTime, JSON
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from ..db_engine import metadata

event_table = Table(
    "event",
    metadata,
    Column('id', UUID(as_uuid=True),
        primary_key=True,
        default=uuid4,
        unique=True
    ),
    Column('id_user', UUID(as_uuid=True)),
    Column('id_field', UUID(as_uuid=True)),
    Column('name', String()),
    Column('description', String()),
    Column('data', JSON),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

from sqlalchemy import Table, Column, Integer, Float, String, DateTime, JSON, ARRAY
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from ..db_engine import metadata

field_table = Table(
    "field",
    metadata,
    Column('id', UUID(as_uuid=True),
        primary_key=True,
        default=uuid4,
        unique=True
    ),
    Column('id_user', UUID(as_uuid=True)),
    Column('name', String()),
    Column('description', String()),
    Column('location', ARRAY(Float, dimensions=1)),
    Column('data', JSON),
    Column('img_path', String()),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

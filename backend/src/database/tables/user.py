from sqlalchemy import Table, Column, Integer, Float, String, DateTime, Boolean, ARRAY
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from ..db_engine import metadata

user_table = Table(
    "user",
    metadata,
    Column('id', UUID(as_uuid=True),
        primary_key=True,
        default=uuid4,
        unique=True
    ),
    Column('is_admin', Boolean),
    Column('pseudo', String()),
    Column('password', String()),
    Column('email', String()),
    Column('description', String()),
    Column('sport_level', Integer),
    Column('favorite', ARRAY(String(), dimensions=1)),
    Column('date_of_birth', DateTime()),
    Column('location', ARRAY(Float, dimensions=1)),
    Column('img_path', String()),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

current_user_table = Table(
    "current_user",
    metadata,
    Column('id', UUID(as_uuid=True),
        primary_key=True,
        default=uuid4,
        unique=True
    ),
    Column('data', ARRAY(Integer(), dimensions=1)),
)

subscribed_user_table = Table(
    "subscribed_user",
    metadata,
    Column('id', UUID(as_uuid=True),
        primary_key=True,
        default=uuid4,
        unique=True
    ),
    Column('data', ARRAY(Integer(), dimensions=1)),
)

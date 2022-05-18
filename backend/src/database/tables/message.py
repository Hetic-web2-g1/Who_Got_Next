from sqlalchemy import Table, Column, Integer, String, DateTime
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from ..db_engine import metadata

message_table = Table(
    "message",
    metadata,
    Column('id', UUID(as_uuid=True),
        primary_key=True,
        default=uuid4,
        unique=True
    ),
    Column('id_user', UUID(as_uuid=True), nullable=True),
    Column('id_field', UUID(as_uuid=True), nullable=True),
    Column('id_event', UUID(as_uuid=True), nullable=True),
    Column('message_type', String()),
    Column('content', String()),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

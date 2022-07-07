from sqlalchemy import Table, Column, Float, String, DateTime, Boolean
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from database.db_engine import metadata

field_table = Table(
    "field",
    metadata,
    Column('id_facility_number', String(),
           primary_key=True,
           unique=True
           ),
    Column('id_user', UUID(as_uuid=True)),
    Column('name', String()),
    Column('type', String()),
    Column('longitude', Float),
    Column('latitude', Float),
    Column('img_path', String()),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow),
    Column('id_sports_equipment', String()),
    Column('handicap', Boolean),
    Column('parking', Boolean),
    Column('public_transport', Boolean),
    Column('lightening', Boolean),
    Column('free_access', Boolean),
    Column('dressing_room', Boolean),
    Column('shower', Boolean),
    Column('bathroom', Boolean),
    Column('heating', Boolean),
    Column('ground_type', String()),
    Column('nature_place', String())
)

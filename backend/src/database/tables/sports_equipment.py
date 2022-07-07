from sqlalchemy import Table, Column, Integer, Float, String, DateTime, Boolean, ARRAY
from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4

from ..db_engine import metadata

sports_equipment_table = Table(
    "sports_equipment",
    metadata,
    Column('id', UUID(as_uuid=True),
           primary_key=True,
           default=uuid4,
           unique=True
           ),
    Column('id_facility_number', String()),
    Column('id_sports_equipment', String()),
    Column('type_equipement', String()),
    Column('family_equipement', String()),
    Column('activity', String()),
    Column('caract1', String()),
    Column('caract2', ARRAY(String(), dimensions=1)),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

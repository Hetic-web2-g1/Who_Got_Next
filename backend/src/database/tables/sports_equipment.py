from sqlalchemy import Table, Column, String, DateTime
from datetime import datetime
import sqlalchemy as sa

from database.db_engine import metadata

sports_equipment_table = Table(
    "sports_equipment",
    metadata,
    Column('id_facility_number', sa.ForeignKey(
        "field.id_facility_number"), nullable=False),
    Column('equipment_type', String()),
    Column('equipment_family', String()),
    Column('activity', String()),
    Column("created_at", DateTime(), default=datetime.utcnow),
    Column("edited_at", DateTime(), default=datetime.utcnow)
)

from faker import Faker
from uuid import UUID
import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.field import Field, FieldCreate
from schema.sports_equipment import SportsEquipment, SportsEquipmentCreate
from database.tables.field import field_table


def get_all_field(conn: Connection):
    result = conn.execute(sa.select([field_table]).limit(100))
    if result is None:
        return []
    else:
        for field in result:
            yield Field(**field)


def get_all_field_unlimited(conn: Connection):
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
    field.facility_id = validate_unique_field_id(conn)
    return db_srv.create_object(conn, 'field', field)


def create_sports_equipment(conn: Connection, sports_equipment: SportsEquipmentCreate) -> SportsEquipment | None:
    return db_srv.create_object(conn, 'sports_equipment', sports_equipment)


def update_field(conn: Connection, field: FieldCreate, id: str) -> Field | None:
    return db_srv.update_object(conn, 'field', id, field)


def delete_field_by_id(conn: Connection, id: str) -> Field | None:
    return db_srv.delete_object(conn, 'field', id)


def get_field_by_pos_radius(conn: Connection, circle_x, circle_y, circle_radius):
    data = get_all_field_unlimited(conn)
    validated_data = []
    for field in data:
        condition = (field.longitude - circle_x)**2 + \
            (field.latitude - circle_y)**2 < circle_radius**2
        if condition:
            validated_data.append(field)
    if validated_data is None:
        return []
    else:
        return validated_data


def get_field_by_position(conn: Connection, south_east_coord: dict, north_west_coord: dict):
    stmt = (sa.select([field_table])
            .where(field_table.c.longitude > south_east_coord['lng'])
            .where(field_table.c.latitude > south_east_coord['lat'])
            .where(field_table.c.longitude < north_west_coord['lng'])
            .where(field_table.c.latitude < north_west_coord['lat'])
            .order_by(field_table.c.free_access, field_table.c.parking, field_table.c.public_transport)
            .limit(500)
            )
    result = conn.execute(stmt)

    for field in result:
        yield Field(**field)


def create_field_id():
    fake = Faker()
    return fake.numerify("I%%%E%%%%%%%%%")


def validate_unique_field_id(conn: Connection):
    id = create_field_id()
    stmt = sa.select([field_table]).where(
        field_table.c.facility_id == id)
    row = conn.execute(stmt).first()
    if row == None:
        return id
    else:
        return validate_unique_field_id(conn)

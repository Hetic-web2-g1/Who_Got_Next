import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.user import User, UserCreate
from database.tables.user import user_table


def get_all_users(conn: Connection):
    result = conn.execute(sa.select([user_table]).limit(100))
    if result is None:
        yield
    else:
        for user in result:
            yield User(**user)


def get_user_by_id(conn: Connection, id: str):
    stmt = sa.select([user_table]).where(user_table.c.id == id)
    row = conn.execute(stmt).first()

    if row is not None:
        return User(**row)


def get_user_by_email(conn: Connection, email: str):
    stmt = sa.select([user_table]).where(user_table.c.email == email)
    row = conn.execute(stmt).first()

    if row is not None:
        return User(**row)


def create_user(conn: Connection, user: UserCreate, uid: str | None = None) -> User | None:
    row = db_srv.create_object(conn, 'user', user, object_id=uid)
    return User(**row)


def update_user(conn: Connection, user: UserCreate, id: str) -> User | None:
    row = db_srv.update_object(conn, 'user', id, user)
    return User(**row)


def delete_user_by_id(conn: Connection, id: str) -> User | None:
    return db_srv.delete_object(conn, 'user', id)

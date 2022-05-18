import sqlalchemy as sa
from sqlalchemy.engine import Connection

from database import db_srv
from schema.user import User, UserCreate
from database.tables.user import user_table

def get_all_users(conn):
    result = conn.execute(sa.select([user_table]))
    if result is None:
        return []
    else:
        for user in result:
            yield User(**user)
            # On revoie un generateur, si jamais on a besoin de chercher quelque chose dans tous les user, c'est plus opti d'avoir un generateur plutot qu'une liste


def get_user_by_id(conn: Connection, id: str):
    stmt = sa.select([user_table]).where(user_table.c.id == id)
    row = conn.execute(stmt).first()

    if row is not None:
        return User(**row)


def create_user(conn: Connection, user: UserCreate) -> User | None:
    return db_srv.create_object(conn, 'user', user)
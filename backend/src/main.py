from fastapi import FastAPI

from database.tables import user, field, event, message
from routers import index, users, fields, events, messages
from database.db_engine import metadata, engine


metadata.create_all(bind=engine)


# Launch api
app = FastAPI()

app.include_router(index.router)
app.include_router(users.router)
app.include_router(fields.router)
app.include_router(events.router)
app.include_router(messages.router)

from utils.fake import create_fake_data
create_fake_data()
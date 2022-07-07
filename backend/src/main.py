from utils.fake import create_fake_data
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path


from database.tables import user, field, event, message, sports_equipment
from routers import index, users, fields, events, messages
from database.db_engine import metadata, engine

CUR_DIR = Path(__file__).parent.parent.parent
metadata.create_all(bind=engine)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]
# Launch api
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(index.router)
app.include_router(users.router)
app.include_router(fields.router)
app.include_router(events.router)
app.include_router(messages.router)

# create_fake_data()

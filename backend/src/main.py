from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path


from database.tables import user, field, event, message, sports_equipment
from routers import index, users, fields, events, messages
from database.db_engine import metadata, engine

metadata.create_all(bind=engine)


origins = [
    "http://localhost:3000",
    "localhost:3000"
]

<<<<<<< HEAD

# Launch api
=======
>>>>>>> 54730866347c09436ba5072865209c3e3c03ded4
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


# from utils.fake import create_fake_data
# create_fake_data()

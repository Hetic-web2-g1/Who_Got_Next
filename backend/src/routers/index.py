from pydantic import BaseModel
from fastapi import APIRouter
from typing import List
from fastapi import Request

from database.db_engine import engine

router = APIRouter(
    prefix="",
    tags=["Index"],
)


@router.get("/")
def read_root():
    return [{"msg": "Go away."}]


# class Data(BaseModel):
#     user: Data


class Data(BaseModel):
    user: str


@router.post("/api_call/")
def main(data: Data):
    print(data)
    return data

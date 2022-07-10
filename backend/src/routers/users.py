from firebase_admin import auth
from fastapi import Depends
from uuid import UUID
from fastapi.responses import JSONResponse
from sqlalchemy.exc import IntegrityError
from fastapi import APIRouter
from typing import List
from fastapi.exceptions import HTTPException

from utils.firebase import CustomSecurity
from database.db_engine import engine
from schema.user import User, UserCreate
from manager import UserManager


# TODO Need to be completed with more specific errror
router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


# Get all user

@router.get("", response_model=List[User | None])
def get_all_users():
    with engine.begin() as conn:
        return list(UserManager.get_all_users(conn))


# Get user by id
@router.get("/{user_id}", response_model=User)
def get_user(user_id: str):
    with engine.begin() as conn:
        user = UserManager.get_user_by_id(conn, user_id)
        if user is None:
            raise HTTPException(404, "User not found")
        else:
            return user


# Get id by email


@router.get("/get/{email}")
def get_email(email: str):
    with engine.begin() as conn:
        user = UserManager.get_user_by_email(conn, email)
        if user is None:
            raise HTTPException(404, "User not found")
        else:
            return user


# Create User


@router.post("/create")
def create_user(user: UserCreate, currentuser=Depends(CustomSecurity)):
    print(currentuser)
    with engine.begin() as conn:
        try:
            UserManager.create_user(conn, user)
        except IntegrityError as e:
            return JSONResponse(
                status_code=401,
                content={"message": str("Duplicate Data")},
            )
        return True


# Update user by id
@ router.put("/update/{id}")
def update_user(user: UserCreate, id: UUID):
    with engine.begin() as conn:
        UserManager.update_user(conn, user, id)
        if user == 0:
            return False
        else:
            return True


# Delete one user by id
@ router.delete("/delete/{user_id}", response_model=bool)
def delete_user(user_id: str):
    with engine.begin() as conn:
        user = UserManager.delete_user_by_id(conn, user_id)
        if user == 0:
            return False
        else:
            return True

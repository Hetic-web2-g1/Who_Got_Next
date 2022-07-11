from fastapi.security import APIKeyHeader
from fastapi import HTTPException, status, Depends
from firebase_admin import auth, credentials
import firebase_admin

from database.db_engine import engine
from manager import UserManager
from schema.user import User

cred = credentials.Certificate('./../credentials/account_key.json')
firebase_admin.initialize_app(cred)


def SecurityCheck(bearer_token: str = Depends(APIKeyHeader(name="Authorization"))) -> User:
    try:
        if bearer_token is None:
            raise ValueError(name="Bearer token is required")
        else:
            decoded_token = auth.verify_id_token(bearer_token)
            uid = decoded_token['uid']
            with engine.begin() as conn:
                return UserManager.get_user_by_id(conn, uid)

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid authentication credentials. {e}",
            headers={'WWW-Authenticate': 'Bearer error="invalid_token"'},
        )

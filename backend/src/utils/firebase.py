from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Depends, HTTPException, status, Response
from firebase_admin import auth, credentials
import firebase_admin

cred = credentials.Certificate('account_key.json')
firebase_admin.initialize_app(cred)


def authentificate(cred):
    if cred is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Bearer authentication required",
            headers={'WWW-Authenticate': 'Bearer realm="auth_required"'},
        )
    try:
        decoded_token = auth.verify_id_token(cred.credentials)
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid authentication credentials. {err}",
            headers={'WWW-Authenticate': 'Bearer error="invalid_token"'},
        )
    return decoded_token


def CustomSecurity(res: Response, cred: HTTPAuthorizationCredentials = Depends(HTTPBearer(auto_error=False))):
    # decoded_token = authentificate(cred)
    print(cred)
    return res
    # return decoded_token


# def CustomSecurity(authorization: str = Depends(HTTPBearer(auto_error=False))):
#     token = authorization.split(" ").pop()
#     if not token:
#         raise HTTPException(
#             status_code=401,
#             detail="Invalid auth credentials",
#             headers={"WWW-Authenticate": "Bearer"},
#         )

    # claims = auth.verify_id_token(token)


# @router.post("", response_model=model, summary=f"Create {collection}")
# def post_document(
#     data: model,
#     current_user: auth.AuthorizationResponse = Depends(
#         auth.CustomSecurity),
# ):

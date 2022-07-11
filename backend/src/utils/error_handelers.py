from fastapi.exceptions import HTTPException


def check_no_data(data, name):
    if data == None:
        raise HTTPException(404, f"No {name} in DB")


# except SQLAlchemyError as e:
#     error = str(e.__dict__['orig'])
#     return HTTPException(404, error)

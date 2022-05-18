# Projet-Final-Structure

Ne pas oublier de rajouter: 
Fichier env/dev.env dans le backend
Commande pour l'updater (a ne pas oublier):
> export ENVIRONMENT=dev

Launch docker config

> docker-compose up

Launch backend
> npm run back
Launch frontend
> npm run front

Complete Commande
Launch backend
> export ENVIRONMENT=dev && cd backend && uvicorn main:app --reload

Launch frontend
> cd frontend && npm run dev

Access backend dev: http://localhost:8000

Access FastApi docs: http://127.0.0.1:8000/docs | http://127.0.0.1:8000/redoc#/

Front: http://localhost:3000

Access DB: http://localhost:8080

- System: PostgreSQL
- Server: db
- username: flamingo
- password: zeremi

Install requirement (for dev) without poetry:

> pip install fastapi uvicorn pydantic sqlalchemy sqlalchemy_utils python-dotenv psycopg2 faker

Can also install with poetry and the pyproject.toml file from the backend:
> cd backend
> poetry install
> poetry shell

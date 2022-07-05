# Projet-Final-Structure

Require -> Python ^3.10 and Vite

## Launch
Don't forget to add: 
Fichier env/dev.env in the backend
Commande to load the env (each launch of the project):
> export ENVIRONMENT=dev

Launch docker config
> docker-compose up

Simple Commande
Launch backend
> npm run back

Launch frontend
> npm run front

Complete Commande
Launch backend
> export ENVIRONMENT=dev && cd backend && uvicorn main:app --reload

Launch frontend
> cd frontend && npm run dev

## Link
Access backend dev: http://localhost:8000

Access FastApi docs: http://127.0.0.1:8000/docs | http://127.0.0.1:8000/redoc#/

Front: http://localhost:3000

Access DB: http://localhost:8080

DB Log:
- System: PostgreSQL
- Server: db
- username: flamingo
- password: zeremi

## Requirement
Install requirements front:
> npm install

Install requirements back without poetry:
> pip install fastapi uvicorn pydantic sqlalchemy sqlalchemy_utils python-dotenv psycopg2 faker

Can also install with poetry and the pyproject.toml file from the backend:
> cd backend
> poetry install
> poetry shell

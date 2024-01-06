from fastapi import FastAPI
from routes.task import task
from fastapi.middleware.cors import CORSMiddleware
from decouple import config

app = FastAPI()


origins = [
    config("FRONTEND_URL"),
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)
app.include_router(task)
@app.get("/")
def welcome():
    return {"message": "Welcome to my fastapi app"}

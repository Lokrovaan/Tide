# backend/main.py

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello from FastAPI!"}

# You will add more routes here later for your finance dashboard
# e.g., @app.post("/assets")
# async def create_asset(...):
#     ...
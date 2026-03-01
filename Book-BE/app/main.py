from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.routes import master, inward

app = FastAPI()

# CORS middleware must be before routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080"
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(master.router)
app.include_router(inward.router)

@app.get("/")
def root():
    return {"message": "FastAPI is working 🚀"}

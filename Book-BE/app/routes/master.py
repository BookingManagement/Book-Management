from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas


router = APIRouter(prefix="/master", tags=["Master"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/books")
def get_books(db: Session = Depends(get_db)):
    return db.query(models.BookMaster).filter(models.BookMaster.Active == 1).all()

@router.get("/shops")
def get_shops(db: Session = Depends(get_db)):
    return db.query(models.ShopMaster).filter(models.ShopMaster.Active == 1).all()

@router.get("/agents")
def get_agents(db: Session = Depends(get_db)):
    return db.query(models.AgentMaster).filter(models.AgentMaster.Active == 1).all()

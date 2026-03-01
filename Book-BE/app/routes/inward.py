from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime

from app.database import SessionLocal
from app import models, schemas

router = APIRouter(prefix="/inward", tags=["Inward"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_inward(data: schemas.InwardCreate, db: Session = Depends(get_db)):
    inward = models.Inward(
        BookId=data.book_id,
        ShopId=data.shop_id,
        AgentId=data.agent_id,
        Quantity=data.quantity,
        Remarks=data.remarks,
        InwardDate=data.inward_date,
        Status="CREATED",
        Active=1,
        CreatedBy="Admin",

    )
    db.add(inward)
    db.commit()
    db.refresh(inward)
    return {"message": "Inward entry saved successfully"}

@router.get("/recent")
def recent_inwards(db: Session = Depends(get_db)):
    """
    Fetch the 10 most recent inward entries with BookName, ShopName, AgentName
    """
    # Join Inward with BookMaster, ShopMaster, AgentMaster
    entries = (
        db.query(
            models.Inward.RowId,
            models.BookMaster.BookName,
            models.ShopMaster.ShopName,
            models.AgentMaster.AgentName,
            models.Inward.Quantity,
            models.Inward.Remarks,
            models.Inward.InwardDate,
            models.Inward.Status,
            models.Inward.Active,
            models.Inward.CreatedBy
        )
        .join(models.BookMaster, models.Inward.BookId == models.BookMaster.BookId)
        .join(models.ShopMaster, models.Inward.ShopId == models.ShopMaster.ShopId)
        .join(models.AgentMaster, models.Inward.AgentId == models.AgentMaster.AgentId)
        .order_by(models.Inward.InwardDate.desc())
        .limit(10)
        .all()
    )

    # Convert each row to dict for JSON response
    result = []
    for e in entries:
        result.append({
            "RowId": e.RowId,
            "BookName": e.BookName,
            "ShopName": e.ShopName,
            "AgentName": e.AgentName,
            "Quantity": e.Quantity,
            "Remarks": e.Remarks,
            "InwardDate": e.InwardDate,
            "Status": e.Status,
            "Active": e.Active,
            "CreatedBy": e.CreatedBy,
        })

    return result

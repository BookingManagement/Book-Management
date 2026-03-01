from pydantic import BaseModel
from datetime import datetime

class InwardCreate(BaseModel):
    book_id: int
    shop_id: int
    agent_id: int
    quantity: int
    remarks: str | None = None
    inward_date: datetime
    created_by: str

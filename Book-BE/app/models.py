from sqlalchemy import Column, Integer, String, DateTime, Boolean
from app.database import Base

class BookMaster(Base):
    __tablename__ = "BookMaster"

    BookId = Column(Integer, primary_key=True, index=True)
    BookName = Column(String(50))
    Active = Column(Boolean)

class ShopMaster(Base):
    __tablename__ = "ShopMaster"

    ShopId = Column(Integer, primary_key=True, index=True)
    ShopName = Column(String(50))
    Active = Column(Boolean)

class AgentMaster(Base):
    __tablename__ = "AgentMaster"

    AgentId = Column(Integer, primary_key=True, index=True)
    AgentName = Column(String(50))
    Active = Column(Boolean)

class Inward(Base):
    __tablename__ = "Inward"

    RowId = Column(Integer, primary_key=True, index=True)
    BookId = Column(Integer)
    ShopId = Column(Integer)
    AgentId = Column(Integer)
    Quantity = Column(Integer)
    Remarks = Column(String(255))
    InwardDate = Column(DateTime)
    Status = Column(String(50))
    Active = Column(Boolean)
    CreatedBy = Column(String(50))

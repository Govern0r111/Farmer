# SQLAlchemy model for produce listings
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ProduceListing(Base):
    __tablename__ = "produce_listings"
    id = Column(Integer, primary_key=True, index=True)
    crop = Column(String, index=True)
    quantity = Column(Float)
    price = Column(Float)
    seller = Column(String)
    date = Column(String)

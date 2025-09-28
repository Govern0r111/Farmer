# SQLAlchemy model for group listings
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class GroupListing(Base):
    __tablename__ = "group_listings"
    id = Column(Integer, primary_key=True, index=True)
    village = Column(String, index=True)
    crop = Column(String, index=True)
    quantity = Column(Float)
    price = Column(Float)
    date = Column(String)

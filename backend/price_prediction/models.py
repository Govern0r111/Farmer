# SQLAlchemy model for crop prices
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class CropPrice(Base):
    __tablename__ = "crop_prices"
    id = Column(Integer, primary_key=True, index=True)
    crop = Column(String, index=True)
    mandi = Column(String, index=True)
    price = Column(Float)
    date = Column(String)

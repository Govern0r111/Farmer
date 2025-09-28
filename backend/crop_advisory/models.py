# SQLAlchemy model for crop disease reports
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class DiseaseReport(Base):
    __tablename__ = "disease_reports"
    id = Column(Integer, primary_key=True, index=True)
    crop = Column(String, index=True)
    disease = Column(String)
    confidence = Column(Float)
    image_url = Column(String)
    date = Column(String)

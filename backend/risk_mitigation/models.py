# SQLAlchemy model for weather forecasts
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class WeatherEvent(Base):
    __tablename__ = "weather_events"
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String, index=True)
    date = Column(String)
    temperature = Column(Float)
    rainfall = Column(Float)
    event = Column(String)

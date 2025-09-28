from fastapi import FastAPI, Depends
from pydantic import BaseModel
from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from db_postgres import SessionLocal
from .models import CropPrice

app = FastAPI()

class PriceForecast(BaseModel):
    crop: str
    mandi: str
    predicted_price: float
    confidence: float
    date: str

async def get_db():
    async with SessionLocal() as session:
        yield session

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/price/current")
async def get_current_price(crop: str, mandi: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CropPrice).where(CropPrice.crop == crop, CropPrice.mandi == mandi))
    price_row = result.scalars().first()
    if price_row:
        return {"crop": crop, "mandi": mandi, "price": price_row.price, "date": price_row.date}
    return {"crop": crop, "mandi": mandi, "price": None, "date": None}

@app.get("/price/forecast", response_model=List[PriceForecast])
def get_price_forecast(crop: str):
    # TODO: ML model prediction
    return [
        PriceForecast(crop=crop, mandi="Delhi", predicted_price=2200.0, confidence=0.85, date="2025-10-01"),
        PriceForecast(crop=crop, mandi="Mumbai", predicted_price=2150.0, confidence=0.80, date="2025-10-01")
    ]

@app.get("/mandi/best")
def get_best_mandi(crop: str):
    # TODO: Logic to suggest best mandi
    return {"crop": crop, "best_mandi": "Delhi", "expected_price": 2200.0}

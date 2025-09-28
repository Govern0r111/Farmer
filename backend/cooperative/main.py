from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class GroupListing(BaseModel):
    id: int
    village: str
    crop: str
    quantity: float
    price: float

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/group/list")
def list_group(listing: GroupListing):
    # TODO: Save group listing
    return {"status": "group listed", "listing": listing}

@app.get("/group/all", response_model=List[GroupListing])
def get_all_groups():
    # TODO: Fetch group listings
    return [
        GroupListing(id=1, village="Rampur", crop="Wheat", quantity=5000, price=2150),
        GroupListing(id=2, village="Lakhanpur", crop="Rice", quantity=3000, price=1850)
    ]

@app.get("/storage/available")
def get_storage_availability(village: str):
    # TODO: Storage coordination
    return {"village": village, "storage_available": 2000}

@app.get("/negotiator/price")
def get_minimum_acceptable_price(crop: str, quantity: float):
    # TODO: AI negotiator logic
    return {"crop": crop, "quantity": quantity, "min_price": 2100.0}

@app.get("/profits/track")
def track_profits(group_id: int):
    # TODO: Profit tracking
    return {"group_id": group_id, "total_profit": 120000.0}

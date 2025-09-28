from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class ProduceListing(BaseModel):
    id: int
    crop: str
    quantity: float
    price: float
    seller: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/produce/list")
def list_produce(listing: ProduceListing):
    # TODO: Save to DB
    return {"status": "listed", "listing": listing}

@app.get("/produce/all", response_model=List[ProduceListing])
def get_all_listings():
    # TODO: Fetch from DB
    return [
        ProduceListing(id=1, crop="Wheat", quantity=1000, price=2100, seller="FarmerA"),
        ProduceListing(id=2, crop="Rice", quantity=500, price=1800, seller="FarmerB")
    ]

@app.post("/bid")
def place_bid(listing_id: int, buyer: str, bid_price: float):
    # TODO: Save bid
    return {"status": "bid placed", "listing_id": listing_id, "buyer": buyer, "bid_price": bid_price}

@app.post("/contract")
def create_contract(listing_id: int, buyer: str):
    # TODO: Create contract
    return {"status": "contract created", "listing_id": listing_id, "buyer": buyer}

@app.post("/payment")
def process_payment(contract_id: int, amount: float):
    # TODO: Integrate payment API
    return {"status": "payment processed", "contract_id": contract_id, "amount": amount}

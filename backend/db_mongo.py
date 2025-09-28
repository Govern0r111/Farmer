# MongoDB connection setup for FastAPI microservices
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb://localhost:27017"

mongo_client = AsyncIOMotorClient(MONGO_URL)
db = mongo_client["farmerapp"]

# Usage: db["images"].insert_one(...)

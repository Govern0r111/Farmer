# Redis connection setup for FastAPI microservices
import redis.asyncio as redis

REDIS_URL = "redis://localhost:6379/0"

redis_client = redis.from_url(REDIS_URL)

# Usage: await redis_client.set("key", "value")

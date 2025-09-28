from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from typing import List

app = FastAPI()

class CropSuggestion(BaseModel):
    crop: str
    reason: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/disease/detect")
async def detect_disease(image: UploadFile = File(...)):
    # TODO: AI model for disease detection
    return {"disease": "Blight", "confidence": 0.92}

@app.post("/chatbot")
async def chatbot_query(query: str):
    # TODO: NLP chatbot
    return {"response": "Apply fertilizer after rain."}

@app.get("/crop/suggestions", response_model=List[CropSuggestion])
def get_crop_suggestions(location: str):
    # TODO: Suggest alternative crops
    return [
        CropSuggestion(crop="Moong Dal", reason="Short cycle, high demand"),
        CropSuggestion(crop="Sunflower", reason="Suitable for current weather")
    ]

@app.get("/planting/date")
def get_best_planting_date(crop: str, location: str):
    # TODO: Calculate best planting date
    return {"crop": crop, "location": location, "best_date": "2025-10-10"}

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.coach import CoachCreate, CoachOut
from app.crud.coach import create_coach, get_coach, get_coaches
from app.db import SessionLocal
from typing import List

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=CoachOut)
def add_coach(coach: CoachCreate, db: Session = Depends(get_db)):
    return create_coach(db, coach)

@router.get("/{coach_id}", response_model=CoachOut)
def read_coach(coach_id: int, db: Session = Depends(get_db)):
    db_coach = get_coach(db, coach_id)
    if not db_coach:
        raise HTTPException(status_code=404, detail="Coach not found")
    return db_coach

@router.get("/", response_model=List[CoachOut])
def list_coaches(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_coaches(db, skip=skip, limit=limit)
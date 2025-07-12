from sqlalchemy.orm import Session
from app.models.coach import Coach
from app.schemas.coach import CoachCreate

def create_coach(db: Session, coach: CoachCreate):
    db_coach = Coach(**coach.dict())
    db.add(db_coach)
    db.commit()
    db.refresh(db_coach)
    return db_coach

def get_coach(db: Session, coach_id: int):
    return db.query(Coach).filter(Coach.id == coach_id).first()

def get_coaches(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Coach).offset(skip).limit(limit).all()
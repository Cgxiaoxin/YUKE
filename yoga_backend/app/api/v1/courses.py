from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.course import CourseCreate, CourseOut
from app.crud.course import create_course, get_course, get_courses
from app.db import SessionLocal
from typing import List

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=CourseOut)
def add_course(course: CourseCreate, db: Session = Depends(get_db)):
    return create_course(db, course)

@router.get("/{course_id}", response_model=CourseOut)
def read_course(course_id: int, db: Session = Depends(get_db)):
    db_course = get_course(db, course_id)
    if not db_course:
        raise HTTPException(status_code=404, detail="Course not found")
    return db_course

@router.get("/", response_model=List[CourseOut])
def list_courses(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_courses(db, skip=skip, limit=limit)
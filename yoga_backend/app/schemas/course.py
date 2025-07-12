from pydantic import BaseModel
from typing import Optional

class CourseBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    coach_id: int
    store_id: int
    duration: int

class CourseCreate(CourseBase):
    pass

class CourseOut(CourseBase):
    id: int
    class Config:
        orm_mode = True
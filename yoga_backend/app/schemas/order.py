from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class OrderBase(BaseModel):
    user_id: int
    course_id: int
    coach_id: int
    store_id: int
    reserved_time: datetime
    status: Optional[str] = "pending"

class OrderCreate(OrderBase):
    pass

class OrderOut(OrderBase):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True
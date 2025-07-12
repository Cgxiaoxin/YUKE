from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from app.models.base import Base
from datetime import datetime

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    course_id = Column(Integer, ForeignKey("courses.id"))
    coach_id = Column(Integer, ForeignKey("coaches.id"))
    store_id = Column(Integer, ForeignKey("stores.id"))
    status = Column(String(20), default="pending")
    reserved_time = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    # 可扩展更多字段
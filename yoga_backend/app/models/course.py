from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.models.base import Base

class Course(Base):
    __tablename__ = "courses"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(String(500))
    price = Column(Float, nullable=False)
    coach_id = Column(Integer, ForeignKey("coaches.id"))
    store_id = Column(Integer, ForeignKey("stores.id"))
    duration = Column(Integer)  # 单位：分钟
    # 可扩展更多字段
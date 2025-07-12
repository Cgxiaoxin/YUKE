from sqlalchemy import Column, Integer, String
from app.models.base import Base

class Coach(Base):
    __tablename__ = "coaches"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    bio = Column(String(500))
    avatar = Column(String(255))
    # 可扩展更多字段
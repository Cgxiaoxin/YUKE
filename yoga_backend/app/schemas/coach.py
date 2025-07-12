from pydantic import BaseModel

class CoachBase(BaseModel):
    name: str
    bio: str = None
    avatar: str = None

class CoachCreate(CoachBase):
    pass

class CoachOut(CoachBase):
    id: int
    class Config:
        orm_mode = True
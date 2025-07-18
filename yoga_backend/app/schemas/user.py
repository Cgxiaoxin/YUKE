from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    phone: str

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: int

    class Config:
        orm_mode = True
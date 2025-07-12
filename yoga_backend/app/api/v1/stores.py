from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.store import StoreCreate, StoreOut
from app.crud.store import create_store, get_store, get_stores
from app.db import SessionLocal
from typing import List

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=StoreOut)
def add_store(store: StoreCreate, db: Session = Depends(get_db)):
    return create_store(db, store)

@router.get("/{store_id}", response_model=StoreOut)
def read_store(store_id: int, db: Session = Depends(get_db)):
    db_store = get_store(db, store_id)
    if not db_store:
        raise HTTPException(status_code=404, detail="Store not found")
    return db_store

@router.get("/", response_model=List[StoreOut])
def list_stores(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_stores(db, skip=skip, limit=limit)
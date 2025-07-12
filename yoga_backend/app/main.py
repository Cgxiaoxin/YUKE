from fastapi import FastAPI
from app.api.v1 import users, coaches, courses, orders, stores

app = FastAPI(title="瑜伽馆预约系统")

app.include_router(users.router, prefix="/api/v1/users", tags=["用户"])
app.include_router(coaches.router, prefix="/api/v1/coaches", tags=["教练"])
app.include_router(courses.router, prefix="/api/v1/courses", tags=["课程"])
app.include_router(orders.router, prefix="/api/v1/orders", tags=["预约"])
app.include_router(stores.router, prefix="/api/v1/stores", tags=["门店"])
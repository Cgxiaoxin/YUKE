# YUKE 瑜伽/普拉提馆预约系统

## 项目简介

YUKE 是一套面向瑜伽/普拉提馆的预约管理系统，包含微信小程序前端、FastAPI 后端、Vue+Element UI 后台管理。

## 主要目录

- `yoga_backend/`  FastAPI 后端
- `miniprogram/`   微信小程序前端
- `yoga-admin/`    Web后台管理（Vue+Element UI）

## 快速启动

### FastAPI 后端
```bash
cd yoga_backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 微信小程序前端
- 用微信开发者工具导入 `miniprogram` 目录，配置 BASE_URL 后运行

### Web后台管理
```bash
cd yoga-admin
npm install
npm run dev
```

## 技术栈
- 微信小程序原生
- FastAPI + SQLAlchemy + MySQL
- Vue3 + Element Plus

## 联系方式
如需支持请联系开发者或提交 issue。

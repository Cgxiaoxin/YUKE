# YUKE 瑜伽/普拉提馆预约系统项目说明

## 一、项目简介

**YUKE** 是一套面向瑜伽/普拉提馆的预约管理系统，包含：
- 微信小程序前端（学员端，预约/课程/社群/个人中心等）
- Python FastAPI 后端（RESTful API，数据管理、权限、微信对接）
- Web 后台管理系统（Vue + Element UI，管理员操作）

本系统支持门店、教练、课程、预约、排行榜、社区等全流程管理，适合健身/瑜伽/普拉提等场景。

---

## 二、项目结构

```
/workspace
├── yoga_backend/         # FastAPI 后端
│   ├── app/
│   ├── requirements.txt
│   └── ...
├── yoga-admin/           # Web后台管理（Vue+Element UI）
│   └── ...
└── miniprogram/          # 微信小程序前端
    ├── pages/
    ├── components/
    ├── utils/
    ├── app.js
    ├── app.json
    └── ...
```

---

## 三、主要功能

### 1. 微信小程序端
- 首页推荐、门店、教练、课程展示
- 课程预约、我的预约
- 团课/超模班日历与预约
- 社群排行榜、课程Live
- 个人中心（会员卡、余额、奖励、代金券、手机号绑定）
- 微信一键登录

### 2. 后端 FastAPI
- 用户、教练、门店、课程、预约、排行榜等数据管理
- JWT 登录、微信小程序登录
- 权限控制（用户/管理员）
- RESTful API，自动文档

### 3. Web后台管理
- 管理员登录
- 用户、教练、门店、课程、预约等数据的增删改查
- 数据统计与报表

---

## 四、技术栈

- **小程序前端**：微信小程序原生开发
- **后端**：Python FastAPI + SQLAlchemy + MySQL
- **后台管理**：Vue3 + Element Plus + Axios + Vue Router

---

## 五、本地部署运行说明

### 1. FastAPI 后端

#### 1.1 安装依赖
```bash
cd yoga_backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### 1.2 配置数据库
- 修改 `app/core/config.py`，填写你的 MySQL 连接信息
- 初始化数据库（可用 Alembic 或直接在 `main.py` 里加 `Base.metadata.create_all(bind=engine)`）

#### 1.3 启动后端服务
```bash
uvicorn app.main:app --reload
```
- 访问 [http://localhost:8000/docs](http://localhost:8000/docs) 查看API文档

---

### 2. 微信小程序前端

#### 2.1 安装微信开发者工具
- 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

#### 2.2 导入项目
- 打开微信开发者工具，选择“导入项目”
- 选择 `miniprogram` 目录
- 设置小程序 AppID（可用测试号）

#### 2.3 配置后端API地址
- 修改 `miniprogram/utils/request.js` 里的 `BASE_URL` 为你的后端地址

#### 2.4 预览和调试
- 在微信开发者工具中点击“预览”或“编译”即可运行

---

### 3. Web后台管理系统

#### 3.1 安装依赖
```bash
cd yoga-admin
npm install
```

#### 3.2 配置API地址
- 修改 `src/api/index.js` 里的 `baseURL` 为你的后端地址

#### 3.3 启动开发环境
```bash
npm run dev
```
- 访问 [http://localhost:5173](http://localhost:5173) 进行管理操作

---

## 六、常见问题

- **小程序无法请求本地后端？**  
  请在微信开发者工具“详情”里配置 request 合法域名，或用 ngrok/内网穿透工具映射本地端口。
- **数据库连接失败？**  
  检查 MySQL 是否启动、账号密码是否正确、端口是否开放。
- **接口 401 未授权？**  
  检查 token 是否正确传递，后端是否已登录。

---

## 七、联系方式与支持

如需定制开发、部署支持、二次开发等服务，请联系开发者或提交 issue。
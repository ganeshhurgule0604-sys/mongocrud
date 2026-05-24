# NestJS MongoDB CRUD API 🚀

A simple CRUD API built using NestJS and MongoDB for managing Users and Posts.

---

# Features

- User CRUD APIs
- Post CRUD APIs
- MongoDB Integration
- Mongoose ODM
- Modular Structure
- DTO Validation
- Environment Variables
- Clean Architecture

---

# Tech Stack

- NestJS
- MongoDB
- Mongoose
- TypeScript
- dotenv
- class-validator

---

# Project Structure

```bash
src/
│
├── user/
│   ├── dto/
│   ├── schemas/
│   ├── user.controller.ts
│   ├── user.service.ts
│   └── user.module.ts
│
├── post/
│   ├── dto/
│   ├── schemas/
│   ├── post.controller.ts
│   ├── post.service.ts
│   └── post.module.ts
│
├── app.module.ts
├── main.ts
└── .env
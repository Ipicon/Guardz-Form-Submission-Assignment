# 📘 Guardz Form Submission Assignment

A small full-stack project built for the assignment.  
Users can submit basic information through a form, and view all submitted entities in a table.

This project demonstrates:

- NestJS backend  
- React + Vite frontend  
- Monorepo architecture with pnpm workspaces  
- React Query for fetching/mutations  
- Zod for client-side validation  
- Docker deployment (frontend + backend)  
- Working production deployment on a GCP Compute Engine instance  
- Unit tests (backend + frontend) and backend e2e tests  

---

# 🚀 Tech Stack

### **Backend**
- **NestJS**
- **class-validator** + global pipes
- In-memory persistence
- Unit + e2e tests

### **Frontend**
- React + Vite
- React Query
- Zod
- TailwindCSS + shadcn/ui
- Vitest

### **Infra**
- pnpm monorepo
- Docker + docker-compose
- GCP Compute Engine

---

# 📁 Folder Structure

```
.
├── apps
│   ├── backend
│   └── frontend
├── pnpm-workspace.yaml
├── docker-compose.yml
├── pnpm-lock.yaml
├── package.json
└── README.md
```

---

# 🧱 Backend Overview

### Endpoints
- `POST /entities`
- `GET /entities`

### ValidationPipe config
```ts
new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
})
```

### Why not Zod backend?
Assignment simplicity.  
Real world → **shared Zod schema** for backend + frontend.

---

# 🎨 Frontend Overview

- Entities table
- Add entity form
- Zod validation
- React Query mutations
- Tailwind + shadcn/ui
- up-fetch to automatically validate API responses against the Zod schema.

### Why not React Hook Forms or TanStack Table?
Real world → yes  
Assignment → unnecessary overhead

---

# 🛠️ Development
#### To work on the project locally, simply install all dependencies from the root of the monorepo:
- `pnpm install`

#### You can start both the backend and frontend together using the root dev script:
- `pnpm dev`

#### Or running each service individually
- Frontend -> `pnpm --filter frontend dev`
- Backend -> `pnpm --filter backend dev`

---

# 🧪 Testing

### Backend
- `pnpm --filter backend test`
- `pnpm --filter backend test:e2e`

### Frontend
- `pnpm --filter frontend test`

### Root
- `pnpm test`
- `pnpm test:e2e`

---

# ☁️ GCP Deployment

```
ssh -i <key> candidate@<ip>
git clone repo
docker compose up -d --build
```

Frontend → `http://<ip>`  
Backend → `http://<ip>:8080/entities`

---

# 📝 Notes & Tradeoffs

- Real world → shared Zod schema (single source of truth)
- Real world → React Hook Form, TanStack Table
- CORS `*` only because deployment is on raw IP
- Monorepo Dockerfile must preserve structure due to mixed pnpm hoisting
- Form uses native browser validation + Zod
- Testing includes unit + e2e

---

# 🎯 Summary


This project demonstrates strong full‑stack fundamentals, monorepo tooling, Dockerization, cloud deployment, and testing best practices.

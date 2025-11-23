FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/

RUN pnpm install --frozen-lockfile

COPY apps/backend ./apps/backend

RUN pnpm --filter backend build

FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/apps/backend/dist ./apps/backend/dist

WORKDIR /app/apps/backend

CMD ["node", "dist/main.js"]
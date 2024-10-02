FROM node:20.17.0-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PNPM_VERSION=9.5.0
ENV PATH="$PNPM_HOME:$PATH"
ENV TURBO_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable

FROM base AS builder
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add -g turbo
COPY . .
RUN turbo prune server --docker

FROM base AS installer
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm turbo build --filter=api...

FROM base AS runner
WORKDIR /app
COPY --from=installer /app .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm add -g dotenv-cli

CMD [ "sh", "apps/server/docker/production/entry-point.sh" ]
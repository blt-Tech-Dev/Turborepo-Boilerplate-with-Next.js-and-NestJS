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
RUN turbo prune web --docker

FROM base AS installer
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm turbo build --filter=web...

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=installer /app ./

# Create a production build using Next.js App Router
RUN pnpm turbo build --filter=web...

# Expose necessary ports
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]
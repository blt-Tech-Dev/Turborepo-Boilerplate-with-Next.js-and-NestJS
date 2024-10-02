#!/bin/sh

# Load environment variables
dotenv -e packages/database/.env -- pnpm run db:push

# Start the server
dotenv -e apps/api/.env -- pnpm run dev --filter=api
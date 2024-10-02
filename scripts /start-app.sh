#!/bin/bash

set -e

# Check if Node.js is installed
echo "Checking if Node.js is installed..."

if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Please install Node.js to run this application."
  exit 1
fi

# Check if Node version is at least 20.14
echo "Checking Node.js version..."

NODE_MAJOR_VERSION=$(node -v | cut -d. -f1 | sed 's/[^0-9]*//g')
NODE_MINOR_VERSION=$(node -v | cut -d. -f2 | sed 's/[^0-9]*//g')

if [ "$NODE_MAJOR_VERSION" -lt 20 ] && [ "$NODE_MINOR_VERSION" -lt 14 ]; then
  echo "Node.js version 20.14 or greater is required to run this application. Please update Node.js."
  exit 1
fi

# Check if pnpm is installed
echo "Checking if pnpm is installed..."

if ! command -v pnpm &> /dev/null; then
  echo "pnpm is not installed. Installing pnpm..."
  curl -fsSL https://get.pnpm.io/install.sh | sh -
fi

# Check if pnpm version is at least 9.2
echo "Checking pnpm version..."

PNPM_MAJOR_VERSION=$(pnpm -v | cut -d. -f1 | sed 's/[^0-9]*//g')
PNPM_MINOR_VERSION=$(pnpm -v | cut -d. -f2 | sed 's/[^0-9]*//g')

if [ "$PNPM_MAJOR_VERSION" -lt 9 ] && [ "$PNPM_MINOR_VERSION" -lt 2 ]; then
  echo "pnpm version 9.2 or greater is required to run this application. Updating pnpm..."
  pnpm add -g pnpm@latest
fi

# Check if another package manager is being used
echo "Checking for lock files..."

LOCK_FILES=("package-lock.json" "yarn.lock" "bun.lockb")

for LOCK_FILE in ${LOCK_FILES[@]}; do
  if [ -f $LOCK_FILE ]; then
    echo "Found $LOCK_FILE. Removing $LOCK_FILE..."
    rm $LOCK_FILE node_modules
  fi
done

# Create the .env file if it doesn't exist
echo "Checking for .env file..."

DIRECTORIES=(apps/web apps/api packages/database)
files=(.env.example .env)

for DIRECTORY in ${DIRECTORIES[@]}; do
  if [ ! -f "$DIRECTORY/${files[1]}" ]; then
    echo "Creating .env file in $DIRECTORY..."
    cp "$DIRECTORY/${files[0]}" "$DIRECTORY/${files[1]}"
  fi
done

# Install dependencies
echo "Installing dependencies..."

pnpm install --frozen-lockfile

# Build the application
echo "Building the application..."

pnpm run build

# Ask the user if they want to start the application in development mode or production mode
echo "Do you want to start the application in development mode or production mode? (default: development)"
read -p "Enter 'dev or 'prod': " MODE

if [ "$MODE" == "prod" ]; then
  echo "Starting the application in production mode..."
  pnpm run start
else
  echo "Starting the application in development mode..."
  pnpm run dev
fi
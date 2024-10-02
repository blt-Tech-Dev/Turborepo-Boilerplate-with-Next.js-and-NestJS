#!/bin/bash

set -e

# Check if Docker Compose is installed
echo "Checking if Docker Compose is installed..."

if ! command -v docker-compose &> /dev/null; then
  echo "Docker Compose is not installed. Please install Docker Compose to run this application."
  exit 1
fi

# Check if Docker is running
echo "Checking if Docker is running..."

if ! docker info &> /dev/null; then
  echo "Docker is not running. Please start Docker to run this application."
  exit 1
fi

# Check if there is a network name app_network and create it if it doesn't exist
echo "Checking for app_network..."

if ! docker network inspect app_network &> /dev/null; then
  echo "Creating app_network..."
  docker network create app_network
fi

# Ask the user if they want to start the application in development mode or production mode
echo "Do you want to start the application in development mode or production mode? (default: development)"
read -p "Enter 'dev or 'prod': " MODE

if [ "$MODE" == "prod" ]; then
  echo "Starting the application in production mode..."
  COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./docker/production/docker-compose.yml up --build -d
else
  echo "Starting the application in development mode..."
  pnpm install --frozen-lockfile
  COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./docker/development/docker-compose.yml up --build -d
fi
#!/usr/bin/env bash
set -e

# Use the backend directory for the Node service in this monorepo.
cd backend

# Install dependencies if they are missing.
if [ ! -d "node_modules" ]; then
  npm install
fi

# Start the backend service.
exec npm start

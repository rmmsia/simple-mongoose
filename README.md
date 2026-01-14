# Simple Mongoose App

This is a simple application that allows a user to post messages to a database (MongoDB instance) and retrieve messages from it.

This repo exists merely as an exercise in NoSQL data persistence and containerization.

## Requirements
- Docker
- Docker Compose

### Optional (for local development without Docker)
- Node.js 24.12
- MongoDB Community Edition 7.0

## Setup & Running
1. Clone the repo
```
git clone https://github.com/rmmsia/simple-mongoose.git
cd simple-mongoose
```

2. Create the `.env` file
```
cp .env.example .env
# Then edit .env to customise the values
```

3. Build and start the containers
```
docker compose up -d --build
```
This:
- Builds the app images
- Starts all services (app, database)

It runs containers in the background, the logs and status of which can be found in the Docker Desktop dashboard.

4. Access the app
Open your browser at:
```
http://localhost:YOUR_APP_PORT
```
Where `YOUR_APP_PORT` is the port exposed in `docker-compose.yaml`/

5. Stop the containers
```
docker compose down
```
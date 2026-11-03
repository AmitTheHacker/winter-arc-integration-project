# Day 33 - Docker Compose Multi-Service Lab

## Objective

Build and manage a multi-container application using Docker Compose, implement service networking, health checks, persistent storage, and perform a break/fix troubleshooting exercise.

---

## Environment

- Docker
- Docker Compose
- Node.js Application
- PostgreSQL 16
- Linux (Ubuntu/WSL)

---

## Task A - Compose Stack Definition

Created a compose.yaml file with:

- Application Service
- PostgreSQL Database Service
- Named Volume (db_data)
- Health Checks
- Environment Variables
- Service Dependencies

Key learning:

- Docker Compose provides automatic service discovery.
- Containers communicate using service names instead of localhost.
- Secrets should be isolated through .env files.

---

## Task B - Stack Deployment & Verification

Commands Executed:

```bash
docker compose config
docker compose up -d --build
docker compose ps

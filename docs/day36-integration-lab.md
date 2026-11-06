# 🛠️ Day 36 — Local Integration & Incident Report

## 1. Controlled Failure Simulation
* **What did you change?** Executed `docker stop winter-arc-integration-project-app ` locally.
* **Symptom Observed:** Web app became instantly unavailable (ERR_CONNECTION_REFUSED).
* **Root Cause Command:** `docker ps -a` confirmed container status was 'Exited (137)'.

## 2. Recovery Actions
* **Fix Action:** Ran `docker start winter-arc-integration-project-app ` to restore service.
* **Verification:** `docker ps` confirmed container is 'Up' and healthy.


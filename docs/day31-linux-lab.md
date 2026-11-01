# Day 31: Linux + Networking Incident Report

## 🔍 1. Troubleshooting Drill Log
- **Symptom:** Application initialization failed with `SyntaxError: Invalid regular expression` during startup.
- **Evidence:** `node server.js` output threw exceptions inside `/node_modules/depd/index.js` stack trace.
- **Root Cause:** Cross-filesystem file corruption. Running the node application directly inside a mounted Windows NTFS directory (`/mnt/d/`) caused symlink and character encoding corruption during the npm installation phase.
- **Fix Applied:** Migrated the entire repository layout directly into the native Linux WSL home filesystem (`~/winter-arc-integration-project`), dropped the corrupted `node_modules`, and ran a clean `npm install`.
- **Verification:** Executed `node server.js &` within the native Linux layer and verified successful packet binding via `ss -lntp` on TCP Port 3000.

## 🧠 2. Reflection
- **What was the root cause?** Shared mount filesystem metadata drift between host NTFS and WSL virtual layers.
- **Which command helped identify it?** Native stack dumps from `node server.js` combined with `head` and `sed` exploration of package metadata.

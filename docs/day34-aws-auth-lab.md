# 🔑 Day 34 — AWS Authentication & IAM Least-Privilege Exercise

## 1. Actor Roles & Trust Relationships
* **Deployment Pipeline Role:** Authorized only to push assets and update tasks. Assumes service-specific credentials instead of root admin privileges.
* **App Workload Role (IRSA):** Bound directly to the application compute pods/instances. Eliminates long-term storage of AWS Access Keys in codebases or properties files.
* **Human Operator:** Multi-Factor Authentication (MFA) strictly enforced for console/CLI sessions with custom conditional restrictions.

## 2. Permissions Scoping Matrix
* **Secrets Manager:** `secretsmanager:GetSecretValue` allowed only for specific application resource ARNs.
* **CloudWatch Monitoring:** Access restricted to log stream ingestion (`logs:PutLogEvents`, `logs:CreateLogStream`).


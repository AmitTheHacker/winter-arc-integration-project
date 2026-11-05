# ☁️ Day 35 — Secure & Resilient AWS Architecture Design Lab

## 1. Target Infrastructure Topology
* **VPC Setup:** Custom private cloud setup spanning 2 Availability Zones (AZs) for high redundancy.
* **Public Ingress:** Public Internet -> Route 53 DNS -> Application Load Balancer (ALB) on Ports 80/443.
* **Private Segregation:** Compute workloads (EC2 Auto Scaling / EKS clusters) and Database clusters (PostgreSQL) hosted securely in completely isolated private subnets.

## 2. High Availability & Failover Actions
* **ALB Monitoring:** Health check path configured on `/health`. Unhealthy servers are automatically taken out of rotation.
* **Database Resiliency:** Active Master Database instances with synchronous volume replication to Standby secondary nodes across zones to enforce zero data loss failover.


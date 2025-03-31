# Course Management System - Kubernetes Deployment

## Overview
This project sets up a **Course Management System** using **Spring Boot Microservices** deployed in **Kubernetes**. The system consists of the following components:

- **Eureka Server** – Service discovery for microservices.
- **Spring Cloud Gateway** – API gateway for routing requests.
- **Course Service** – Manages course-related operations.
- **Associate Service** – Handles associate-related operations.
- **Admission Service** – Manages student admissions.
- **MongoDB** – Database used by microservices.
- **NGINX Ingress Controller** – Manages external access to services.

---

## Architecture
The application follows a **microservices architecture**, where each service runs in its own **Kubernetes pod** and communicates via REST APIs.

*(Replace with actual architecture diagram image)*

---

## Prerequisites
Ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/) or a Kubernetes cluster
- [Helm](https://helm.sh/) (for NGINX Ingress)
- [Skaffold](https://skaffold.dev/) *(optional for CI/CD automation)*

---

## Services and Components
### 📌 **Eureka Server**
- **Purpose:** Handles service discovery, allowing microservices to dynamically register themselves.
- **Deployment File:** `eureka-server-deployment.yaml`
- **Service File:** `eureka-server-service.yaml`

### 📌 **Spring Cloud Gateway**
- **Purpose:** Acts as an entry point for all requests and routes them to the appropriate services.
- **Deployment File:** `gateway-deployment.yaml`
- **Service File:** `gateway-service.yaml`
- **Ingress File:** `gateway-ingress.yaml`

### 📌 **Course Service**
- **Purpose:** Manages courses and their details.
- **Deployment File:** `course-service-deployment.yaml`
- **Service File:** `course-service.yaml`

### 📌 **Associate Service**
- **Purpose:** Handles associates who enroll in courses.
- **Deployment File:** `associate-service-deployment.yaml`
- **Service File:** `associate-service.yaml`

### 📌 **Admission Service**
- **Purpose:** Manages student admissions to courses.
- **Deployment File:** `admission-service-deployment.yaml`
- **Service File:** `admission-service.yaml`

### 📌 **MongoDB**
- **Purpose:** Database used by microservices.
- **Deployment File:** `mongodb-deployment.yaml`
- **Service File:** `mongodb-service.yaml`

---

## Kubernetes Setup
### 1️⃣ Start Minikube *(if using Minikube)*
```sh
minikube start
```

### 2️⃣ Install NGINX Ingress Controller
```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
```

### 3️⃣ Deploy Services
```sh
kubectl apply -f k8s/
```
This command deploys all services and their dependencies.

### 4️⃣ Verify Deployments
```sh
kubectl get pods
kubectl get services
kubectl get ingress
```

### 5️⃣ Access the Application
#### ➤ **If using Minikube:**
Add the following entry to `/etc/hosts`:
```sh
127.0.0.1 localhost
```
Access services via:
```sh
curl http://localhost/courses/course/viewAll
curl http://localhost/associate/viewAll
curl http://localhost/admission/viewAll
```

#### ➤ **If using port-forwarding:**
Run the following command:
```sh
kubectl port-forward --namespace ingress-nginx service/ingress-nginx-controller 8090:80
```
Now, access services via:
```sh
http://localhost:8090/courses/course/viewAll
http://localhost:8090/associate/viewAll
http://localhost:8090/admission/viewAll
```

---

## Troubleshooting
### ❌ **Issue: 404 Not Found in Ingress**
✅ Ensure the Ingress is correctly configured:
```sh
kubectl describe ingress gateway-ingress
```
✅ Check if the gateway service is running:
```sh
kubectl get svc | grep gateway
```
✅ If paths are incorrect, verify the **rewrite-target** annotation in `gateway-ingress.yaml`.

### ❌ **Issue: Services Not Registering in Eureka**
✅ Restart services to force re-registration:
```sh
kubectl rollout restart deployment gateway-deployment
```
✅ Check Eureka logs:
```sh
kubectl logs -l app=eureka-server-service
```

---

## Cleanup
To remove all resources:
```sh
kubectl delete -f k8s/
```
To stop Minikube:
```sh
minikube stop
```

---

## Conclusion
This setup provides a **scalable and resilient Course Management System** using Kubernetes. Future improvements can include:
- **Helm Charts** for better manageability.
- **Prometheus & Grafana** for monitoring.
- **Istio Service Mesh** for observability and security.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 🙌 Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

---

### **Happy Coding! 🚀**


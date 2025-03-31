Course Management System - Kubernetes Deployment

Overview

This project sets up a Course Management System using Spring Boot Microservices deployed in Kubernetes. The system includes multiple services such as:

Eureka Server for service discovery

Spring Cloud Gateway as an API gateway

Course Service for managing course-related operations

Associate Service for handling associates

Admission Service for handling course admissions

MongoDB as the database

Nginx Ingress Controller for external access

Architecture

The application follows a microservices architecture, where each service is deployed as a separate pod inside Kubernetes.

(Replace with actual image link)

Prerequisites

Ensure you have the following installed:

Docker

Kubernetes (kubectl)

Minikube or a Kubernetes cluster

Helm (for nginx-ingress)

Skaffold (optional for CI/CD automation)

Services and Components

1. Eureka Server

Handles service discovery, allowing microservices to dynamically register themselves.

Deployment: eureka-server-deployment.yaml

Service: eureka-server-service.yaml

2. Spring Cloud Gateway

Acts as an entry point for all requests and routes them to the appropriate services.

Deployment: gateway-deployment.yaml

Service: gateway-service.yaml

Ingress: gateway-ingress.yaml

3. Course Service

Manages courses and their details.

Deployment: course-service-deployment.yaml

Service: course-service.yaml

4. Associate Service

Handles associates who enroll in courses.

Deployment: associate-service-deployment.yaml

Service: associate-service.yaml

5. Admission Service

Manages student admissions to courses.

Deployment: admission-service-deployment.yaml

Service: admission-service.yaml

6. MongoDB

The database used by microservices.

Deployment: mongodb-deployment.yaml

Service: mongodb-service.yaml

Kubernetes Setup

Step 1: Start Minikube (if using Minikube)

minikube start

Step 2: Install Nginx Ingress Controller

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml

Step 3: Deploy Services

kubectl apply -f k8s/

This will deploy all services and their dependencies.

Step 4: Verify Deployments

kubectl get pods
kubectl get services
kubectl get ingress

Step 5: Access the Application

Add the following entry to /etc/hosts if using Minikube:

127.0.0.1 localhost

Then, access the application via:

curl http://localhost/courses/course/viewAll
curl http://localhost/associate/viewAll
curl http://localhost/admission/viewAll

or Do port-forwarding

kubectl port-forward --namespace ingress-nginx service/ingress-nginx-controller 8090:80

then access applications on local host 8090

http://localhost:8090/courses/course/viewAll
http://localhost:8090/associate/viewAll
http://localhost:8090/admission/viewAll

Troubleshooting

Issue: 404 Not Found in Ingress

Ensure the Ingress is correctly configured:

kubectl describe ingress gateway-ingress

Check if the gateway service is running:

kubectl get svc | grep gateway

If paths are incorrect, verify the rewrite-target annotation in the gateway-ingress.yaml file.

Issue: Services not registering in Eureka

Restart services to force re-registration:

kubectl rollout restart deployment gateway-deployment

Check Eureka logs:

kubectl logs -l app=eureka-server-service

Cleanup

To remove all resources:

kubectl delete -f k8s/

To stop Minikube:

minikube stop

Conclusion

This setup provides a scalable and resilient Course Management System using Kubernetes. Additional improvements can include Helm charts, Prometheus monitoring, and Istio service mesh for better observability and security.

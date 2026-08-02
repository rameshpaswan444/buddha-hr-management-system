![Java](https://img.shields.io/badge/Java-21-orange)

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.x-brightgreen)

![React](https://img.shields.io/badge/React-19-blue)

![MySQL](https://img.shields.io/badge/MySQL-Database-blue)

![License](https://img.shields.io/badge/License-MIT-green)

# Buddha Human Resource Management System

A full-stack Human Resource Management System developed using **Spring Boot**, **React.js**, and **MySQL**. This platform allows job seekers to search and apply for jobs, while administrators can manage companies, job postings, applications, and users through a secure admin dashboard.

---

## Features

### Public Portal

- Home page
- About page
- Services page
- Contact page
- Browse available jobs
- Search and filter jobs
- View job details
- User Registration
- User Login
- Forgot Password
- Reset Password

---

### Job Seeker

- Secure Login with JWT
- Apply for jobs
- View job details
- Upload resume
- Receive email notifications
- Protected routes

---

### Admin Dashboard

- Dashboard with statistics
- Company Management
    - Add Company
    - Update Company
    - Delete Company

- Job Management
    - Add Job
    - Update Job
    - Archive (Disable) Job
    - Restore Job

- Application Management
    - View Applications
    - Update Application Status
    - Delete Application

- User Management
    - View Users
    - Update User Information
    - Update User Role
    - Delete User

---

## Authentication

- JWT Authentication
- Role Based Authorization

Roles

- ADMIN
- STAFF
- JOB_SEEKER

---

## Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication
- MapStruct
- Lombok
- Maven

### Frontend

- React 19
- React Router
- Axios
- Tailwind CSS
- Lucide React

### Database

- MySQL

### Tools

- IntelliJ IDEA
- VS Code
- Git
- GitHub
- Postman

---

## Project Structure

```
Buddha-Human-Resource-FULL-STACK

│

├── buddha-hr-backend

│ └── buddha-hr-backend

│

└── buddha-hr-frontend

└── buddha-hr-frontend
```

---

## Installation

### Backend

```bash
cd buddha-hr-backend/buddha-hr-backend
```

Configure

```
application.properties
```

Run

```bash
mvn spring-boot:run
```

---

### Frontend

```bash
cd buddha-hr-frontend/buddha-hr-frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

---

## Environment Variables

Backend

```
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=

jwt.secret=

mail.username=
mail.password=
```

Frontend

```
VITE_API_URL=http://localhost:8080/api
```

---

## Screenshots

### Home Page

(Add Screenshot)

### Job Listing

(Add Screenshot)

### Job Details

(Add Screenshot)

### Admin Dashboard

(Add Screenshot)

### Company Management

(Add Screenshot)

### User Management

(Add Screenshot)

---

## Future Improvements

- Resume Builder
- Interview Scheduling
- Payment Integration
- Admin Analytics Dashboard
- Company Portal
- Job Recommendations
- Two Factor Authentication
- Docker Deployment
- CI/CD Pipeline


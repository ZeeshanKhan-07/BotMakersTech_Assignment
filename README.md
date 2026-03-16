# JWT Authentication System with Role-Based Access Control

## Assignment Overview

This project implements a **JWT-based authentication system with Role-Based Access Control (RBAC)** using **Spring Boot** for the backend and **React + TypeScript** for the frontend.

The goal of the assignment is to demonstrate how secure authentication and authorization can be implemented in a modern full-stack application.

The system allows users to:

* Register an account
* Login securely
* Receive a JWT authentication token
* Access protected resources based on their role (USER or ADMIN)

The application follows a **stateless authentication architecture** where the backend validates each request using a JWT token.

---

# Technologies Used

## Backend

* Java
* Spring Boot
* Spring Security
* JWT (JSON Web Token)
* Spring Data JPA
* MySQL
* Lombok

## Frontend

* React
* TypeScript
* Tailwind CSS
* Axios
* React Router

---

# System Architecture

```text
React Frontend
      │
      │ HTTP Requests
      ▼
Spring Boot REST API
      │
      │ JWT Authentication
      ▼
MySQL Database
```

The frontend communicates with the backend using REST APIs.
After login, the backend returns a **JWT token**, which is stored in the browser and sent with every protected request.

---

# Features Implemented

## Authentication

* User Registration
* User Login
* Password encryption using BCrypt
* JWT token generation after login

## Authorization

* Role-Based Access Control
* USER role access
* ADMIN role access
* Method level security using Spring Security

Example:

```java
@PreAuthorize("hasRole('USER')")
```

```java
@PreAuthorize("hasRole('ADMIN')")
```

---

# Backend API Endpoints

## Authentication APIs

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Login and receive JWT token |

## User APIs

| Method | Endpoint                  | Description               |
| ------ | ------------------------- | ------------------------- |
| GET    | `/api/user`               | Access user-level content |
| GET    | `/api/user/email/{email}` | Get user details by email |
| GET    | `/api/user/{userId}`      | Get user by ID            |
| DELETE | `/api/user/{userId}`      | Delete user               |

## Admin APIs

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| GET    | `/api/admin`     | Access admin-level content |
| GET    | `/api/users/all` | Get all users              |

---

# JWT Authentication Flow

1. User registers an account.
2. User logs in with email and password.
3. Backend verifies credentials.
4. Backend generates a **JWT token**.
5. Token is returned to the frontend.
6. Frontend stores the token in **localStorage**.
7. Every API request includes the token in the header.

Example request header:

```
Authorization: Bearer <JWT_TOKEN>
```

8. Spring Security validates the token and authorizes access based on user role.

---

# Frontend Features

The frontend provides a simple interface for interacting with the backend APIs.

Pages included:

* Login Page
* Registration Page
* User Dashboard
* Admin Dashboard

The **User Dashboard** displays:

* User name
* User email
* Logout option

Axios is used to send requests and automatically attach the JWT token to API calls.

---

# Frontend Project Structure

```
src
 ├── components
 │   ├── Login.tsx
 │   ├── Register.tsx
 │   ├── UserPage.tsx
 │   └── AdminPage.tsx
 │
 ├── services
 │   ├── api.ts
 │   └── authService.ts
 │
 ├── utils
 │   └── jwt.ts
 │
 ├── App.tsx
 └── main.tsx
```

---

# How to Run the Project

## Backend Setup

1. Clone the repository

```
git clone <repository-url>
```

2. Configure MySQL database in `application.properties`

```
spring.datasource.url=jdbc:mysql://localhost:3306/auth_db
spring.datasource.username=root
spring.datasource.password=yourpassword
```

3. Run the Spring Boot application

```
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Security Implementation

Security is implemented using:

* Spring Security Filter Chain
* JWT Authentication Filter
* Stateless session management
* BCrypt password encoding
* Role-based access control

This ensures that only authenticated users can access protected resources.

---

# Conclusion

This project demonstrates how **JWT authentication and role-based authorization** can be implemented in a full-stack web application using Spring Boot and React.

It provides a secure foundation for building modern web applications with scalable authentication mechanisms.

# ![logo](./frontend/src/assets/logo.png)

# Argent Bank

Argent Bank is a web application developed as part of the Front-End JavaScript React Developer education program at OpenClassrooms. This project focuses on user authentication and API modeling for a banking platform.

## Project Overview

This project is divided into two phases:

### Phase 1: User Authentication

- Develop a responsive web application with React.
- Enable clients to log in and manage their accounts and profiles.
- Integrate the front-end with the back-end using REST API calls.
- Manage application state using Redux.

### Phase 2: Transaction API Modeling

- Propose API endpoints for managing user transactions.
- Design and document the API using Swagger (YAML format).

## Key Features

### Phase 1

- **Homepage:** Users can visit the homepage.
- **Login:**
  - Access the login page (`/login`).
  - Log in using credentials (JWT token authentication).
  - Redirect to the profile page (`/profile`) upon successful login.
- **Profile:**
  - View personal profile information and banking accounts.
  - Edit first and last names and save changes to the database.
- **Logout:**
  - Log out and return to the homepage.

### Phase 2

- **Transaction Management:**
  - Define API endpoints to view, edit, add, or delete transactions.
  - Specify API routes, methods, parameters, and response codes in Swagger documentation.

## Installation Guide

### Clone the Repository

```bash
git clone https://github.com/ssidikov/Argent-Bank.git
```

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Launch the back-end server on port 3001 (default):
   ```bash
   npm run dev:server
   # or
   yarn run dev:server
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Launch the front-end server on port 3000 (default):
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Tools and Technologies

- **Visual Studio Code:** Text editor.
- **Sass:** CSS preprocessor.
- **React 18:** Open-source JavaScript library for building user interfaces.
- **Vite:** Modern build tool to replace Create React App.
- **React Router V7:** Routing library for React.
- **Redux:** State management library.
- **GitHub:** Version control and collaboration platform.

## Skills Acquired

- Implement a state manager in a React application.
- Integrate a front-end application with REST APIs.
- Model and document APIs using Swagger.
- Authenticate users with JWT.

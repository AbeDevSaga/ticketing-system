# Role-Based Ticketing System
## 🚀 Project Overview
This is a **Role-Based Ticketing System** built as a mini-project for job application submission. The system allows users to create support tickets while admins manage and update ticket statuses.

## 🛠 Technologies Used
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** React.js
- **State Management:** Redux
- **Authentication:** JWT (JSON Web Token)
- **Styling:** Tailwind CSS

## 📂 Project Structure
```
/ticketing-system
│-- /backend        # Node.js backend with Express & MongoDB
│   │-- /models     # Mongoose models for MongoDB
│   │-- /routes     # Express routes for API endpoints
│   │-- /config     # Configuration files (database, environment settings)
│   │-- /controllers # Controllers handling business logic for requests
│   │-- /middleware # Middleware functions for authentication & validation
│---- server.js     # Main application file
│---- .env          # Environment variables (not included in repo)
│-- /frontend       # React frontend with Redux state management
│   │-- /components  # Reusable React components for UI
│   │-- /authentication # Login, Signup, and Authentication-related components
│   │-- /dashboard     # User and Admin dashboard views
│   │-- /redux    # Redux store, slice, and reducers for state management
```

## 🔑 Environment Variables
**Backend (.env file - required)**
```env
MONGO_URI=mongodb://localhost:27017/ticketing-system
PORT=5000
JWT_SECRET=3a7f8d9b2c4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0
```
**Frontend**
- No environment variables required.

## 📌 Features
### ✅ **Backend (Node.js, MongoDB)**
- **User Authentication:** JWT-based login & signup
- **User Roles:**
  - User: Can create tickets & view their own tickets.
  - Admin: Can view all tickets & update ticket statuses.
- **Endpoints:**
  - `POST /signup` → Register users (with role selection)
  - `POST /login` → Authenticate users & return a JWT token
  - `POST /tickets` → Create a support ticket (title, description, status)
  - `GET /tickets`
    - Users see only their own tickets
    - Admins see all tickets
  - `PUT /tickets/:id` → Admins can update ticket status (Open, In Progress, Closed)

### ✅ **Frontend (React.js)**
- **Login & Signup Pages**
- **User Dashboard:**
  - List of the user's own support tickets.
  - Form to create new tickets.
- **Admin Dashboard:**
  - List of all tickets with options to update their status.
- **Navigation:** Implemented using React Router.

## 🔧 Installation & Setup
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/AbeDevSaga/ticketing-system.git
cd ticketing-system
```

### 2️⃣ **Backend Setup**
```sh
cd backend
npm install
```
- Create a `.env` file inside `backend/` and add the required environment variables.
- Start the backend server:
```sh
npm start
```
The backend runs on **http://localhost:5000**.

### 3️⃣ **Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```
The frontend runs on **http://localhost:3000**.

## 🎯 Notes
- Make sure MongoDB is running locally or update `MONGO_URI` in `.env`.
- Redux is used for state management.
- Authentication is handled using JWT.
- Admin has access to all tickets, while users only see their own.

## 📨 Submission Details
- **Name:** Amanuel Daniel
- **Date:** 3/2/2025
- **GitHub Repository:** [ticketing-system](https://github.com/AbeDevSaga/ticketing-system.git)

---
🔥 **Thank you for reviewing my project!** If you have any questions, feel free to reach out. 🚀


# 🎥 Apna Video Call (MERN Stack)

A real-time video conferencing application built using the MERN Stack. This project provides user authentication, meeting creation, meeting joining, and real-time communication using Socket.IO.



 ## 🚀 Features

-  User Authentication (Register & Login)
-  Real-Time Video Calling
-  Live Chat
-  Screen Sharing
-  Audio Control
-  Video Control
-  Meeting History
-  Multi-User Video Conference
-  Responsive UI
-  Fast Real-Time Communication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Material UI (MUI)
- Axios
- Socket.IO Client
- CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- bcrypt
- dotenv
- CORS

---

## Real-Time Communication

- WebRTC
- Socket.IO

## 📁 Project Structure

```
Zoom-main/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# 📸 Application Pages

## 🏠 Landing Page

- Welcome Screen
- Login
- Register
- Join as Guest

---

## 🔐 Login Page

- Username
- Password
- Secure Authentication

---

## 📝 Register Page

- Full Name
- Username
- Password

---

## 🏡 Home Page

- Enter Meeting Code
- Join Meeting
- Logout
- Meeting History

---

## 🎥 Video Meeting Page

- Live Video Calling
- Audio On/Off
- Camera On/Off
- Screen Sharing
- Live Chat
- End Call

---

## 📜 History Page

- Previous Meetings
- Meeting Code
- Date

---


## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Zoom-main.git
```

```
cd Zoom-main
```

---

## Backend Setup

```
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Start Backend

```bash
npm run dev
```

---

## Frontend Setup

```
cd frontend
npm install
```

Start Frontend

```bash
npm start
```

Frontend URL

```
http://localhost:3000
```

Backend URL

```
http://localhost:8000
```

---


# API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/users/register |
| POST | /api/v1/users/login |

---

## Meeting

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/users/add_to_activity |
| GET | /api/v1/users/get_all_activity |

---

# Project Workflow

```
Landing Page
      │
      ▼
Register/Login
      │
      ▼
Home Page
      │
      ▼
Enter Meeting Code
      │
      ▼
Join Video Meeting
      │
      ▼
Live Chat + Screen Share
      │
      ▼
Meeting History
```

---



## 👨‍💻 How to Use

1. Register a new account.
2. Login with your credentials.
3. Create a new meeting.
4. Share the Meeting Code.
5. Join the meeting using the Meeting Code.

---

## 📦 Dependencies

### Backend

- Express
- Mongoose
- Socket.IO
- bcrypt
- dotenv
- cors

### Frontend

- React
- React Router DOM
- Axios
- Material UI
- Socket.IO Client

---

## 🔮 Future Improvements

- Video Calling (WebRTC)
- Screen Sharing
- Chat Feature
- File Sharing
- Recording Meetings
- Dark Mode
- Notifications

---


# 📹 Apna Video Call

## 📸 Project Overview

![Project Overview](screenshots/project-overview.png)



## 📄 License

This project is for learning purposes.

---

## 👤 Author-Ayush kumar 





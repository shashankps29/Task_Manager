# 📌 Task Manager – Full Stack Project (React + Spring Boot + MySQL)

A fully functional **Task Management System** built using **React (Frontend)**,  
**Spring Boot (Backend)**, and **MySQL (Database)**.

This project allows users to:
✔ Add Tasks  
✔ View Tasks  
✔ Update Status (Completed / Pending)  
✔ Delete Tasks  
✔ Add Task Time  
✔ Uses Realtime Analog Clock  
✔ Works with a beautiful gradient UI

---

## Tech Stack

### **Frontend**
- React.js
- CSS
- Axios / Fetch API
- Realtime Analog Clock (Custom Component)

### **Backend**
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security (CORS & Basic Auth disabled)
- REST API architecture

### **Database**
- MySQL
- Hibernate ORM

---

##  Project Structure

```
taskmanager/
│── backend/
│   ├── src/main/java/com/example/taskmanagerbackend/
│   ├── application.properties
│   ├── pom.xml
│   └── REST API + Services + Repository + Model
│
│── frontend/
│   ├── src/components/
│   ├── src/App.js
│   ├── package.json
│   └── UI + Axios + Time + Clock
│
└── README.md
```

---

## 🛠 Backend Setup Spring Boot

### 1. Configure Database
In `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskmanager
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 2. Run the backend
```
mvn spring-boot:run
```

Backend runs at:

👉 **http://localhost:8080**

---

## 🖥 Frontend Setup (React)

### 1. Install dependencies
```
cd frontend
npm install
```

### 2. Start the app
```
npm start
```

Frontend runs at:

👉 **http://localhost:3000**

---

## 🔗 API Endpoints REST

### **Base URL**
```
http://localhost:8080/api/tasks
```

### **GET All Tasks**
```
GET /api/tasks
```

### **POST Add Task**
```
POST /api/tasks
```

### **PUT Update Task**
```
PUT /api/tasks/{id}
```

### **DELETE Task**
```
DELETE /api/tasks/{id}
```

---

##  UI Features

- Gradient Background
- Glass-Morphism Card Design
- Smooth Animations
- Realtime Analog Clock
- Status badges (Completed / Pending)
- Task time input
- Fully responsive

---

##  Deployment

### **Frontend → Vercel**
- Import GitHub repo
- Root directory: `frontend`
- Build: `npm run build`
- Output: `build`

### **Backend → Render**
- Root directory: `backend`
- Build command:
```
./mvnw clean package
```
- Start command:
```
java -jar target/*.jar
```

---

## 🙋 About the Author

**Shashank Pratap Singh (Shanky)**  
A passionate developer working on Java, Spring Boot, and React.  
Loves UI design, animations, and creating full-stack projects.

---

## ⭐ Support the Project

If you like this project, give it a ⭐ on GitHub!


# 🤖 Smart Meeting Summary Generator

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC)
![Gemini AI](https://img.shields.io/badge/Google-Gemini%202.5%20Flash-blue)
![License](https://img.shields.io/badge/License-Educational-success)

An AI-powered full-stack web application that converts meeting transcripts into structured meeting summaries using **Google Gemini 2.5 Flash**.

The application automatically extracts:

* 📋 Agenda
* 🎯 Key Decisions
* ✅ Action Items
* 📊 Meeting Analytics

and generates a professional PDF report with a modern responsive dashboard.

---

# ✨ Key Highlights

* 🤖 Google Gemini 2.5 Flash Integration
* ⚡ Spring Boot REST API
* ⚛ React + Vite Frontend
* 🎨 Tailwind CSS UI
* 📄 Professional PDF Export
* 📊 Meeting Analytics Dashboard
* 📋 Copy Summary
* 🔔 Toast Notifications
* 📖 Swagger API Documentation
* 📱 Fully Responsive Design

---

# 🛠 Tech Stack

## Backend

* Java 21
* Spring Boot 3.5
* Spring Web (RestTemplate)
* Maven
* Google Gemini API
* Jackson
* Lombok
* Swagger OpenAPI
* SLF4J Logging

## Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* jsPDF
* jspdf-autotable

---

# 🏗 Architecture

```text
React Frontend
       │
       ▼
Spring Boot REST API
       │
       ▼
Google Gemini 2.5 Flash API
       │
       ▼
AI Generated Meeting Summary
       │
       ▼
Dashboard • Analytics • PDF Export
```

---

# 📂 Project Structure

```text
Entrata
│
├── frontend
├── summary-meeting
├── Screenshots
├── README.md
└── .gitignore
```

---

# 📷 Application Screenshots

## 🏠 Home Page

![Home](Screenshots/Home.png)

---

## 📋 AI Generated Summary & Analytics

![Summary](Screenshots/Summary\&Analytics.png)

---

## 📄 Professional PDF Report

![PDF](Screenshots/PDF.png)

---

## 📖 Swagger Documentation

![Swagger](Screenshots/Swagger.png)

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Yash-Ahire-2004/smart-meeting-summary-generator.git
```

## Backend

```bash
cd summary-meeting
mvn spring-boot:run
```

Backend:

```
http://localhost:8081
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# ⚙ Configuration

Create:

```
src/main/resources/application-local.properties
```

Add:

```properties
gemini.api.key=YOUR_GEMINI_API_KEY
```

Enable:

```properties
spring.profiles.active=local
```

---

# 📡 REST API

### POST

```
/api/summarize
```

### Request

```json
{
  "transcript": "Paste your meeting transcript here..."
}
```

---

# 📄 PDF Report Includes

* Report ID
* Generated Time
* Meeting Analytics
* Agenda
* Key Decisions
* Action Items
* AI Generated Summary

---

# 🌟 Future Improvements

* Authentication
* Database Support
* Meeting History
* Email Reports
* Voice-to-Text
* Calendar Integration
* Multi-language Support

---

# 👨‍💻 Developer

**Yash Ahire**

Java Full Stack Developer

GitHub:
**https://github.com/Yash-Ahire-2004**

---

# 🙏 Acknowledgements

* Google Gemini AI
* Spring Boot
* React
* Tailwind CSS
* jsPDF
* Swagger OpenAPI

---

# 📜 License

Developed as part of the **Entrata AI Assignment**.

⭐ If you found this project helpful, please consider giving it a **Star** on GitHub!

# 🤖 Smart Meeting Summary Generator

An AI-powered web application that converts meeting transcripts into structured meeting summaries using **Google Gemini AI**. The application extracts agenda items, key decisions, action items, and meeting analytics from raw meeting transcripts, providing users with a clean, professional summary that can also be exported as a PDF.

---

# 📌 Features

* 🤖 AI-powered meeting summarization using Google Gemini AI
* 📋 Automatic agenda extraction
* 🎯 Key decision identification
* ✅ Action item extraction with owner and due date
* 📊 Meeting analytics dashboard
* 📄 Professional PDF export
* 📋 Copy summary to clipboard
* 🔔 Toast notifications
* ⏳ Loading indicator during AI processing
* 📱 Fully responsive user interface
* 📖 Swagger API documentation
* 📝 Unique Report ID generation
* 📅 Report generation timestamp
* 🛡️ Input validation and error handling

---

# 🛠 Tech Stack

## Backend

* Java 21
* Spring Boot 3.5
* Maven
* Spring Web
* Spring WebFlux (WebClient)
* Google Gemini API
* Jackson
* Lombok
* SLF4J Logging
* Swagger OpenAPI

---

## Frontend

* React 19
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* jsPDF
* jspdf-autotable
* React Icons

---

# 🏗 System Architecture

```
                +----------------------+
                |   React Frontend     |
                +----------+-----------+
                           |
                           |
                    REST API Call
                           |
                           ▼
                +----------------------+
                | Spring Boot Backend  |
                +----------+-----------+
                           |
                           |
                  Prompt Engineering
                           |
                           ▼
                +----------------------+
                | Google Gemini API    |
                +----------+-----------+
                           |
                           ▼
                 Structured JSON Output
                           |
                           ▼
                React Dashboard & PDF
```

---

# 📂 Project Structure

```
ENTRATA
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── summary-meeting
│   ├── src
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   └── application.properties
│
├── screenshots
│
├── README.md
│
└── .gitignore
```

---

# 📷 Application Screenshots

Add your screenshots inside the **screenshots** folder.

## 🏠 Home Page

```
screenshots/Home.png
```

---

## 📋 AI Generated Summary

```
screenshots/Summary.png
```

---

## 📊 Meeting Analytics

```
screenshots/Analytics.png
```

---

## 📄 Professional PDF Report

```
screenshots/PDF.png
```

---

## 📖 Swagger Documentation

```
screenshots/Swagger.png
```

---

# 🚀 Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Entrata-Smart-Meeting-Summary.git
```

---

## 2. Backend Setup

Navigate to backend folder

```bash
cd summary-meeting
```

Run the application

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8081
```

---

## 3. Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run application

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# ⚙ Configuration

Create your own Google Gemini API Key from Google AI Studio.

Update

```properties
application.properties
```

```properties
spring.application.name=summary-meeting

server.port=8081

gemini.api.key=YOUR_GEMINI_API_KEY
```

---

# 🔌 REST API

## Generate Meeting Summary

**POST**

```
/api/summarize
```

### Request

```json
{
  "transcript": "Paste meeting transcript here..."
}
```

---

### Response

```json
{
  "reportId": "MSG-D1C5915A",
  "generatedAt": "27 Jun 2026 11:03 AM",
  "agenda": [],
  "keyDecisions": [],
  "actionItems": [],
  "statistics": {
    "agendaCount": 4,
    "decisionCount": 4,
    "actionItemCount": 6,
    "transcriptCharacters": 2121
  }
}
```

---

# 📄 PDF Report

The application generates a professional PDF report including:

* Report ID
* Generated Timestamp
* AI Model
* Meeting Analytics
* Agenda
* Key Decisions
* Action Items
* Footer with developer information

---

# 📊 Meeting Analytics

The dashboard automatically calculates:

* Total Agenda Items
* Total Key Decisions
* Total Action Items
* Transcript Character Count

---

# ✨ Future Enhancements

* User Authentication
* Meeting History
* Database Integration
* Email Summary
* Calendar Integration
* Voice-to-Text Support
* Multiple AI Model Support
* Multi-language Support
* Team Collaboration

---

# 👨‍💻 Developer

**Yash Ahire**

Java Full Stack Developer

Technologies:

* Java
* Spring Boot
* React
* Tailwind CSS
* REST API
* Google Gemini AI

---

# 🙏 Acknowledgements

* Google Gemini AI
* Spring Boot
* React
* Tailwind CSS
* jsPDF
* Vite

---

# 📜 License

This project was developed as part of the **Entrata AI Assignment** for educational and evaluation purposes.

---

## ⭐ If you found this project helpful, consider giving it a star on GitHub!

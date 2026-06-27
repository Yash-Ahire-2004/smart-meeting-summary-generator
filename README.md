# 🤖 Smart Meeting Summary Generator

An AI-powered full-stack web application that converts meeting transcripts into structured meeting summaries using **Google Gemini AI**.

The application intelligently extracts:

* 📋 Agenda
* 🎯 Key Decisions
* ✅ Action Items
* 📊 Meeting Analytics

and generates a professional PDF report with a modern, responsive dashboard.

---

## ✨ Features

* 🤖 AI-Powered Meeting Summarization (Google Gemini AI)
* 📋 Automatic Agenda Extraction
* 🎯 Key Decision Identification
* ✅ Action Item Detection with Owner & Due Date
* 📊 Meeting Analytics Dashboard
* 📄 Professional PDF Export
* 📋 Copy Summary to Clipboard
* 🔔 Toast Notifications
* ⏳ Loading Spinner
* 📱 Fully Responsive UI
* 📖 Swagger API Documentation
* 🆔 Unique Report ID Generation
* 📅 Report Generation Timestamp
* 🛡 Exception Handling & Input Validation

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

* React
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* jsPDF
* jspdf-autotable
* React Icons

---

# 🏗 System Architecture

```text
                 React Frontend
                        │
                        ▼
            Spring Boot REST API
                        │
                        ▼
             Google Gemini AI API
                        │
                        ▼
        Structured Meeting Summary JSON
                        │
                        ▼
      Dashboard + PDF Export + Analytics
```

---

# 📂 Project Structure

```text
Entrata
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
│   └── application.properties
│
├── screenshots
│   ├── Home.png
│   ├── Summary.png
│   ├── Analytics.png
│   ├── PDF.png
│   └── Swagger.png
│
├── README.md
└── .gitignore
```

---

# 📷 Application Screenshots

## 🏠 Home Page

![Home Page](screenshots/Home.png)

---

## 📋 AI Generated Meeting Summary

![Summary](screenshots/Summary.png)

---

## 📊 Meeting Analytics Dashboard

![Analytics](screenshots/Analytics.png)

---

## 📄 Professional PDF Report

![PDF](screenshots/PDF.png)

---

## 📖 Swagger API Documentation

![Swagger](screenshots/Swagger.png)

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Yash-Ahire-2004/smart-meeting-summary-generator.git
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd summary-meeting
```

Run the application:

```bash
mvn spring-boot:run
```

Backend URL

```text
http://localhost:8081
```

---

## Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Frontend URL

```text
http://localhost:5173
```

---

# ⚙ Configuration

Create a Google Gemini API Key from **Google AI Studio**.

Create the file:

```text
src/main/resources/application-local.properties
```

Add your API key:

```properties
gemini.api.key=YOUR_GEMINI_API_KEY
```

Enable the local profile:

```properties
spring.profiles.active=local
```

---

# 🔌 REST API

### Generate Meeting Summary

**POST**

```text
/api/summarize
```

### Request

```json
{
  "transcript": "Paste your meeting transcript here..."
}
```

### Sample Response

```json
{
  "reportId": "MSG-D1C5915A",
  "generatedAt": "27 Jun 2026 11:30 AM",
  "agenda": [
    "Sprint Planning"
  ],
  "keyDecisions": [
    "Version 1.0 will be released on Friday"
  ],
  "actionItems": [
    {
      "owner": "Sarah",
      "task": "Improve PDF styling",
      "dueDate": "Wednesday"
    }
  ],
  "statistics": {
    "agendaCount": 1,
    "decisionCount": 1,
    "actionItemCount": 1,
    "transcriptCharacters": 1450
  }
}
```

---

# 📊 Meeting Analytics

The dashboard automatically displays:

* 📋 Agenda Count
* 🎯 Decision Count
* ✅ Action Item Count
* 📝 Transcript Character Count

---

# 📄 PDF Export

The generated PDF includes:

* 🆔 Report ID
* 📅 Generated Timestamp
* 🤖 AI Model Information
* 📊 Meeting Analytics
* 📋 Agenda
* 🎯 Key Decisions
* ✅ Action Items
* 👨‍💻 Developer Footer

---

# 🌟 Future Enhancements

* User Authentication
* Meeting History
* Database Integration
* Email Summary
* Calendar Integration
* Voice-to-Text Support
* Multi-language Support
* Team Collaboration

---

# 👨‍💻 Developer

## **Yash Ahire**

Java Full Stack Developer

### Skills

* Java
* Spring Boot
* React
* REST API
* Tailwind CSS
* Google Gemini AI

GitHub

https://github.com/Yash-Ahire-2004

---

# 🙏 Acknowledgements

* Google Gemini AI
* Spring Boot
* React
* Tailwind CSS
* jsPDF
* Swagger
* Vite

---

# 📜 License

This project was developed as part of the **Entrata AI Assignment** for educational and evaluation purposes.

---

## ⭐ If you found this project helpful, consider giving it a Star on GitHub!

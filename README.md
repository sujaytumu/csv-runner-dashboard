# 🏃‍♂️ CSV Runner Dashboard

A **Next.js + shadcn/ui** web application that allows users to upload a CSV file containing running data (`date`, `person`, `miles run`) and provides **visual insights**, **summary statistics**, and **error validation**.  
Built as part of the **CSV Runner Dashboard Challenge**.

---

## 🚀 Project Overview

This project enables users to:
- Upload a CSV file with **date**, **person**, and **miles run** columns.
- **Parse and validate** CSV headers and data types (with error handling for invalid input).
- **Visualize** the data using **interactive charts**.
- Display **overall** and **per-person metrics** — average, minimum, and maximum miles.
- Provide clear **error messages**, **loading states**, and an **accessible UI**.

**Tech Stack:**  
- ⚛️ Next.js 15  
- 🎨 shadcn/ui (Radix + Tailwind)  
- 📊 Recharts (for data visualization)  
- 🧩 Papaparse (CSV parsing)  
- 💅 Tailwind CSS (styling)

---

## 🧠 Assumptions

- The CSV always contains headers: `date`, `person`, and `miles run` (case-insensitive).
- `date` is in `YYYY-MM-DD` or valid date format parseable by JavaScript.
- `miles run` is a numeric field (integer or float).
- No authentication system is included (focus is purely on visualization).
- All processing is done client-side; no backend API or database is required.

---

## ⚙️ Prerequisites

| Tool | Version | Purpose |
|------|----------|----------|
| Node.js | ≥ 18.0.0 | For Next.js runtime |
| npm | ≥ 9.0.0 | Package manager |
| Git | Latest | For cloning repo |

No local database or external services are required.

---

## 🧩 Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/sujaytumu/csv-runner-dashboard.git
cd csv-runner-dashboard

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Environment Setup

Create a .env file from .env.example:
.env file is prepared for future enhancements like backend APIs or deployments.

### 4️⃣ Run the Development Server
npm run dev

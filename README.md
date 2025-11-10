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


## ✅ Run & Verify
## 🧾 Step-by-Step Verification

### 🟢 1. Upload a CSV File
- Use the provided **sample CSV** below.
- Invalid columns or missing fields trigger clear validation errors.

### 🟢 2. View Dashboard
- Displays **overall metrics** → *average, minimum, and maximum miles run*.
- Shows **per-person breakdowns** with individual charts/tables.

### 🟢 3. Chart Visualization
- Displays **total miles run by each person over time**.
- Includes **hover tooltips**, **axis labels**, and smooth chart transitions.

### 🟢 4. Error Handling
- **Invalid CSV →** shows descriptive error (e.g., `"Missing column: miles run"`).  
- **Empty CSV →** shows message prompting upload of valid data.

---

### 📂 **Sample CSV**
```csv
date,person,miles run
2025-01-01,John,3.5
2025-01-02,Jane,5.2
2025-01-03,John,4.1
2025-01-04,Jane,2.9
2025-01-05,Mark,6.3
```

## 📊 Features & Limitations
### ✅ Features

📁 CSV Upload, Parsing & Validation using Papaparse.

📊 Dynamic Charts (line + bar) powered by Recharts.

👥 Per-person analytics and overall summary metrics.

🧱 Modern shadcn/ui components with accessible design.

⚙️ Handles invalid, empty, and malformed CSVs gracefully.

### ⚠️ Limitations

❌ No persistent storage (data resets on refresh).

🕒 Large CSVs (>10k rows) may cause slight performance lag.

📄 Only supports CSV format (no Excel/JSON input).

🔮 Future Improvements

💾 Add local storage or backend persistence.

🖱️ Support file drag-and-drop uploads.

🖼️ Allow exporting filtered data and charts as images.

📅 Add filters by date range and runner name.

## 🧱 Notes on Architecture

🗂️ Folder Structure

```
csv-runner-dashboard/
├── app/
│   ├── page.tsx            # Main dashboard page
│   ├── components/
│   │   ├── UploadForm.tsx  # Handles CSV upload and parsing
│   │   ├── Charts.tsx      # Renders overall + per-person charts
│   │   └── Metrics.tsx     # Displays summary metrics
│   ├── lib/
│   │   └── parseCSV.ts     # CSV validation and formatting logic
│   ├── styles/
│   │   └── globals.css     # Tailwind + global styles
│   └── utils/
│       └── helpers.ts      # Utility functions for stats computation
├── public/
│   └── sample.csv          # Sample CSV for testing
├── .env.example
├── package.json
└── README.md
```

### 🧮 Data & State Flow

CSV data is parsed via Papaparse → stored in React state.

State is shared across charts and metrics using Context API or props.

Average, Min, and Max computations are done in-memory.

Recharts updates automatically when the state changes.

## ♿ Accessibility & UI

🏷️ All form inputs have associated labels for screen readers.

🎯 Proper focus states, color contrast, and spacing maintained.

📱 Responsive layout for desktop & mobile using Tailwind grid utilities.

🧭 Charts include tooltips, legends, and accessible colors.

✨ Typography and spacing follow shadcn/ui design guidelines.

Charts include tooltips, legends, and accessible color contrast.

Typography and spacing aligned with shadcn/ui design guidelines.

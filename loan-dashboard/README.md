# Loan Tracking Dashboard

A mini full-stack project for a Software Engineer Internship application at GoodLeap. This dashboard helps view and filter customer loans, simulating a sustainable home improvement financing platform.

## Features
- View customer loans in a table
- Filter loans by status (Approved, Pending, Rejected)
- Summary stats: total loans, sum of approved loans, average loan size
- Fetches data from a mock REST API (json-server)
- Clean, modular React code
- Basic UI polish and color-coded statuses

## Tech Stack
- React (Vite)
- Axios
- json-server (mock API)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the mock API
```bash
npx json-server --watch db.json --port 3001
```

### 3. Start the React app
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Mock API: http://localhost:3001/loans

## Project Structure
```
loan-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── LoanTable.jsx
│   │   ├── LoanSummary.jsx
│   │   └── Filter.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── db.json         # Mock API data
├── package.json
└── ...
```

## Sample Loan Object
```json
{
  "id": 1,
  "name": "Alice",
  "amount": 50000,
  "status": "Approved",
  "loan_date": "2024-11-01"
}
```

---

**Made for GoodLeap Internship Application**

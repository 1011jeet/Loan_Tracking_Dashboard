

# Loan Analytics Dashboard

A React-based dashboard simulating an internal fintech tool to visualise and filter customer loan data. Built as part of a personal learning sprint for the GoodLeap Software Engineering Internship.

## Features

* Table view of customer loans
* Dropdown filter by loan status (Approved, Pending, Rejected)
* Dynamic summary metrics:

  * Total number of loans
  * Sum of approved loan amounts
  * Average loan size
* Status-based colour indicators:

  * Green for Approved
  * Orange for Pending
  * Red for Rejected
* Local mock backend using JSON Server

## Tech Stack

* React (Vite)
* Axios
* JSON Server (Mock API)
* HTML/CSS

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/1011jeet/Loan_Tracking_Dashboard.git
cd Loan_Tracking_Dashboard
npm install
```

## Usage

Start the mock backend server:

```bash
npx json-server --watch db.json --port 3001
```

Start the React development server (in a separate terminal):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the dashboard.

## Sample Data

```json
{
  "id": 1,
  "name": "Alice",
  "amount": 50000,
  "status": "Approved",
  "loan_date": "2024-11-01"
}
```

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Filter.jsx
│   │   ├── LoanSummary.jsx
│   │   └── LoanTable.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
└── README.md
```

## Notes

This is not a production-ready project. It was built in \~5 hours to practice frontend-backend interaction and REST API usage.

## Author

**Jeet Rachwani**
[GitHub](https://github.com/1011jeet) • [LinkedIn](https://www.linkedin.com/in/jeet-rachwani-72a7301b1/)

If this helped you, feel free to give a ⭐

---



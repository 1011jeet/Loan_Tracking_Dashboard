import React, { useEffect, useState } from "react";
import axios from "axios";
import LoanTable from "./components/LoanTable";
import LoanSummary from "./components/LoanSummary";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3001/loans")
      .then(res => {
        setLoans(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch loans. Is the mock API running?");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (status === "All") {
      setFilteredLoans(loans);
    } else {
      setFilteredLoans(loans.filter(l => l.status === status));
    }
  }, [loans, status]);

  return (
    <div className="app-container">
      <h1>Loan Tracking Dashboard</h1>
      <Filter currentStatus={status} onChange={setStatus} />
      <LoanSummary loans={filteredLoans} />
      <LoanTable loans={filteredLoans} loading={loading} error={error} />
    </div>
  );
}

export default App;

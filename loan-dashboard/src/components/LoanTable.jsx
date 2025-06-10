import React from "react";
import "./LoanTable.css";

const statusColors = {
  Approved: "green",
  Pending: "orange",
  Rejected: "red"
};

export default function LoanTable({ loans, loading, error }) {
  if (loading) return <div className="loading">Loading loans...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!loans.length) return <div>No loans found.</div>;

  return (
    <table className="loan-table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Loan Amount</th>
          <th>Status</th>
          <th>Loan Date</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.name}</td>
            <td>${loan.amount.toLocaleString()}</td>
            <td style={{ color: statusColors[loan.status] }}>{loan.status}</td>
            <td>{loan.loan_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 
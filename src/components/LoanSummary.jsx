import React from "react";

export default function LoanSummary({ loans }) {
  const totalLoans = loans.length;
  const approvedLoans = loans.filter(l => l.status === "Approved");
  const sumApproved = approvedLoans.reduce((sum, l) => sum + l.amount, 0);
  const avgLoan = totalLoans ? (loans.reduce((sum, l) => sum + l.amount, 0) / totalLoans) : 0;

  return (
    <div className="loan-summary">
      <div>Total Loans: <strong>{totalLoans}</strong></div>
      <div>Sum of Approved Loans: <strong>${sumApproved.toLocaleString()}</strong></div>
      <div>Average Loan Size: <strong>${avgLoan.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
    </div>
  );
} 
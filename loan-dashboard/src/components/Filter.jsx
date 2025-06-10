import React from "react";

const statuses = ["All", "Approved", "Pending", "Rejected"];

export default function Filter({ currentStatus, onChange }) {
  return (
    <div className="filter">
      <label htmlFor="status-filter">Filter by Status: </label>
      <select
        id="status-filter"
        value={currentStatus}
        onChange={e => onChange(e.target.value)}
      >
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
} 
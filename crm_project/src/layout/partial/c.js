import React from 'react';
import './c.css';

export const DashboardCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="dashboard-card" style={{ backgroundColor: bgColor }}>
      <div className="dashboard-card-icon">{icon}</div>
      <div className="dashboard-card-content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

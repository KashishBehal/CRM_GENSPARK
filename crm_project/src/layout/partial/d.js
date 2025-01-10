import React from 'react';
import { DashboardCard } from './c';
import { FaUsers, FaTicketAlt, FaChartLine } from 'react-icons/fa';

export const Dash = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DashboardCard
          title="Total Users"
          value="1,024"
          icon={<FaUsers />}
          bgColor="#2563eb"
        />
        <DashboardCard
          title="Tickets Resolved"
          value="389"
          icon={<FaTicketAlt />}
          bgColor="#1e3a8a"
        />
        <DashboardCard
          title="Monthly Growth"
          value="15%"
          icon={<FaChartLine />}
          bgColor="#1e40af"
        />
      </div>
    </div>
  );
};

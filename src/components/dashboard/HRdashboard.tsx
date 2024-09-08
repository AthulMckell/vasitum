"use client";
// File: src/components/dashboard/HRDashboard.tsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';

export default function HRDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <DashboardContent />
      </div>
    </div>
  );
}
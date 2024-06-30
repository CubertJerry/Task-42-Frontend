import React from 'react';
import CreateShortURL from './createshorturl';
import URLList from './URLList';

function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <CreateShortURL />
      <URLList />
    </div>
  );
}

export default Dashboard;
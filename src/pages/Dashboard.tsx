import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TripOverview from '../components/TripOverview';
import MapView from '../components/MapView';
import ActivityFeed from '../components/ActivityFeed';
const Dashboard: React.FC = () => {
  const [activeTrips, setActiveTrips] = useState(3);
  return <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white">
      <Navbar activeTrips={activeTrips} />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TripOverview />
            <MapView />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>
      </div>
      <Routes>{/* Additional routes can be added here */}</Routes>
    </div>;
};
export default Dashboard;
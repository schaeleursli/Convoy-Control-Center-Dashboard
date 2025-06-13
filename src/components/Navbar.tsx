import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, BellIcon, UserIcon, ChevronDownIcon, LogOutIcon, SettingsIcon, HelpCircleIcon } from 'lucide-react';
interface NavbarProps {
  activeTrips: number;
}
const Navbar: React.FC<NavbarProps> = ({
  activeTrips
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(3);
  return <header className="bg-[#1e293b]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8200] to-[#cc6600] flex items-center justify-center mr-3 shadow-md shadow-orange-500/20">
              <TruckIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Convoy Control</h1>
              <p className="text-xs text-gray-400">
                Real-time Transport Monitoring
              </p>
            </div>
          </div>
          {/* Status Indicators */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 shadow-md shadow-green-500/50"></div>
              <span className="text-sm font-medium text-gray-300">
                Live Tracking
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#ff8200]/20 flex items-center justify-center mr-2">
                <span className="text-xs font-semibold text-[#ff8200]">
                  {activeTrips}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-300">
                Active Trips
              </span>
            </div>
            <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
              Supervisor
            </div>
          </div>
          {/* User Controls */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <BellIcon className="w-5 h-5 text-gray-300" />
                {notifications > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-[#ff8200] rounded-full text-[10px] font-bold flex items-center justify-center animate-bounce">
                    {notifications}
                  </span>}
              </button>
            </div>
            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setShowUserMenu(!showUserMenu)}>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <UserIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-gray-200">
                    John Doe
                  </div>
                  <div className="text-xs text-gray-400">Fleet Supervisor</div>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              </button>
              {/* Dropdown Menu */}
              {showUserMenu && <div className="absolute right-0 mt-2 w-48 bg-[#1e293b]/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 py-1 z-50">
                  <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                    <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
                    Profile
                  </Link>
                  <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                    <SettingsIcon className="w-4 h-4 mr-2 text-gray-400" />
                    Settings
                  </Link>
                  <Link to="/help" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                    <HelpCircleIcon className="w-4 h-4 mr-2 text-gray-400" />
                    Help
                  </Link>
                  <div className="border-t border-gray-700 my-1"></div>
                  <Link to="/login" className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-white/5">
                    <LogOutIcon className="w-4 h-4 mr-2" />
                    Sign Out
                  </Link>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;
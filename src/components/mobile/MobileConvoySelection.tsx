import React from 'react';
import { TruckIcon, MapPinIcon, CalendarIcon, ClockIcon, UsersIcon, ChevronRightIcon, RefreshCwIcon, UserIcon } from 'lucide-react';
interface ConvoyAssignment {
  id: string;
  origin: string;
  destination: string;
  status: 'ready' | 'pending' | 'active';
  date: string;
  time: string;
  description: string;
  distance: number;
  duration: string;
  sections: string[];
  assignedSection: string;
}
const MobileConvoySelection: React.FC = () => {
  const assignments: ConvoyAssignment[] = [{
    id: 'CONV-2024-001',
    origin: 'Toronto',
    destination: 'Montreal',
    status: 'ready',
    date: 'Mar 15',
    time: '06:00',
    description: 'Steel Beams Transport',
    distance: 540,
    duration: '8h 30m',
    sections: ['A', 'B'],
    assignedSection: 'A'
  }, {
    id: 'CONV-2024-002',
    origin: 'Vancouver',
    destination: 'Calgary',
    status: 'pending',
    date: 'Mar 16',
    time: '07:00',
    description: 'Heavy Machinery Transport',
    distance: 605,
    duration: '9h 15m',
    sections: ['A', 'B', 'C'],
    assignedSection: 'B'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Header */}
      <div className="sticky top-0 bg-[#1e293b]/95 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
            <TruckIcon className="w-5 h-5 text-[#ff8200]" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Select Convoy</h1>
            <p className="text-xs text-gray-400">Available Assignments</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      {/* Assignment List */}
      <div className="p-4 space-y-4">
        {assignments.map(convoy => <div key={convoy.id} className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4">
            {/* Convoy Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${convoy.status === 'ready' ? 'bg-green-500' : convoy.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                  <span className="text-white font-medium">{convoy.id}</span>
                </div>
                <div className="flex items-center mt-1 space-x-2 text-sm text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{convoy.date}</span>
                  <ClockIcon className="w-4 h-4 ml-2" />
                  <span>{convoy.time}</span>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${convoy.status === 'ready' ? 'bg-green-500/20 text-green-400' : convoy.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {convoy.status.toUpperCase()}
              </div>
            </div>
            {/* Route Info */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex-shrink-0 w-6">
                <MapPinIcon className="w-5 h-5 text-[#ff8200]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  {convoy.origin}
                </div>
                <div className="h-4 border-l border-dashed border-gray-600 ml-2" />
                <div className="text-sm font-medium text-white">
                  {convoy.destination}
                </div>
              </div>
              <div className="text-right text-sm text-gray-400">
                <div>{convoy.distance} km</div>
                <div>{convoy.duration}</div>
              </div>
            </div>
            {/* Convoy Details */}
            <div className="mb-4">
              <div className="text-sm text-gray-300">{convoy.description}</div>
              <div className="flex items-center mt-2 space-x-2">
                <UsersIcon className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">
                  Sections: {convoy.sections.join(', ')} | Yours:{' '}
                  {convoy.assignedSection}
                </span>
              </div>
            </div>
            {/* Action Button */}
            <button className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg py-3 px-4 text-white font-medium flex items-center justify-between hover:bg-[#0f172a] transition-colors">
              <span>Select This Convoy</span>
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>)}
      </div>
      {/* Refresh Button */}
      <div className="fixed bottom-4 left-4 right-4">
        <button className="w-full bg-[#1e293b]/95 backdrop-blur-xl border border-white/10 rounded-lg py-4 text-gray-300 flex items-center justify-center space-x-2">
          <RefreshCwIcon className="w-5 h-5" />
          <span>Refresh Assignments</span>
        </button>
        <div className="text-center text-xs text-gray-500 mt-2">
          Last Updated: 2 minutes ago
        </div>
      </div>
    </div>;
};
export default MobileConvoySelection;
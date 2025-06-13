import React, { useState } from 'react';
import { MapPinIcon, PlusIcon, XIcon, AlertTriangleIcon, ClockIcon, InfoIcon } from 'lucide-react';
interface Waypoint {
  id: string;
  name: string;
  type: 'checkpoint' | 'rest' | 'refuel' | 'emergency';
  coordinates: string;
  estimatedTime: string;
  notes: string;
}
const RouteWaypoints: React.FC = () => {
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  const addWaypoint = () => {
    const newWaypoint: Waypoint = {
      id: String(waypoints.length + 1),
      name: '',
      type: 'checkpoint',
      coordinates: '',
      estimatedTime: '',
      notes: ''
    };
    setWaypoints([...waypoints, newWaypoint]);
  };
  const updateWaypoint = (id: string, updates: Partial<Waypoint>) => {
    setWaypoints(waypoints.map(waypoint => waypoint.id === id ? {
      ...waypoint,
      ...updates
    } : waypoint));
  };
  const removeWaypoint = (id: string) => {
    setWaypoints(waypoints.filter(waypoint => waypoint.id !== id));
  };
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0f172a]/50 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
            <MapPinIcon className="h-5 w-5 text-[#ff8200]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Route Planning</h4>
            <p className="text-sm text-gray-400">
              Define waypoints and route details
            </p>
          </div>
        </div>
        <button onClick={addWaypoint} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
          <PlusIcon className="w-4 h-4" />
          <span>Add Waypoint</span>
        </button>
      </div>
      {/* Route Restrictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangleIcon className="w-5 h-5 text-yellow-500" />
            <h5 className="text-white font-medium">Route Restrictions</h5>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Maximum Height</span>
              <input type="text" placeholder="Enter height" className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none w-32" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Maximum Weight</span>
              <input type="text" placeholder="Enter weight" className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none w-32" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Speed Limit</span>
              <input type="text" placeholder="Enter speed" className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none w-32" />
            </div>
          </div>
        </div>
        <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <ClockIcon className="w-5 h-5 text-blue-500" />
            <h5 className="text-white font-medium">Time Estimates</h5>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Total Distance</span>
              <input type="text" placeholder="Enter distance" className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none w-32" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Estimated Duration</span>
              <input type="text" placeholder="Enter duration" className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none w-32" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Buffer Time</span>
              <input type="text" placeholder="Enter buffer" className="bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-1 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none w-32" />
            </div>
          </div>
        </div>
      </div>
      {/* Waypoints */}
      <div className="space-y-4">
        {waypoints.map(waypoint => <div key={waypoint.id} className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow mr-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <input type="text" value={waypoint.name} onChange={e => updateWaypoint(waypoint.id, {
                name: e.target.value
              })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Waypoint name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Type
                  </label>
                  <select value={waypoint.type} onChange={e => updateWaypoint(waypoint.id, {
                type: e.target.value as Waypoint['type']
              })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none">
                    <option value="checkpoint">Checkpoint</option>
                    <option value="rest">Rest Stop</option>
                    <option value="refuel">Refuel Point</option>
                    <option value="emergency">Emergency Point</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Coordinates
                  </label>
                  <input type="text" value={waypoint.coordinates} onChange={e => updateWaypoint(waypoint.id, {
                coordinates: e.target.value
              })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Lat, Long" />
                </div>
              </div>
              <button onClick={() => removeWaypoint(waypoint.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Estimated Time
                </label>
                <input type="time" value={waypoint.estimatedTime} onChange={e => updateWaypoint(waypoint.id, {
              estimatedTime: e.target.value
            })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Notes
                </label>
                <input type="text" value={waypoint.notes} onChange={e => updateWaypoint(waypoint.id, {
              notes: e.target.value
            })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Additional information" />
              </div>
            </div>
          </div>)}
      </div>
      {/* Map Placeholder */}
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <InfoIcon className="w-5 h-5 text-blue-400" />
            <h6 className="text-white font-medium">Route Map</h6>
          </div>
        </div>
        <div className="bg-[#0f172a]/50 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-400">
            Interactive route map will be implemented in the next phase.
          </p>
        </div>
      </div>
    </div>;
};
export default RouteWaypoints;
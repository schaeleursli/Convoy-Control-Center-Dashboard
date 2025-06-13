import React from 'react';
import { TruckIcon, AlertTriangleIcon } from 'lucide-react';
import type { ConvoyFormData } from '../index';
interface ConvoyOverviewProps {
  formData: ConvoyFormData;
  setFormData: React.Dispatch<React.SetStateAction<ConvoyFormData>>;
}
const ConvoyOverview: React.FC<ConvoyOverviewProps> = ({
  formData,
  setFormData
}) => {
  const handleConstraintChange = (key: keyof ConvoyFormData['constraints']) => {
    setFormData({
      ...formData,
      constraints: {
        ...formData.constraints,
        [key]: !formData.constraints[key]
      }
    });
  };
  return <div className="space-y-6">
      {/* Basic Convoy Information */}
      <div className="bg-[#0f172a]/50 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
            <TruckIcon className="h-5 w-5 text-[#ff8200]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Convoy Information
            </h4>
            <p className="text-sm text-gray-400">Basic movement details</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Convoy ID
            </label>
            <input type="text" value={formData.convoyId} disabled className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm disabled:opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Movement Name
            </label>
            <input type="text" value={formData.movementName} onChange={e => setFormData({
            ...formData,
            movementName: e.target.value
          })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Enter movement name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Priority Level
            </label>
            <div className="flex space-x-3">
              {['high', 'medium', 'low'].map(priority => <button key={priority} onClick={() => setFormData({
              ...formData,
              priority: priority as ConvoyFormData['priority']
            })} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${formData.priority === priority ? 'bg-[#ff8200] text-white' : 'bg-[#1e293b]/50 text-gray-400 hover:bg-[#1e293b] border border-white/10'}`}>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </button>)}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Movement Date
            </label>
            <input type="date" value={formData.movementDate} onChange={e => setFormData({
            ...formData,
            movementDate: e.target.value
          })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
          </div>
        </div>
      </div>
      {/* Movement Constraints */}
      <div className="bg-[#0f172a]/50 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Movement Constraints
            </h4>
            <p className="text-sm text-gray-400">
              Operational requirements and limitations
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {Object.entries(formData.constraints).map(([key, value]) => <label key={key} className="flex items-center space-x-3 text-sm text-gray-300 cursor-pointer">
                <input type="checkbox" checked={value} onChange={() => handleConstraintChange(key as keyof ConvoyFormData['constraints'])} className="rounded border-gray-700 bg-[#1e293b]/50 text-[#ff8200] focus:ring-[#ff8200] focus:ring-offset-[#1e293b]" />
                <span>
                  {key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </label>)}
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Max Speed Limit (km/h)
              </label>
              <input type="number" value={formData.maxSpeed} onChange={e => setFormData({
              ...formData,
              maxSpeed: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Enter speed limit" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Special Instructions
              </label>
              <textarea value={formData.specialInstructions} onChange={e => setFormData({
              ...formData,
              specialInstructions: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none h-24 resize-none" placeholder="Enter any special instructions or requirements" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ConvoyOverview;
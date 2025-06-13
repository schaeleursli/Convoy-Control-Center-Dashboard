import React from 'react';
import { CheckCircleIcon, TruckIcon, MapPinIcon, RadioIcon, AlertTriangleIcon } from 'lucide-react';
import { ConvoyFormData } from '..';
interface ConvoySummaryProps {
  formData: ConvoyFormData;
}
const ConvoySummary: React.FC<ConvoySummaryProps> = ({
  formData
}) => {
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0f172a]/50 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
            <CheckCircleIcon className="h-5 w-5 text-[#ff8200]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Review & Submit
            </h4>
            <p className="text-sm text-gray-400">
              Verify convoy details before submission
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overview Summary */}
        <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <TruckIcon className="w-5 h-5 text-[#ff8200]" />
            <h6 className="text-white font-medium">Convoy Overview</h6>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Convoy ID</span>
              <span className="text-white">{formData.convoyId}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Movement Name</span>
              <span className="text-white">{formData.movementName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Priority</span>
              <span className="text-white capitalize">{formData.priority}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Date</span>
              <span className="text-white">{formData.movementDate}</span>
            </div>
          </div>
        </div>
        {/* Route Summary */}
        <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-4">
            <MapPinIcon className="w-5 h-5 text-green-400" />
            <h6 className="text-white font-medium">Route Details</h6>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Origin</span>
              <span className="text-white">{formData.originLocation}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Destination</span>
              <span className="text-white">{formData.destination}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Distance</span>
              <span className="text-white">
                {formData.estimatedDistance} km
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Duration</span>
              <span className="text-white">
                {formData.plannedDuration.hours}h{' '}
                {formData.plannedDuration.minutes}m
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Constraints Summary */}
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangleIcon className="w-5 h-5 text-yellow-400" />
          <h6 className="text-white font-medium">Movement Constraints</h6>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(formData.constraints).map(([key, value]) => <div key={key} className={`flex items-center space-x-2 text-sm ${value ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-2 h-2 rounded-full ${value ? 'bg-green-400' : 'bg-gray-600'}`} />
              <span className="capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </div>)}
        </div>
      </div>
      {/* Additional Information */}
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <RadioIcon className="w-5 h-5 text-blue-400" />
          <h6 className="text-white font-medium">Additional Information</h6>
        </div>
        <div className="space-y-4">
          <div className="text-sm">
            <h6 className="text-gray-400 mb-2">Special Instructions</h6>
            <p className="text-white bg-[#0f172a]/50 rounded-lg p-3">
              {formData.specialInstructions || 'No special instructions provided'}
            </p>
          </div>
          <div className="text-sm">
            <h6 className="text-gray-400 mb-2">Notes</h6>
            <p className="text-white bg-[#0f172a]/50 rounded-lg p-3">
              {formData.notes || 'No additional notes'}
            </p>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors">
          Edit Details
        </button>
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all">
          Submit Convoy Plan
        </button>
      </div>
    </div>;
};
export default ConvoySummary;
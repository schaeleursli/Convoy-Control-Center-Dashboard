import React, { useState } from 'react';
import { TruckIcon, MapPinIcon, UserIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import Modal from '../shared/Modal';
interface NewConvoyModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewConvoyModal: React.FC<NewConvoyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    convoyId: 'CNV-2023-0457',
    startLocation: '',
    endLocation: '',
    driver: '',
    date: '',
    time: '',
    description: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Create New Convoy">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Convoy ID */}
        <div className="flex items-center justify-between bg-[#0f172a]/50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
              <TruckIcon className="h-5 w-5 text-[#ff8200]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Convoy ID</p>
              <p className="text-lg font-semibold text-white">
                {formData.convoyId}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
            Pending
          </span>
        </div>
        {/* Route Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-300">Route Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm text-gray-400 mb-2">
                <MapPinIcon className="h-4 w-4 mr-1 text-[#ff8200]" />
                Start Location
              </label>
              <input type="text" value={formData.startLocation} onChange={e => setFormData({
              ...formData,
              startLocation: e.target.value
            })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Enter start location" required />
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-400 mb-2">
                <MapPinIcon className="h-4 w-4 mr-1 text-green-500" />
                End Location
              </label>
              <input type="text" value={formData.endLocation} onChange={e => setFormData({
              ...formData,
              endLocation: e.target.value
            })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Enter destination" required />
            </div>
          </div>
        </div>
        {/* Driver & Schedule Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center text-sm text-gray-400 mb-2">
              <UserIcon className="h-4 w-4 mr-1" />
              Assigned Driver
            </label>
            <select value={formData.driver} onChange={e => setFormData({
            ...formData,
            driver: e.target.value
          })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" required>
              <option value="">Select driver</option>
              <option value="Alex Johnson">Alex Johnson</option>
              <option value="Sarah Miller">Sarah Miller</option>
              <option value="Michael Chen">Michael Chen</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm text-gray-400 mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" />
                Date
              </label>
              <input type="date" value={formData.date} onChange={e => setFormData({
              ...formData,
              date: e.target.value
            })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" required />
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-400 mb-2">
                <ClockIcon className="h-4 w-4 mr-1" />
                Time
              </label>
              <input type="time" value={formData.time} onChange={e => setFormData({
              ...formData,
              time: e.target.value
            })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" required />
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="flex items-center text-sm text-gray-400 mb-2">
            Additional Details
          </label>
          <textarea value={formData.description} onChange={e => setFormData({
          ...formData,
          description: e.target.value
        })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none h-24 resize-none" placeholder="Enter any additional convoy details..." />
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 border-t border-white/10 pt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
            Create Convoy
          </button>
        </div>
      </form>
    </Modal>;
};
export default NewConvoyModal;
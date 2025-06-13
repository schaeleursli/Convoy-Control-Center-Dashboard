import React from 'react';
import { FileTextIcon, CheckCircleIcon, ClockIcon, MapPinIcon, CameraIcon, UserIcon } from 'lucide-react';
import Modal from '../shared/Modal';
interface ReportViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportData: {
    id: string;
    convoy: string;
    driver: string;
    timestamp: string;
    location: string;
    status: string;
    details: string;
    images: string[];
  };
}
const ReportViewModal: React.FC<ReportViewModalProps> = ({
  isOpen,
  onClose,
  reportData
}) => {
  return <Modal isOpen={isOpen} onClose={onClose} title="Inspection Report">
      <div className="space-y-6">
        {/* Report Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <FileTextIcon className="h-5 w-5 text-[#ff8200]" />
              <h4 className="text-lg font-semibold text-white">
                {reportData.id}
              </h4>
            </div>
            <div className="mt-1 flex items-center space-x-3 text-sm text-gray-400">
              <span className="flex items-center">
                <UserIcon className="mr-1 h-4 w-4" />
                {reportData.driver}
              </span>
              <span className="flex items-center">
                <ClockIcon className="mr-1 h-4 w-4" />
                {reportData.timestamp}
              </span>
            </div>
          </div>
          <div className="flex h-8 items-center rounded-full bg-green-500/20 px-3 text-sm font-medium text-green-400">
            <CheckCircleIcon className="mr-1.5 h-4 w-4" />
            {reportData.status}
          </div>
        </div>
        {/* Location */}
        <div className="rounded-lg bg-[#0f172a]/50 p-4">
          <div className="flex items-center text-sm text-gray-300">
            <MapPinIcon className="mr-2 h-4 w-4 text-[#ff8200]" />
            <span>{reportData.location}</span>
          </div>
        </div>
        {/* Report Details */}
        <div className="space-y-4">
          <h5 className="text-sm font-semibold text-gray-300">
            Report Details
          </h5>
          <div className="rounded-lg bg-[#0f172a]/50 p-4">
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {reportData.details}
            </p>
          </div>
        </div>
        {/* Images */}
        {reportData.images.length > 0 && <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-semibold text-gray-300">
                Attached Photos
              </h5>
              <span className="flex items-center text-sm text-gray-400">
                <CameraIcon className="mr-1 h-4 w-4" />
                {reportData.images.length} photos
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {reportData.images.map((image, index) => <div key={index} className="aspect-video overflow-hidden rounded-lg border border-white/10">
                  <img src={image} alt={`Report attachment ${index + 1}`} className="h-full w-full object-cover" />
                </div>)}
            </div>
          </div>}
        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 border-t border-white/10 pt-4">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors">
            Close
          </button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
            Approve Report
          </button>
        </div>
      </div>
    </Modal>;
};
export default ReportViewModal;
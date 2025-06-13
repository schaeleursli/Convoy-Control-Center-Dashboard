import React, { useState } from 'react';
import { MapPinIcon, UserIcon, ZapIcon, CameraIcon, FileTextIcon, ClockIcon, PlusCircleIcon } from 'lucide-react';
import NewConvoyModal from './modals/NewConvoyModal';
import ConvoyBuilder from './convoy-builder';
const TripOverview: React.FC = () => {
  const [showNewConvoyModal, setShowNewConvoyModal] = useState(false);
  // Mock data for active convoys
  const convoys = [{
    id: 'CNV-2023-0456',
    driver: 'Alex Johnson',
    route: {
      start: 'Houston, TX',
      end: 'Dallas, TX'
    },
    progress: 68,
    speed: 62,
    photos: 12,
    reports: 5,
    eta: '2h 15m',
    status: 'active' // active, paused, alert, completed
  }, {
    id: 'CNV-2023-0455',
    driver: 'Sarah Miller',
    route: {
      start: 'Austin, TX',
      end: 'San Antonio, TX'
    },
    progress: 34,
    speed: 58,
    photos: 8,
    reports: 3,
    eta: '1h 40m',
    status: 'paused'
  }, {
    id: 'CNV-2023-0454',
    driver: 'Michael Chen',
    route: {
      start: 'Fort Worth, TX',
      end: 'El Paso, TX'
    },
    progress: 12,
    speed: 65,
    photos: 4,
    reports: 2,
    eta: '5h 20m',
    status: 'alert'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'paused':
        return 'bg-yellow-500';
      case 'alert':
        return 'bg-red-500';
      case 'completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };
  return <section>
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <MapPinIcon className="mr-2 text-[#ff8200]" /> Active Convoys
          </h2>
          <p className="text-gray-400 text-sm">
            Monitor live convoy operations
          </p>
        </div>
        <button onClick={() => setShowNewConvoyModal(true)} className="bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white px-4 py-2 rounded-lg shadow-lg shadow-orange-500/30 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-orange-500/40 active:translate-y-0 transition-all flex items-center">
          <PlusCircleIcon className="w-4 h-4 mr-2" /> New Convoy
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {convoys.map(convoy => <div key={convoy.id} className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 ${getStatusColor(convoy.status)} rounded-full shadow-md shadow-${convoy.status === 'active' ? 'green' : convoy.status === 'paused' ? 'yellow' : convoy.status === 'alert' ? 'red' : 'blue'}-500/50 mr-2 animate-pulse`}></div>
                  <h3 className="text-lg font-semibold">{convoy.id}</h3>
                </div>
                <div className="flex items-center mt-1 text-gray-400">
                  <UserIcon className="w-4 h-4 mr-1" />
                  <span className="text-sm">{convoy.driver}</span>
                </div>
              </div>
              <div className="bg-[#0f172a]/50 px-3 py-1 rounded-lg text-sm font-medium">
                {convoy.speed} mph
              </div>
            </div>
            <div className="text-sm text-gray-300 mb-3">
              <div className="flex items-start">
                <MapPinIcon className="w-4 h-4 mr-1 mt-0.5 text-green-500" />
                <div>
                  <div className="font-medium">{convoy.route.start}</div>
                  <div className="h-6 border-l border-dashed border-gray-600 ml-1.5"></div>
                  <div className="font-medium">{convoy.route.end}</div>
                </div>
              </div>
            </div>
            <div className="relative pt-1 mb-4">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-xs text-gray-400 font-semibold">
                  Progress
                </div>
                <div className="text-xs text-gray-400 font-semibold">
                  {convoy.progress}%
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded-full bg-[#0f172a]/50">
                <div style={{
              width: `${convoy.progress}%`
            }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#ff8200] to-[#cc6600]"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <div className="flex items-center text-gray-400">
                <CameraIcon className="w-3.5 h-3.5 mr-1" />
                <span>{convoy.photos} Photos</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FileTextIcon className="w-3.5 h-3.5 mr-1" />
                <span>{convoy.reports} Reports</span>
              </div>
              <div className="flex items-center text-gray-400">
                <ClockIcon className="w-3.5 h-3.5 mr-1" />
                <span>ETA: {convoy.eta}</span>
              </div>
            </div>
          </div>)}
      </div>
      <ConvoyBuilder isOpen={showNewConvoyModal} onClose={() => setShowNewConvoyModal(false)} />
    </section>;
};
export default TripOverview;
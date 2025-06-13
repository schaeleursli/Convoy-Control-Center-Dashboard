import React, { useState } from 'react';
import { ActivityIcon, CameraIcon, FileTextIcon, MapPinIcon, AlertTriangleIcon, UserIcon, ClockIcon } from 'lucide-react';
import ReportViewModal from './modals/ReportViewModal';
const ActivityFeed: React.FC = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState({
    id: 'RPT-2023-0123',
    convoy: 'CNV-2023-0454',
    driver: 'Michael Chen',
    timestamp: '15 min ago',
    location: 'Fort Worth, TX',
    status: 'Pending Approval',
    details: 'Daily inspection completed.\n\nAll systems operational.\nFuel level: 75%\nTire pressure: Normal\nBrake system: Optimal\nCargo secure and properly distributed.\n\nNo issues to report.',
    images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80']
  });
  const [activeFilter, setActiveFilter] = useState('all');
  // Mock activity data
  const activities = [{
    id: 1,
    type: 'photo',
    convoy: 'CNV-2023-0456',
    driver: 'Alex Johnson',
    timestamp: 'Just now',
    content: 'Secured load checkpoint photo',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }, {
    id: 2,
    type: 'gps',
    convoy: 'CNV-2023-0455',
    driver: 'Sarah Miller',
    timestamp: '5 min ago',
    content: 'Convoy has slowed to 45mph due to traffic'
  }, {
    id: 3,
    type: 'report',
    convoy: 'CNV-2023-0454',
    driver: 'Michael Chen',
    timestamp: '15 min ago',
    content: 'Daily inspection report submitted'
  }, {
    id: 4,
    type: 'alert',
    convoy: 'CNV-2023-0454',
    driver: 'Michael Chen',
    timestamp: '32 min ago',
    content: 'Route deviation detected'
  }, {
    id: 5,
    type: 'photo',
    convoy: 'CNV-2023-0456',
    driver: 'Alex Johnson',
    timestamp: '45 min ago',
    content: 'Checkpoint arrival confirmation',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }];
  const filteredActivities = activeFilter === 'all' ? activities : activities.filter(activity => activity.type === activeFilter);
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'photo':
        return <CameraIcon className="w-4 h-4 text-blue-400" />;
      case 'gps':
        return <MapPinIcon className="w-4 h-4 text-green-400" />;
      case 'report':
        return <FileTextIcon className="w-4 h-4 text-yellow-400" />;
      case 'alert':
        return <AlertTriangleIcon className="w-4 h-4 text-red-400" />;
      default:
        return <ActivityIcon className="w-4 h-4 text-gray-400" />;
    }
  };
  const handleViewReport = () => {
    setShowReportModal(true);
  };
  return <section className="h-full">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <ActivityIcon className="mr-2 text-[#ff8200]" /> Activity Feed
          </h2>
          <p className="text-gray-400 text-sm">Real-time convoy updates</p>
        </div>
      </div>
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden h-[calc(100vh-220px)]">
        {/* Filter Tabs */}
        <div className="flex border-b border-gray-700">
          <button onClick={() => setActiveFilter('all')} className={`flex-1 py-3 text-xs font-medium text-center ${activeFilter === 'all' ? 'bg-[#ff8200] text-white' : 'text-gray-400 hover:bg-white/5'} transition-colors`}>
            All
          </button>
          <button onClick={() => setActiveFilter('photo')} className={`flex-1 py-3 text-xs font-medium text-center ${activeFilter === 'photo' ? 'bg-[#ff8200] text-white' : 'text-gray-400 hover:bg-white/5'} transition-colors`}>
            Photos
          </button>
          <button onClick={() => setActiveFilter('report')} className={`flex-1 py-3 text-xs font-medium text-center ${activeFilter === 'report' ? 'bg-[#ff8200] text-white' : 'text-gray-400 hover:bg-white/5'} transition-colors`}>
            Reports
          </button>
          <button onClick={() => setActiveFilter('gps')} className={`flex-1 py-3 text-xs font-medium text-center ${activeFilter === 'gps' ? 'bg-[#ff8200] text-white' : 'text-gray-400 hover:bg-white/5'} transition-colors`}>
            GPS
          </button>
          <button onClick={() => setActiveFilter('alert')} className={`flex-1 py-3 text-xs font-medium text-center ${activeFilter === 'alert' ? 'bg-[#ff8200] text-white' : 'text-gray-400 hover:bg-white/5'} transition-colors`}>
            Alerts
          </button>
        </div>
        {/* Activity List */}
        <div className="overflow-y-auto h-[calc(100%-48px)] p-4 space-y-4">
          {filteredActivities.map((activity, index) => <div key={activity.id} className="bg-[#0f172a]/50 backdrop-blur-sm rounded-lg p-4 border border-white/5 hover:border-white/10 transition-all animate-slide-in-bottom" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center mr-3">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <span className="text-sm font-semibold text-white">
                        {activity.convoy}
                      </span>
                      <span className="text-xs text-gray-400 ml-2">
                        {activity.driver}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />{' '}
                      {activity.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">
                    {activity.content}
                  </p>
                  {activity.image && <div className="mt-2 rounded-lg overflow-hidden">
                      <img src={activity.image} alt="Activity attachment" className="w-full h-32 object-cover" />
                    </div>}
                  {activity.type === 'alert' && <div className="mt-2 flex justify-end">
                      <button className="bg-[#1e293b] hover:bg-[#334155] text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Acknowledge
                      </button>
                    </div>}
                  {activity.type === 'report' && <div className="mt-2 flex justify-end">
                      <button onClick={handleViewReport} className="bg-[#1e293b] hover:bg-[#334155] text-white px-3 py-1 rounded text-xs font-medium transition-colors mr-2">
                        View Report
                      </button>
                      <button className="bg-[#10b981] hover:bg-[#059669] text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Approve
                      </button>
                    </div>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <ReportViewModal isOpen={showReportModal} onClose={() => setShowReportModal(false)} reportData={selectedReport} />
    </section>;
};
export default ActivityFeed;
import React, { useState } from 'react';
import { TruckIcon, PlusIcon, XIcon, ChevronUpIcon, ChevronDownIcon, CarIcon, PackageIcon } from 'lucide-react';
interface Vehicle {
  id: string;
  type: string;
  driver: string;
  license: string;
  phone: string;
  callSign: string;
  status: 'ready' | 'pending' | 'unavailable';
}
interface LoadSpecification {
  description: string;
  type: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    weight: string;
  };
  handling: {
    fragile: boolean;
    hazardous: boolean;
    oversized: boolean;
    highValue: boolean;
    temperatureControlled: boolean;
  };
  permitNumber: string;
  insurance: string;
}
interface ConvoySection {
  id: string;
  name: string;
  type: 'standard' | 'oversize' | 'hazmat' | 'heavyHaul';
  startTime: string;
  interval: string;
  expanded: boolean;
  leadVehicle?: Vehicle;
  loadVehicles: Vehicle[];
  trailVehicle?: Vehicle;
  loadSpecs: LoadSpecification[];
}
const SectionBuilder: React.FC = () => {
  const [sections, setSections] = useState<ConvoySection[]>([{
    id: '1',
    name: 'Section A',
    type: 'standard',
    startTime: '',
    interval: '0',
    expanded: true,
    loadVehicles: [],
    loadSpecs: []
  }]);
  const addSection = () => {
    const newSection: ConvoySection = {
      id: String(sections.length + 1),
      name: `Section ${String.fromCharCode(65 + sections.length)}`,
      type: 'standard',
      startTime: '',
      interval: '0',
      expanded: true,
      loadVehicles: [],
      loadSpecs: []
    };
    setSections([...sections, newSection]);
  };
  const removeSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };
  const toggleSection = (id: string) => {
    setSections(sections.map(section => section.id === id ? {
      ...section,
      expanded: !section.expanded
    } : section));
  };
  const updateSection = (id: string, updates: Partial<ConvoySection>) => {
    setSections(sections.map(section => section.id === id ? {
      ...section,
      ...updates
    } : section));
  };
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0f172a]/50 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
            <TruckIcon className="h-5 w-5 text-[#ff8200]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Section Builder
            </h4>
            <p className="text-sm text-gray-400">
              Configure convoy sections and vehicles
            </p>
          </div>
        </div>
        <button onClick={addSection} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
          <PlusIcon className="w-4 h-4" />
          <span>Add Section</span>
        </button>
      </div>
      {/* Sections */}
      <div className="space-y-4">
        {sections.map(section => <div key={section.id} className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
            {/* Section Header */}
            <div className="flex items-center justify-between p-4 bg-[#0f172a]/50">
              <div className="flex items-center space-x-4">
                <button onClick={() => toggleSection(section.id)} className="text-gray-400 hover:text-white transition-colors">
                  {section.expanded ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
                <div>
                  <h5 className="text-white font-medium">{section.name}</h5>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <CarIcon className="w-4 h-4 mr-1" />
                      {section.loadVehicles.length} vehicles
                    </span>
                    <span className="flex items-center">
                      <PackageIcon className="w-4 h-4 mr-1" />
                      {section.loadSpecs.length} loads
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => removeSection(section.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            {/* Section Content */}
            {section.expanded && <div className="p-4 space-y-6">
                {/* Basic Section Configuration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Section Name
                    </label>
                    <input type="text" value={section.name} onChange={e => updateSection(section.id, {
                name: e.target.value
              })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Section Type
                    </label>
                    <select value={section.type} onChange={e => updateSection(section.id, {
                type: e.target.value as ConvoySection['type']
              })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none">
                      <option value="standard">Standard</option>
                      <option value="oversize">Oversize Load</option>
                      <option value="hazmat">Hazmat</option>
                      <option value="heavyHaul">Heavy Haul</option>
                    </select>
                  </div>
                </div>
                {/* Timing Configuration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Start Time
                    </label>
                    <input type="time" value={section.startTime} onChange={e => updateSection(section.id, {
                startTime: e.target.value
              })} className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Interval (minutes behind previous)
                    </label>
                    <input type="number" value={section.interval} onChange={e => updateSection(section.id, {
                interval: e.target.value
              })} min="0" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
                  </div>
                </div>
                {/* Vehicle Management Placeholder */}
                <div className="bg-[#0f172a]/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h6 className="text-sm font-medium text-white">
                      Vehicle Management
                    </h6>
                    <button className="px-3 py-1 text-xs font-medium text-[#ff8200] hover:bg-[#ff8200]/10 rounded-lg transition-colors">
                      Add Vehicle
                    </button>
                  </div>
                  <p className="text-sm text-gray-400">
                    Vehicle management interface will be implemented in the next
                    phase.
                  </p>
                </div>
                {/* Load Specifications Placeholder */}
                <div className="bg-[#0f172a]/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h6 className="text-sm font-medium text-white">
                      Load Specifications
                    </h6>
                    <button className="px-3 py-1 text-xs font-medium text-[#ff8200] hover:bg-[#ff8200]/10 rounded-lg transition-colors">
                      Add Load
                    </button>
                  </div>
                  <p className="text-sm text-gray-400">
                    Load specifications interface will be implemented in the
                    next phase.
                  </p>
                </div>
              </div>}
          </div>)}
      </div>
    </div>;
};
export default SectionBuilder;
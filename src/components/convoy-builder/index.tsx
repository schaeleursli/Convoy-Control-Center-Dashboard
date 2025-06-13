import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import StepProgress from './StepProgress';
import ConvoyOverview from './steps/ConvoyOverview';
import SectionBuilder from './steps/SectionBuilder';
import RouteWaypoints from './steps/RouteWaypoints';
import CommunicationPlan from './steps/CommunicationPlan';
import ConvoySummary from './steps/ConvoySummary';
interface ConvoyBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}
export type ConvoyFormData = {
  convoyId: string;
  movementName: string;
  priority: 'high' | 'medium' | 'low';
  movementDate: string;
  jmpReference: string;
  originLocation: string;
  destination: string;
  routeDescription: string;
  estimatedDistance: string;
  plannedDuration: {
    hours: string;
    minutes: string;
  };
  constraints: {
    daylightOnly: boolean;
    escortRequired: boolean;
    policeEscort: boolean;
    specialPermits: boolean;
    bridgeRestrictions: boolean;
    weightRestrictions: boolean;
    heightRestrictions: boolean;
  };
  maxSpeed: string;
  specialInstructions: string;
};
const ConvoyBuilder: React.FC<ConvoyBuilderProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ConvoyFormData>({
    convoyId: `CONV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    movementName: '',
    priority: 'medium',
    movementDate: '',
    jmpReference: '',
    originLocation: '',
    destination: '',
    routeDescription: '',
    estimatedDistance: '',
    plannedDuration: {
      hours: '',
      minutes: ''
    },
    constraints: {
      daylightOnly: false,
      escortRequired: false,
      policeEscort: false,
      specialPermits: false,
      bridgeRestrictions: false,
      weightRestrictions: false,
      heightRestrictions: false
    },
    maxSpeed: '',
    specialInstructions: ''
  });
  if (!isOpen) return null;
  const steps = ['Convoy Overview', 'Section Builder', 'Route Planning', 'Communication', 'Review'];
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ConvoyOverview formData={formData} setFormData={setFormData} />;
      case 2:
        return <SectionBuilder />;
      case 3:
        return <RouteWaypoints />;
      case 4:
        return <CommunicationPlan />;
      case 5:
        return <ConvoySummary formData={formData} />;
      default:
        return null;
    }
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <div className="min-h-screen px-4 text-center">
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full max-w-6xl transform rounded-2xl bg-[#1e293b]/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">
                Create New Convoy
              </h3>
              <button onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-white/5 transition-colors">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            {/* Progress Indicator */}
            <div className="px-8 py-6 border-b border-white/10 bg-[#0f172a]/50">
              <StepProgress steps={steps} currentStep={currentStep} />
            </div>
            {/* Content */}
            <div className="p-6">{renderStep()}</div>
            {/* Footer */}
            <div className="flex justify-between px-6 py-4 border-t border-white/10">
              <button onClick={handleBack} disabled={currentStep === 1} className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Back
              </button>
              <div className="space-x-3">
                <button onClick={onClose} className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors">
                  Cancel
                </button>
                {currentStep === steps.length ? <button onClick={() => console.log('Submit convoy plan', formData)} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                    Create Convoy
                  </button> : <button onClick={handleNext} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                    Continue
                  </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ConvoyBuilder;
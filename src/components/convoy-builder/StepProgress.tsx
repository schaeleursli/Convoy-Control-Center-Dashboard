import React from 'react';
import { CheckIcon } from 'lucide-react';
interface StepProgressProps {
  steps: string[];
  currentStep: number;
}
const StepProgress: React.FC<StepProgressProps> = ({
  steps,
  currentStep
}) => {
  return <div className="relative flex justify-between">
      {steps.map((step, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === currentStep;
      const isCompleted = stepNumber < currentStep;
      return <div key={step} className={`flex-1 ${index !== steps.length - 1 ? 'pr-4' : ''}`}>
            <div className="relative flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted ? 'bg-gradient-to-br from-[#ff8200] to-[#cc6600] shadow-lg shadow-orange-500/20' : isActive ? 'bg-[#1e293b] border-2 border-[#ff8200]' : 'bg-[#1e293b] border-2 border-gray-600'}`}>
                {isCompleted ? <CheckIcon className="w-5 h-5 text-white" /> : <span className={`text-sm font-medium ${isActive ? 'text-[#ff8200]' : 'text-gray-600'}`}>
                    {stepNumber}
                  </span>}
              </div>
              <div className={`text-xs mt-3 font-medium transition-colors duration-300 ${isActive ? 'text-[#ff8200]' : 'text-gray-400'}`}>
                {step}
              </div>
              {index !== steps.length - 1 && <>
                  <div className="absolute top-5 left-[50%] w-[calc(100%-1rem)] h-[2px] bg-gray-600" style={{
              transform: 'translateX(1rem)'
            }} />
                  <div className={`absolute top-5 left-[50%] w-[calc(100%-1rem)] h-[2px] bg-[#ff8200] transition-all duration-500 origin-left ${isCompleted ? 'scale-x-100' : 'scale-x-0'}`} style={{
              transform: 'translateX(1rem)'
            }} />
                </>}
            </div>
          </div>;
    })}
    </div>;
};
export default StepProgress;
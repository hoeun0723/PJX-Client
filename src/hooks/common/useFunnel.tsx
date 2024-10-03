import { useState } from 'react';
import React from 'react';

interface StepProps {
  children: React.ReactNode;
  name: string;
}

interface FunnelProps {
  children: React.ReactElement<StepProps>[];
}

const useFunnel = () => {
  const [currentStep, setCurrentStep] = useState('step1');

  const Step = ({ children }: StepProps) => {
    return <>{children}</>
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(childStep => childStep.props.name === currentStep );
    return <>{targetStep}</> || <></>
  };
  

  return {
    currentStep,
    setCurrentStep,
    Funnel,
    Step
  };
};

export default useFunnel;
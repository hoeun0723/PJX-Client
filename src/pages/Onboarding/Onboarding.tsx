import * as S from './Onboarding.style';
import React from 'react';
import Step1 from '../../components/OnboardingSteps/Step1/Step1';
import Step3 from '../../components/OnboardingSteps/Step3/Step3';
import Step2 from '../../components/OnboardingSteps/Step2/Step2';
import useFunnel from '../../hooks/common/useFunnel';
import { useNavigate } from 'react-router-dom';

function Onboarding (){
  const navigate = useNavigate();
  const {currentStep, setCurrentStep, Funnel, Step} = useFunnel();

  const steps = [
    {
      name: 'step1',
      component: Step1,
      nextStep: 'step2',
    },
    {
      name: 'step2',
      component: Step2,
      nextStep: 'step3',
    },
    {
      name: 'step3',
      component: Step3,
      nextStep: '/'
    },
  ];

  const handleNextStep = () => {
    const nextStepIndex = steps.findIndex((step) => step.name === currentStep) + 1;

    if (nextStepIndex < steps.length) {
      setCurrentStep(steps[nextStepIndex].name);
    } else {
      navigate(steps[nextStepIndex - 1].nextStep);
    }
  
  };

  return(
    <S.OnboardingWrapper>
      <Funnel>
        {steps.map(step => (
          <Step 
            key={step.name} 
            name={step.name}
          >
            <step.component onNext={handleNextStep}/>
          </Step>
        ))}
      </Funnel>
    </S.OnboardingWrapper>
  );
}

export default Onboarding;
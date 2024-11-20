import * as S from './Onboarding.style';
import React from 'react';
import Step2 from '../../components/OnboardingSteps/Step2/Step2';
import { useNavigate } from 'react-router-dom';

function Onboarding (){
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/home');
  };

  return(
    <S.OnboardingWrapper>
      <Step2 onNext={handleNextStep}/>
    </S.OnboardingWrapper>
  );
}

export default Onboarding;
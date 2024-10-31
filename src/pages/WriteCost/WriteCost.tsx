import { useLocation, useNavigate } from 'react-router-dom';
import WriteHeader from '../../components/common/WriteHeader/WriteHeader';
import CostName from '../../components/WriteCost/CostName/CostName';
import CostSubmit from '../../components/WriteCost/Submit/CostSubmit';
import InputType from '../../types/InputType';
import CostPrice from '../../components/WriteCost/CostPrice/CostPrice';
import * as S from './WriteCost.style';
import React, { useState } from 'react';
import AiSubmit from '../../components/WriteCost/AiSubmit/AiSubmit';

const WriteCost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateState = location.state.key;

  const [state, setState] = useState<string>(navigateState);
  const [values, setValues] = useState<InputType>({
    category: '지출 내역 입력',
    price:0,
    memo:'',
    image:'',
  });

  const handleName = () => {
    setState('costName');
    values.category === '지출 내역 입력' ? setValues({...values, category: '' }) : null;
  };
  const handleCost = () => {
    setState('costPrice');
  }
  const handlePrev = () => {
    state === 'submit' || state === 'aiSubmit' ?
      navigate('/write-type')
    :
      setState('submit')
  };
  
  const steps = [
    {
      label: 'submit',
      title: '직접 지출 등록',
      component: <CostSubmit onName={handleName} onCost={handleCost} values={values} setValues={setValues}/>,
    },
    {
      label: 'costName',
      title: '지출 내용',
      component: <CostName category={values.category} setValues={setValues} onPrev={handlePrev}/>,
    },
    {
      label: 'costPrice',
      title: '지출 금액',
      component: <CostPrice price={values.price} category={values.category} setValues={setValues} onPrev={handlePrev}/>,
    },
    {
      label: 'aiSubmit',
      title: 'AI 지출 등록',
      component: <AiSubmit setValues={setValues} onState={setState}/>,
    }
  ];
  
  return(
    <S.WriteCostWrapper>
      {
        steps.map( step => {
          if(step.label === state){
            return (
              <div key={step.label}>
                <WriteHeader onPrev={handlePrev}>{step.title}</WriteHeader>
                {step.component}
              </div>
            )
          }          
        })
      
      }
    </S.WriteCostWrapper>
  );
};

export default WriteCost;
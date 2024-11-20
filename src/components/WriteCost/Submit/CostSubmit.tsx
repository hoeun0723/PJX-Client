import { IcPlus } from '../../../assets/svg';
import InputType from '../../../types/InputType';
import BtnLarge from '../../common/Button/LargeButton/BtnLarge';
import * as S from './CostSubmit.style';
import React, { ChangeEvent } from 'react';

interface CostSubmitProps {
  onName: VoidFunction;
  onCost: VoidFunction;
  values: InputType;
  setValues: React.Dispatch<React.SetStateAction<InputType>>;
}

const CostSubmit = ({ onName, onCost, values, setValues }: CostSubmitProps) => {
  const handleSubmit = () => {
    alert('등록 완료');
  };
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      memo: e.target.value,
    }));
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setValues((prevValues) => ({
        ...prevValues,
        image: imgUrl,
      }));
    }
  };

  return(
    <S.CostSubmitWrapper>
      <S.CostBox>
        <S.PriceSpan onClick={() => {onCost();}}>{values.price}</S.PriceSpan>원
      </S.CostBox>
      <S.NameText onClick={() => {onName();}}>{values.category}</S.NameText>

      <S.Label
        htmlFor='imgInput'
      >
        {
          values.image? (
            <S.PreviewImage src={values.image} alt='preview' />
          ) : 
          <>
            <IcPlus />
            사진추가
          </>  
        }
      </S.Label>
      <S.FileInput 
        type='file'
        id='imgInput'
        onChange={onFile}
      />
      <S.MemoTextArea value={values.memo} placeholder='메모를 여기에 작성' onChange={onChange}/>
      <S.ButtonField>
        <BtnLarge onClick={handleSubmit}>등록하기</BtnLarge>
      </S.ButtonField>
    </S.CostSubmitWrapper>
  );
};

export default CostSubmit;
import * as S from './AiSubmit.style';
import React from 'react';
import { useState, ChangeEvent } from 'react';
import { IcPlus } from '../../../assets/svg';
import BtnLarge from '../../common/Button/LargeButton/BtnLarge';
import InputType from '../../../types/InputType';
import usePostReceiptAnalyze from '../../../hooks/queries/receipt/usePostReceiptAnalyze';
import Loading from '../../../pages/Loading/Loading';

interface AiSubmitProps {
  setValues: React.Dispatch<React.SetStateAction<InputType>>;
  onState: React.Dispatch<React.SetStateAction<string>>
}

const AiSubmit = ({ setValues, onState }: AiSubmitProps) => {
  const [imgUrl, setImgUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { isPending, mutate: postRecipt } = usePostReceiptAnalyze();

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
      setSelectedFile(file);
    }
  };

  const parseLog = (text: string) => {
    const regex = /\d+: (.+?) \$(\d{1,3}(?:,\d{3})*)/g;
    let matches;
    let resultString = '';
    let resultPrice = 0;

    // 모든 매치 결과를 반복
    while ((matches = regex.exec(text)) !== null) {
      const productName = matches[1].trim();
      const price = matches[2].replace(/,/g, ''); // 가격에서 쉼표 제거
      resultString += `${productName} - $${price}\n`;
      resultPrice += Number(price);
    }
    return {resultString, resultPrice};
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }
    const body = { file: selectedFile};    
    try{

      postRecipt(body, {
        onSuccess: (response) => {
          const parsedRes = parseLog(response.result);
          setValues((prevValues) => ({
            ...prevValues,
            image: imgUrl,
            note: parsedRes.resultString,
            amount: parsedRes.resultPrice,
            file: selectedFile,
            }));
          onState('submit');
          console.log(response.result)
        },
      });
      
    }
    catch(err) {
      console.error(err);
      return;
    }
  };

  return(
    <S.AiSubmitWrapper>
      {
        isPending && <Loading>AI 지출 분석중</Loading>
      }
      <S.HorizontalLine />
      <S.TextBox>
          영수증 사진을 촬영해주세요. 
          <p>글자가 잘보이도록 놓아주세요.</p>
      </S.TextBox>
      <S.Label
        htmlFor='imgInput'
      >
        {
          imgUrl !== ''? (
            <S.PreviewImage src={imgUrl} alt='preview' />
          ) : 
          <S.AddBox>
            <IcPlus />
            영수증 사진 추가 (0/1)
          </S.AddBox>  
        }
      </S.Label>
      <S.FileInput 
        type='file'
        id='imgInput'
        onChange={onFile}
      />
      <S.ButtonField>
        <BtnLarge onClick={handleSubmit}>등록하기</BtnLarge>
      </S.ButtonField>
    </S.AiSubmitWrapper>
  );
};

export default AiSubmit;
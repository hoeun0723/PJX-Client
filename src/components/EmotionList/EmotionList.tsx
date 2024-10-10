import React from 'react';
import * as S from './EmotionList.style';
import { IcAngry, IcHappy, IcSurprised } from '../../assets/svg';

const EmotionList = () => {
    /*추후 감정 리스트들을 서버로 부터 받으면 띄워주기*/
    return (
        <S.EmotionWrapper>
            <IcAngry style={{ width: '3rem', height: '3rem' }}/>
            <IcHappy style={{ width: '3rem', height: '3rem' }}/>
            <IcSurprised style={{ width: '3rem', height: '3rem' }}/>
        </S.EmotionWrapper>
    )
}

export default EmotionList;
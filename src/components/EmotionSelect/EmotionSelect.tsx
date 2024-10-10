import React from 'react';
import * as S from './EmotionSelect.style';
import { IcPlusRound } from '../../assets/svg';

const EmotionSelect = () => {
    return (
        <S.EmotionSelectWrapper>
            <IcPlusRound style={{width: '3rem',height: '3rem'}}/>
        </S.EmotionSelectWrapper>
    )
}

export default EmotionSelect;
import React from "react";
import * as S from './BuyCard.style';
import EmotionList from "../EmotionList/EmotionList";
import EmotionSelect from "../EmotionSelect/EmotionSelect";

interface BuyCardProps {
    name: string;
    cost: string;
    text: string;
    img: string;
}


const BuyCard = ({name,cost,text,img}:BuyCardProps) => {
    return (
        <S.BuyCardWrapper>
            <S.BuyContent>
            <S.BuyName><p>{name}</p><S.CostEmozWrapper><S.BuyCost>{cost}원</S.BuyCost> <EmotionSelect/></S.CostEmozWrapper></S.BuyName>
            <S.BuyText>{text}</S.BuyText>
            <S.BuyPictureWrapper>
                <S.BuyPicture src={img}/>
                <S.BuyPicture src={img}/>
            </S.BuyPictureWrapper>
            </S.BuyContent>
            <EmotionList/>
        </S.BuyCardWrapper>
    )
}

export default BuyCard;
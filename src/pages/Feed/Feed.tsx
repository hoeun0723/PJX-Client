import React from 'react';
import * as S from './Feed.style';
import Search from '../../components/Search/Search';
import BuyCard from '../../components/BuyCard/BuyCard';

const Feed = () => {
    return (
        <S.FeedWrapper> 
            <Search/>
            <S.CardWrapper>
            <BuyCard 
                name="바이바이샐러드" 
                cost="42,000" 
                text="집 근처에 있는 샐러드 가게에 갔는데 안사먹을 수가 없었다...진짜 대박 맛집이었어...애들아 다들 먹어....ㅋㅋㅋ" 
                img="https://github.com/user-attachments/assets/fee098da-2db0-459e-adcd-94b1364fd511"
            />
            <BuyCard 
                name="바이바이샐러드" 
                cost="42,000" 
                text="집 근처에 있는 샐러드 가게에 갔는데 안사먹을 수가 없었다...진짜 대박 맛집이었어...애들아 다들 먹어....ㅋㅋㅋ" 
                img="https://github.com/user-attachments/assets/fee098da-2db0-459e-adcd-94b1364fd511"
            />
            </S.CardWrapper>
        </S.FeedWrapper>
    )
}

export default Feed;
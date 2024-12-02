import React, { useState } from "react";
import * as S from './GNB.style';
import { IcExpensesActive, IcExpensesUnActive, IcMyActive, IcMyUnActive } from "../../assets/svg";
import { useNavigate } from "react-router-dom";
import IcShare from '../../assets/svg/IcShare';
import shareKakao from '../../utils/shareKakao';

const GNB = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('expenses');
    const handleNavigation = (tab:string) => {
        setActiveTab(tab);
        switch (tab) {
            case 'expenses':
                navigate('/home');
                break;
            case 'my':
                navigate('/mypage');
                break;
            default:
                break;
        }
    };

    return (
        <S.GNBWrapper>
            <S.NavigateBtn onClick={() => handleNavigation('expenses')}>
                {activeTab === 'expenses' ? <IcExpensesActive /> : <IcExpensesUnActive />}
                <p>내 지출</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => shareKakao()}>
                <IcShare />
                <p>내 지출 공유하기</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => handleNavigation('my')}>
                {activeTab === 'my' ? <IcMyActive /> : <IcMyUnActive />}
                <p>마이</p>
            </S.NavigateBtn>
        </S.GNBWrapper>
    );
} 

export default GNB;
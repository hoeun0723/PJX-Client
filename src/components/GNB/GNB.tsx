import React, { useState } from "react";
import * as S from './GNB.style';
import { IcAlarmActive, IcAlarmUnActive, IcExpensesActive, IcExpensesUnActive, IcFeedActive, IcFeedUnActive, IcMyActive, IcMyUnActive } from "../../assets/svg";
import { useNavigate } from "react-router-dom";

const GNB = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('expenses');
    const handleNavigation = (tab:string) => {
        setActiveTab(tab);
        switch (tab) {
            case 'expenses':
                navigate('/home');
                break;
            case 'feed':
                navigate('/feed');
                break;
            case 'alarm':
                navigate('/alarm');
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

            <S.NavigateBtn onClick={() => handleNavigation('feed')}>
                {activeTab === 'feed' ? <IcFeedActive /> : <IcFeedUnActive />}
                <p>피드</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => handleNavigation('alarm')}>
                {activeTab === 'alarm' ? <IcAlarmActive /> : <IcAlarmUnActive />}
                <p>알람</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => handleNavigation('my')}>
                {activeTab === 'my' ? <IcMyActive /> : <IcMyUnActive />}
                <p>마이</p>
            </S.NavigateBtn>
        </S.GNBWrapper>
    );
} 

export default GNB;
import MonthlyCost from '../../components/MonthlyCost/MonthlyCost';
import * as S from './Home.style';
import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CostContent from '../../components/CostContent/CostContent';
import Primary from '../../components/common/Button/Rounded/Primary/Primary';
import Default from '../../components/common/Button/Rounded/Default/Default';



const Home = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isFriend, setIsFriend] = useState(true);
    const [isPrimary, setIsPrimary] = useState(true); // Primary와 Default 컴포넌트를 토글하기 위한 상태

    // 버튼을 클릭할 때 상태를 변경하여 컴포넌트를 바꿔줌
    const handleClick = () => {
        setIsPrimary(!isPrimary);
        setIsFriend(true);/* 여기 서버에서 값 받아와서 구분하기 */
    };



    return (
        <S.HomeWrapper>
            <MonthlyCost/>
            
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <CostContent selectedDate={selectedDate} />
        </S.HomeWrapper>
    );
};

export default Home;

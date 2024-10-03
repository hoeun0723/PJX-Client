import MonthlyCost from '../../components/MonthlyCost/MonthlyCost';
import * as S from './Home.style';
import React, { useState } from 'react';
import GNB from '../../components/GNB/GNB';
import Calendar from '../../components/Calendar/Calendar';
import CostContent from '../../components/CostContent/CostContent';



const Home = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    return (
        <S.HomeWrapper>
            <MonthlyCost/>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <CostContent selectedDate={selectedDate} />
        </S.HomeWrapper>
    );
};

export default Home;

import React, { useCallback, useEffect, useState } from 'react';
import * as S from './EmotionSelect.style';
import { IcAngry, IcHappy, IcPlusRound, IcSad, IcSurprised, IcThinking } from '../../assets/svg';
import usePostFeel from '../../hooks/queries/home/usePostFeel';
import usePostFeelList from '../../hooks/queries/home/usePostFeelList';

const formatMonth = (date: Date | undefined) => {
    if (!date) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    return `${year}-${month}`;
};

// 하루를 빼는 함수
const subtractOneDay = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
};

const EmotionSelect = ({selectedDate}:{selectedDate:Date}) => {
    const [openModal, setOpenModal] = useState(false);
    const { mutate: feelList, data } = usePostFeelList();

    const [selectedIcon, setSelectedIcon] = useState<{ icon: JSX.Element; name: string }>({
        icon: <IcPlusRound style={{ width: '3rem', height: '3rem' }} />,
        name: '',
    });
    const emotionAPI = usePostFeel();

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 아이콘 데이터 배열
    const icons = [
        { component: <IcHappy style={{ width: '4rem', height: '4rem' }} />, name: 'HAPPY' },
        { component: <IcThinking style={{ width: '4rem', height: '4rem' }} />, name: 'WONDER' },
        { component: <IcSurprised style={{ width: '4rem', height: '4rem' }} />, name: 'SURPRISED' },
        { component: <IcSad style={{ width: '4rem', height: '4rem' }} />, name: 'SAD' },
        { component: <IcAngry style={{ width: '4rem', height: '4rem' }} />, name: 'ANGRY' },
    ];

    const handleFeelList = useCallback(() => {
        if (selectedDate) {
            const month = formatMonth(selectedDate); // 날짜를 "YYYY-MM" 형식으로 변환
            if (month) {
                feelList(
                    month,
                    {
                        onSuccess: (responseData) => {
                            console.log("데이터 요청 성공:", responseData);
                        },
                        onError: (error) => {
                            console.error("데이터 요청 실패:", error);
                        },
                    }
                );
            }
        }
    }, [selectedDate]);
    useEffect(() => {
        handleFeelList();
    }, [handleFeelList]);

    useEffect(() => {
        if (data?.reactionsList && selectedDate) {
            // 하루 전 날짜 계산
            const adjustedDate = subtractOneDay(selectedDate).toISOString().split('T')[0];

            // adjustedDate와 매칭되는 항목 찾기
            const reactionItem = data.reactionsList.find(
                (item: any) => item.date === adjustedDate
            );

            if (reactionItem && reactionItem.reactions['3791039912']) {
                const reactionName = reactionItem.reactions['3791039912'];
                const matchingIcon = icons.find((icon) => icon.name === reactionName);

                if (matchingIcon) {
                    setSelectedIcon((prev) => {
                        if (prev.name !== reactionName) {
                            return { icon: matchingIcon.component, name: reactionName };
                        }
                        return prev;
                    });
                }
            }
        }
    }, [data, selectedDate, icons]);

    

    const handleIconClick = (icon: JSX.Element, name: string) => {
        setSelectedIcon({ icon, name });
        console.log(name); // 선택된 아이콘의 이름을 콘솔에 출력
        const body = {
            date: getTodayDate(),
            reactionType: name,
        }
        emotionAPI.mutate(body);
        setOpenModal(false); 
    };

    return (
        <S.EmotionSelectWrapper>
            <div onClick={() => setOpenModal(!openModal)}>
                {selectedIcon.icon}
            </div>
            {openModal && (
                <>
                    <S.ModalOpenBackGround
                        onClick={() => setOpenModal(false)}
                        openModal={openModal}
                    />
                    <S.EmotionModal>
                        {icons.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleIconClick(item.component, item.name)}
                            >
                                {item.component}
                            </div>
                        ))}
                    </S.EmotionModal>
                </>
            )}
        </S.EmotionSelectWrapper>
    );
};

export default EmotionSelect;

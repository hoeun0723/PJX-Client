import React, { useState } from 'react';
import * as S from './EmotionSelect.style';
import { IcAngry, IcHappy, IcPlusRound, IcSad, IcSurprised, IcThinking } from '../../assets/svg';

const EmotionSelect = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState<{ icon: JSX.Element; name: string }>({
        icon: <IcPlusRound style={{ width: '3rem', height: '3rem' }} />,
        name: '',
    });

    // 아이콘 데이터 배열
    const icons = [
        { component: <IcHappy style={{ width: '4rem', height: '4rem' }} />, name: 'happy' },
        { component: <IcThinking style={{ width: '4rem', height: '4rem' }} />, name: 'think' },
        { component: <IcSurprised style={{ width: '4rem', height: '4rem' }} />, name: 'surprised' },
        { component: <IcSad style={{ width: '4rem', height: '4rem' }} />, name: 'sad' },
        { component: <IcAngry style={{ width: '4rem', height: '4rem' }} />, name: 'angry' },
    ];

    const handleIconClick = (icon: JSX.Element, name: string) => {
        setSelectedIcon({ icon, name });
        console.log(name); // 선택된 아이콘의 이름을 콘솔에 출력
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

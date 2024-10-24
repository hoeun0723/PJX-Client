import React, { ReactComponentElement, useState } from 'react';
import * as S from './EmotionSelect.style';
import { IcAngry, IcHappy, IcPlusRound, IcSad, IcSurprised, IcThinking } from '../../assets/svg';

const EmotionSelect = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(<IcPlusRound style={{width: '3rem', height: '3rem'}}/>);

    const handleIconClick = (icon: JSX.Element) => {
        setSelectedIcon(icon);
        setOpenModal(false); // 아이콘을 클릭하면 모달을 닫음
    };

    return (
        <S.EmotionSelectWrapper>
            {/* 선택된 아이콘을 보여주고 클릭하면 모달을 여는 기능 유지 */}
            <div onClick={() => setOpenModal(!openModal)}>
                {selectedIcon}
            </div>
            {/* 모달 열림 여부에 따라 아이콘 모달 렌더링 */}
            {openModal ? (
                <>
                    <S.ModalOpenBackGround onClick={() => setOpenModal(!openModal)} openModal={openModal}></S.ModalOpenBackGround>
                    <S.EmotionModal>
                        <IcHappy onClick={() => handleIconClick(<IcHappy style={{width: '3rem', height: '3rem'}} />)} />
                        <IcThinking onClick={() => handleIconClick(<IcThinking style={{width: '3rem', height: '3rem'}} />)} />
                        <IcSurprised onClick={() => handleIconClick(<IcSurprised style={{width: '3rem', height: '3rem'}} />)} />
                        <IcSad onClick={() => handleIconClick(<IcSad style={{width: '3rem', height: '3rem'}} />)} />
                        <IcAngry onClick={() => handleIconClick(<IcAngry style={{width: '3rem', height: '3rem'}} />)} />
                    </S.EmotionModal>
                </>
            ) : null}
        </S.EmotionSelectWrapper>
    );
}

export default EmotionSelect;

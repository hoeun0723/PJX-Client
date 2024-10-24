import styled from 'styled-components';

interface ModalOpenProps {
    openModal: boolean;
}

export const EmotionSelectWrapper = styled.div`
    width: 100%;
    background-color: none;
`;

export const ModalOpenBackGround = styled.div<ModalOpenProps>`
position: absolute;
left:0;
top:-10rem;
width: 100%;
height: 100vh;
z-index: 3;
background-color: ${({ openModal }) => (openModal ? 'rgba(39, 38, 46, 0.25)' : 'none')};
`;


export const EmotionModal = styled.div`
display: flex;
justify-content: space-around;
position: absolute;
width: 37.5rem;
height: 16rem;
padding: 2rem 2rem;
bottom:0;
left:0;
background-color: white;
border-radius: 1.4rem 1.4rem 0 0;
z-index: 4;
`;
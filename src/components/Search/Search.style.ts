import styled from 'styled-components';

export const SearchWrapper = styled.div<{ hasNickname: boolean }>`
${({ theme: { mixin } }) => mixin.flexBox({ direction:'column', align: 'center' })};
width: ${({ hasNickname }) => (hasNickname ? "32.3rem" : "fit-content")};
position: fixed;
background-color: white;
padding: 1.4rem 0 0 0;
gap: 2rem;
z-index: 2;
`;

export const BackButton = styled.button`
background-color: white;
`;

export const BarWrapper = styled.div`
display: flex;
align-items: center;
width:100%;
height: fit-content;
gap: 1.2rem;
`;

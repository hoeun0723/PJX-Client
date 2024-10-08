import styled from 'styled-components';

export const SearchNoneWrapper = styled.div<{ hasNickname: boolean }>`
display: flex;
width: ${({ hasNickname }) => (hasNickname ? "37.5rem" : "100%")};
height: 100vh;
background-color: white;
z-index: 2;
`;

export const TextWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({direction: 'column',algin: 'center'})};
background-color: white;
width:100%;
height: fit-content;
padding: 4.4rem 0;
gap: 0.5rem;
${({ theme }) => theme.fonts.m_14_500};
color: ${({ theme }) => theme.colors.gray[600]};
`;
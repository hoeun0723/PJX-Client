import styled from 'styled-components';

export const SearchPersonWrapper = styled.div<{ hasNickname: boolean }>`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column', align:'center'})};
width: ${({ hasNickname }) => (hasNickname ? "37.5rem" : "100%")};
height: 100vh;
background-color: white;
gap: 0.8rem;
z-index: 2;
`;
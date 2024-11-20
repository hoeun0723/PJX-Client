import styled from "styled-components";


export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 1.4rem;
    background-color: ${({ theme }) => theme.colors.gray[100]};
`;
export const FriendWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center' })};
margin: 2rem 1.6rem;
width: 100%;
`;


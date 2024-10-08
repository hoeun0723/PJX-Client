import styled from "styled-components";

export const FeedWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column', align: 'center'})};

    width: 100%;
    height: 100vh;
    padding: 0 1.6rem;
    gap: 2rem;
`;

export const CardWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};
width: 100%;
color: ${({ theme }) => theme.colors.gray[700]};
${({ theme }) => theme.fonts.m_30_500};

position: relative;
top : 7.2rem;
`;
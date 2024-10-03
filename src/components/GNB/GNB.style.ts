import styled from "styled-components";

export const GNBWrapper = styled.div`
width:100%;
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
background-color: white;
border-top: 1px solid rgba(0, 0, 0, 0.05);
height: 5.3rem;
padding: 0 2.4rem;

`;
export const NavigateBtn = styled.button`
${({ theme: { mixin } }) => mixin.flexCenter({ })};
background-color: white;

p{
    color: ${({ theme }) => theme.colors.gray[700]};
    ${({ theme }) => theme.fonts.m_12_500};
}

`;
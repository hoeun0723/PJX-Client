import styled from 'styled-components';

export const PrimaryWrapper = styled.button`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center' })};
border-radius: 6rem;
background-color: ${({ theme }) => theme.colors.primary.default};
color: white;
height: 2.8rem;
padding: 0 0.8rem;
${({ theme }) => theme.fonts.m_12_500};
`;
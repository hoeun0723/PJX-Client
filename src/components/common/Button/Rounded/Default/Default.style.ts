import styled from 'styled-components';

export const DefaultWrapper = styled.button`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center' })};
${({ theme }) => theme.fonts.m_12_500};
background-color: ${({ theme }) => theme.colors.gray[50]};
color: ${({ theme }) => theme.colors.gray[700]};
height: 2.8rem;
padding: 0 0.8rem;
`
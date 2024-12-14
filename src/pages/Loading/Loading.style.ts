import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  gap: 2rem;
  ${({ theme }) => theme.fonts.m_13_500};
`
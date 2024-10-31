import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 5.6rem;
  height: 2.8rem;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  ${({ theme }) => theme.fonts.m_12_500};
  background: transparent;
`;
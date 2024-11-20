import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: ${({ theme }) => theme.colors.normal.white};
  width: 6.6rem;
  height: 3.2rem;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.fonts.m_12_500};
`;
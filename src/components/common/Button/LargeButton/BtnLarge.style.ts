import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.sb_16_600};
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.normal.white};
  width: 34.1rem;
  height: 5.6rem;
  border-radius: 8px;
`;
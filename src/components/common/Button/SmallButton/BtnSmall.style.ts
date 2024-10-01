import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.b_20_600};
  background-color: ${({ theme }) => theme.colors.orange.O_100};
  color: ${({ theme }) => theme.colors.normal.white};
  width: 10.4rem;
  height: 5.6rem;
`;
import styled from 'styled-components';

export const NoneWrapper = styled.div`
  ${({theme: { mixin }}) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.r_14_400};
  color: ${({ theme }) => theme.colors.gray[600]};
  width: 34.3rem;
  text-align: center;
  gap: 1.6rem;
  padding: 4.4rem 0;
`;
import styled from 'styled-components';

export const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 6.4rem 1.6rem 0 1.6rem;
`;
export const DomainCheckSpan = styled.span`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  ${({ theme }) => theme.fonts.r_16_400};
  color: ${({ theme }) => theme.colors.primary.default};
  width: 9rem;
  cursor: pointer;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
  margin: auto 0 8.5rem 0;
`;
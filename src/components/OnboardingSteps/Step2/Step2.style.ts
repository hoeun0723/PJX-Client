import styled from 'styled-components';

export const Step2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 6.4rem 1.6rem 0 1.6rem;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
  margin: auto 0 8.5rem 0;
`;
import styled from 'styled-components';

export const WriteCostWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  padding: 1.4rem 1.6rem 3.6rem 1.6rem;
`;
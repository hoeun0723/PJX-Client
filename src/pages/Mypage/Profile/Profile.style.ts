import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.6rem 1.6rem 2rem 1.6rem;
`;
export const IconBox = styled.div`
  display: flex;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
`;
import styled from 'styled-components';

export const AlarmListWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  gap: 0.8rem;
`;
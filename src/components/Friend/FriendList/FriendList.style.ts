import styled from 'styled-components';

export const FriendListWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 35rem;
  overflow-y: auto;
  padding-top: 12rem;
  gap: 0.8rem;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari용*/
  }
`;
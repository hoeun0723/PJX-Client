import styled from 'styled-components';

interface ItemWrapperProps {
  $isClick: boolean;
}

export const FriendItemWrapper = styled.div<ItemWrapperProps>`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  background: ${({ theme, $isClick }) => !$isClick ? theme.colors.gray[50] : theme.colors.primary.bgDisabled};
  border: 1px solid ${({ theme, $isClick }) => !$isClick ? 'rgba(0,0,0,0.3)' : theme.colors.primary.disabled};
  width: 34.3rem;
  height: 6rem;
  padding: 1rem 1.6rem 1rem 2.2rem;
  border-radius: 10px;
  gap: 1rem;
  cursor: pointer;
  margin: 0;
`;
export const FriendImg = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const NicknameBox = styled.div`
  ${({theme: { mixin }}) => mixin.flexBox({ direction: 'column', justify: 'center', align: 'start' })};
  ${({ theme }) => theme.fonts.sb_13_600};
  width: 22.7rem;
  height: 3.5rem;
  p {
    ${({ theme }) => theme.fonts.m_11_400};
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
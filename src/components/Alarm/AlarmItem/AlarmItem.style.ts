import styled from 'styled-components';

export const AlarmItemWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ align: 'center' })};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: 34.3rem;
  height: 7.3rem;
  padding: 1rem 1.6rem;
  gap: 1rem;
`;
export const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const TextBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ direction: 'column' })};
  gap: 0.5rem;
  width: 18.7rem;
  ${({ theme }) => theme.fonts.sb_13_600};
  span {
    color: ${({ theme }) => theme.colors.gray[500]};
    ${({ theme }) => theme.fonts.m_11_500};
  };
`;

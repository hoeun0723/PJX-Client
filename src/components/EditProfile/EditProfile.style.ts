import styled from 'styled-components';

export const  EditProfileWrapper = styled.div`
  width: 100%;
`;
export const ImageBox = styled.div`
  display: flex;
  padding-top: 3rem;
`;
export const ProfileImage = styled.img`
  width: 6.8rem;
  height: 6.8rem;
`;
export const EditIconBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 100px;
  width: 2.6rem;
  height: 2.6rem;
  margin: 4.5rem 0 0 4.5rem;
`; 
export const EditBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  height: 41.3rem;
  gap: 1.4rem;
  padding-top: 1.8rem;
`;
export const EditItem = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({})};
  ${({ theme }) => theme.fonts.m_14_400};
  width: 100%;
  gap: 1rem;
  p {
    width: 23.4rem;
  }
`;
export const EditTitleText = styled.span`
  ${({ theme }) => theme.fonts.m_13_500};
  color: ${({ theme }) => theme.colors.primary.default};
  width: 5rem;
`;
export const EditSpan = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
`;
import styled from "styled-components";

export const MyPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  ${({ theme }) => theme.fonts.m_30_500};
  color: ${({ theme }) => theme.colors.gray[700]};
  width: 100%;
  height: 100vh;
  padding: 1.6rem 1.6rem 2rem 1.6rem;
  gap: 1.4rem;
`;
export const ProfileBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 1.2rem;
  padding-top: 3rem;
`;
export const ProflieImage = styled.img`
  width: 6.8rem;
  height: 6.8rem;
`;
export const NicknameBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  ${({ theme }) => theme.fonts.sb_16_600};
  cursor: pointer;
  gap: 0.4rem;
`;
export const IconBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 100px;
  width: 2.6rem;
  height: 2.6rem;
`
export const SummaryBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.bgDisabled};
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.fonts.m_16_500};
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 34.3rem;
  height: 14.3rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1.6rem 2rem;
  gap: 1rem;
  p {
    ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
    width: 30.3rem;
    height: 2.9rem;
    gap: 0.4rem;
  };
`;
export const SummarySpan = styled.span<{isDays: boolean}>`
  color: ${({ theme, isDays }) => (isDays ? theme.colors.primary.default : theme.colors.normal.black)};
`;
export const NavigateField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 0.8rem;
`;
export const NavigateBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  ${({ theme }) => theme.fonts.m_14_500};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: 34.3rem;
  height: 4.6rem;
  padding: 1.2rem 1.6rem;
  gap: 0.8rem;
  cursor: pointer;
  p {
    width: 100%;
  }
`;
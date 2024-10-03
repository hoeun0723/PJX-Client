import styled from 'styled-components';

export const StartWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
`;
export const TitleText = styled.span`
  ${({ theme }) => theme.fonts.sb_40_600};
`;
export const SubtitleText = styled.span`
  ${({ theme }) => theme.fonts.sb_25_600};
`;
export const IntroText = styled.span`
  ${({ theme }) => theme.fonts.r_16_400};
  padding-top: 1.5rem;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  padding-top: 17.5rem;
`;

import styled from 'styled-components';

export const Step3Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const LayoutBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  padding: 3.4rem 1.6rem 0 1.6rem;
  margin-bottom: 3.4rem;
`;
export const SubtitleText = styled.p`
  color:${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.fonts.r_12_400};
  padding: 1.8rem 0 2.8rem 0;
`;
export const ButtonFeild = styled.div`
  ${({theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  padding: 1.2rem 0 2rem 0;
  box-shadow: ${({ theme }) => theme.colors.shadow.top.m};
`;
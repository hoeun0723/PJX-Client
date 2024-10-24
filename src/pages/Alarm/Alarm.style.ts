import styled from "styled-components";

export const AlarmWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({ })};
${({ theme }) => theme.fonts.m_30_500};
  color: ${({ theme }) => theme.colors.gray[700]};
  width: 100%;
  height: 100vh;
  padding: 1.6rem 1.6rem 2rem 1.6rem;
`;
export const AlarmBox = styled.div`
  padding-top: 1.4rem;
`;
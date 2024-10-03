import styled from "styled-components";

export const AlarmWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({ })};
${({ theme }) => theme.fonts.m_30_500};
    color: ${({ theme }) => theme.colors.gray[700]};
    width: 100%;
    height: 100vh;
`;
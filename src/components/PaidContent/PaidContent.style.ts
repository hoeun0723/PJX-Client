import styled from "styled-components";

export const PaidContentWrapper=styled.div`

${({ theme: { mixin } }) => mixin.flexCenter({ })};
width: 100%;
gap: 0.8rem;
`;

export const FirstWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
width:100%;
`;
export const PaidName = styled.div`
${({ theme }) => theme.fonts.m_13_500};
color: ${({ theme }) => theme.colors.gray[700]};
`;
export const PaidCost = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({  })};
padding: 0 1rem;
height: 2.8rem;
border: 1px solid rgba(0, 0, 0, 0.12);
border-radius: 6px;

${({ theme }) => theme.fonts.m_12_500};
`;
export const PaidContent = styled.div`
width: 100%;

${({ theme }) => theme.fonts.r_12_400};
color: ${({ theme }) => theme.colors.gray[600]};
`;
export const PaidImgWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
width: 100%;
gap: 0.1rem;
`;
export const PaidImg = styled.img`
border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.03);
height: 15rem;
width: 16.3rem;
`;
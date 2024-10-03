import styled from 'styled-components';

export const CostContentWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
width: 100%;
padding: 2.4rem 1.6rem 2rem 1.6rem;
background-color: white;
height: 15.3rem;
border-radius: 1.2rem 1.2rem 0 0 ;
gap: 2rem;
`;

export const DayWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
`;

export const Day = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
gap: 0.3rem;
color: ${({ theme }) => theme.colors.gray[500]};
${({ theme }) => theme.fonts.m_12_500};
p{
color: ${({ theme }) => theme.colors.gray[700]};
${({ theme }) => theme.fonts.sb_14_600};
}
`;

export const AddContentBtn = styled.button`
width:8.7rem;
height: 3.2rem;
background-color: ${({ theme }) => theme.colors.gray[50]};
border: 1px solid rgba(0, 0, 0, 0.04);
color: ${({ theme }) => theme.colors.gray[600]};
border-radius: 3rem;
${({ theme }) => theme.fonts.m_13_600};
`;
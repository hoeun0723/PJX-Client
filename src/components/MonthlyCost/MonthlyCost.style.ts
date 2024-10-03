import styled from "styled-components";

interface ProgressBarFillProps {
    widthPercentage: number;
}

export const IcPenWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
    width: 100%;
    padding: 0 1.6rem;
`;

export const MonthlyPaidWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
    margin: 0 1.6rem;
    gap: 0.5rem;
    ${({ theme }) => theme.fonts.m_30_500};
    color: ${({ theme }) => theme.colors.gray[700]};

    p {
        ${({ theme }) => theme.fonts.m_15_500};
    }

    span {
        ${({ theme }) => theme.fonts.sb_15_600};
    }
`;
export const MonthlyGoalWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};
    
    width: 100%;
    padding: 0 1.6rem;
    
    margin-bottom: 0.7rem;
    
p{
    color: ${({ theme }) => theme.colors.gray[600]};
    ${({ theme }) => theme.fonts.m_12_500};
    gap: 0.7rem;
}
span{
    ${({ theme }) => theme.fonts.m_12_500};
    color: ${({ theme }) => theme.colors.primary.default};
}
`;



export const ProgressBarWrapper = styled.div`
    
    height: 0.9rem;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 8px;
    margin: 0 1.6rem;
    overflow: hidden; 
`;

export const ProgressBarFill = styled.div.attrs<ProgressBarFillProps>(props => ({
    style: {
        width: `${props.widthPercentage}%`
    }
}))`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.default};
    border-radius: 5px;
    transition: width 0.5s ease-out;
`;
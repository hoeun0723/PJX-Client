import styled from 'styled-components';

export const SearchingBarWrapper = styled.div`
display: flex;
align-items: center;
width: 30.7rem;
height: 3.8rem;
padding: 0 1.2rem;
gap: 0.6rem;
border-radius: 10px;
border: 1.2px solid var(--Primary-default, #FF5B29);
box-shadow: 0px 0px 0px 1px rgba(255, 91, 41, 0.25), 0px 0px 0px 4px rgba(255, 91, 41, 0.10);
`;
export const SearchingBarInput = styled.input`
color: ${({ theme }) => theme.colors.gray[500]};
${({ theme }) => theme.fonts.m_14_500};
border: none;
`;

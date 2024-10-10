import styled from 'styled-components';

export const EmotionWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({align: 'flex-start'})};
width: 100%;
padding: 1rem 1.2rem;
gap: 0.8rem;
border-radius: 8px;
border: 1px solid rgba(0, 0, 0, 0.03);
background-color: ${({theme})=> theme.colors.gray[50]};
`;


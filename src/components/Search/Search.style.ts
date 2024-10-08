import styled from 'styled-components';

export const SearchWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ direction:'column', align: 'center' })};
width: 100%;
padding: 1.4rem 1.6rem 0 1.6rem;
gap: 2rem;
`;

export const BackButton = styled.button`
background-color: white;
`;

export const BarWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
height: fit-content;
gap: 1.2rem;
`;

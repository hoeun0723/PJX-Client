import styled from 'styled-components';

export const SearchPersonWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column', align:'center'})};
width: 100%;
height: 100%;
background-color: white;
gap: 0.8rem;
`;
import styled from 'styled-components';

export const DropboxWrapper = styled.div`
  width: 100%;
  height: 24.2rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};;
`;
export const DropboxItemBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ align: 'center' })};
  ${({ theme }) => theme.fonts.r_16_400};
  line-height: 140%;
  width: 33.1rem;
  height: 4.6rem;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  cursor: pointer;
  &:hover{
    border-radius: 10px;
    ${({ theme }) => theme.colors.gray[50]};
  }
`;
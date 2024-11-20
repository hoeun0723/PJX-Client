import styled from 'styled-components';

export const WriteHeaderWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  ${({ theme }) => theme.fonts.sb_16_600};
  color: ${({ theme }) => theme.colors.gray[600]};
  width: 100%;
`;
export const IconWrapper = styled.div`
`;
export const BlankBox = styled.div`
  width: 2.4rem;
`;
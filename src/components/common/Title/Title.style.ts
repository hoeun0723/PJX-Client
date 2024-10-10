import styled from 'styled-components';

export const TitleWrapper = styled.div<{$isLarge: boolean}>`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  ${({ theme, $isLarge }) => ($isLarge ? theme.fonts.sb_25_600 : theme.fonts.sb_22_600)};
  width: 100%;
  line-height: 3.25rem;
  letter-spacing: -0.24px;
  gap: 1rem;
`;

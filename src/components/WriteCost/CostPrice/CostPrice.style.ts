import styled from 'styled-components';

export const CostPriceWrapper = styled.div`
  ${({ theme: { mixin}}) => mixin.flexBox({ direction: 'column', justify: 'flex-start', align: 'center' })};
  width: 100%;
  height: 100vh;
  padding-top: 9rem;
`;
export const InputBox = styled.div`
  ${({ theme: { mixin}}) => mixin.flexBox({ align: 'center'})};
  ${({ theme }) => theme.fonts.m_30_500};
  width: 16rem;
`;
export const PriceInput = styled.input`
  min-width: 5rem;
  width: auto;
  ${({ theme }) => theme.fonts.m_35_500};
  border: none;
  text-align: right;
`;
export const NameText = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  ${({ theme }) => theme.fonts.m_13_500};
  padding-bottom: 2.4rem;
`;
export const CountButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({})};
  gap: 0.6rem;

`;
export const ButotnField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
  padding-top: 35rem;
`;
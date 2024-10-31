import styled from 'styled-components';

export const CostNameWrapper = styled.div`
  ${({ theme: { mixin}}) => mixin.flexBox({ direction: 'column', justify: 'flex-start', align: 'center' })};
  width: 100%;
  height: 100vh;
  padding-top: 9rem;
`;
export const NameInput = styled.input`
  ${({ theme }) => theme.fonts.m_30_500};
  width: 30rem;
  height: 4rem;
  border: none;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  };
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
  padding-top: 35rem;
`;
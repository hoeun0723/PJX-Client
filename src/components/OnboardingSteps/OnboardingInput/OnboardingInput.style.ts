import styled from 'styled-components';

export const OnboardingInputWrapper = styled.div`
  width: 100%;
`;
export const TextInput = styled.input<{ $isError: boolean }>`
  ${({ theme }) => theme.fonts.r_16_400};
  display: flex;
  width: 100%;
  height: 5.2rem;
  border-radius: 10px;
  border: solid 1.2px ${({ theme }) => theme.colors.gray[200]};
  padding: 1.5rem 1.6rem 1.5rem 1.6rem;
  margin-top: 4.4rem;
  gap: 1rem;
  &:focus {
    border: solid 1.2px ${({ theme }) => theme.colors.category.lightOrange};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.category.lightOrange};
  }
`;
export const ErrorText = styled.p`
  ${({ theme }) => theme.fonts.m_12_500};
  color: ${({ theme }) => theme.colors.category.lightOrange};
  padding-left: 1rem;
  padding-top: 0.6rem;
`;
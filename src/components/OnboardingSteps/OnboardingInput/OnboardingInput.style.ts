import styled from 'styled-components';

export const OnboardingInputWrapper = styled.div`
  width: 100%;
`;
export const InputAreaBox = styled.div`
  display: flex;
  width: 100%;
  height: 5.2rem;
  border-radius: 10px;
  border: solid 1.2px ${({ theme }) => theme.colors.gray[200]};
  padding: 1.5rem 1.6rem 1.5rem 1.6rem;
  margin-top: 4.4rem;
  gap: 1rem;
`;
export const TextInput = styled.input`
  ${({ theme }) => theme.fonts.r_16_400};
  border: none;
  width: 20.5rem;
  height: 2.2rem;
`;
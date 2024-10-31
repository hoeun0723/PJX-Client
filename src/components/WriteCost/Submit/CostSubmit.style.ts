import styled from 'styled-components';

export const CostSubmitWrapper = styled.div`
  ${({ theme: { mixin}}) => mixin.flexBox({ direction: 'column', justify: 'flex-start', align: 'center' })};
  width: 100%;
  height: 100vh;
  padding-top: 4rem;
`;
export const CostBox = styled.div`
  ${({ theme: { mixin}}) => mixin.flexBox({ align: 'center'})};
  ${({ theme }) => theme.fonts.m_30_500};
  padding-bottom: 1rem;
`;
export const PriceSpan = styled.span`
  ${({ theme }) => theme.fonts.m_35_500};
`;
export const NameText = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  ${({ theme }) => theme.fonts.m_13_500};
  padding-bottom: 3rem;
`;
export const FileInput = styled.input`
  display: none;
`;
export const Label = styled.label`
  ${({ theme: { mixin}}) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.m_13_500};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
  width: 31.5rem;
  height: 13rem;
  border-radius: 10px;
  margin: 1.2rem 0;
  gap: 1rem;
`;
export const PreviewImage = styled.img`
  width: 31.5rem;
  height: 13rem;
`;
export const MemoTextArea = styled.textarea`
  ${({ theme }) => theme.fonts.r_16_400};
  width: 34.3rem;
  height: 13rem;
  padding: 1.5rem;
  resize: none;
  border-radius: 10px;
  border: 1.2px solid var(--gray-200, #E9EAF0);
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin}}) => mixin.flexCenter({})};
  padding-top: 10rem;
`;
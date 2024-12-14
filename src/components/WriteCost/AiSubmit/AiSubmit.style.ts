import styled from 'styled-components';

export const AiSubmitWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  gap: 1.2rem;
`;
export const HorizontalLine = styled.div`
  background: ${({ theme }) => theme.colors.gray[200]};
  width: 34.4rem;
  height: 0.1rem;
  margin-top: 4rem;
`;
export const InputBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  gap: 1.2rem;
  padding: 1.2rem 0;
`;
export const TextBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ direction: 'column' })};
  width: 100%;
  gap: 0.2rem;
  padding: 0.8rem 0;
  ${({ theme }) => theme.fonts.sb_13_600};
  p {
    ${({ theme }) => theme.fonts.m_11_500};
    color: ${({ theme }) => theme.colors.gray[500]};
  };
`;
export const Label = styled.label`
  ${({ theme: { mixin}}) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.m_13_500};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
  width: 34.3rem;
  height: auto;
  border-radius: 10px;
  gap: 1rem;
`;
export const AddBox = styled.div`
  height: 29.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FileInput = styled.input`
  display: none;
`;
export const PreviewImage = styled.img`
  width: 34.3rem;
  height: auto;
  object-fit: contain;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin}}) => mixin.flexCenter({})};
  padding-top: 12rem;
`;
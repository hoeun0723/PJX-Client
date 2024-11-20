import styled from "styled-components";

export const WriteTypeWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({ })};
${({ theme }) => theme.fonts.m_30_500};
	color: ${({ theme }) => theme.colors.gray[700]};
	width: 100%;
	padding: 6.4rem 1.6rem;
`;
export const SelectBox = styled.div`
	${({ theme: { mixin } }) => mixin.flexBox({})};
	padding-top: 4.4rem;
	gap: 6.4rem;
`;
export const ItemBox = styled.div`
	${({ theme: { mixin } }) => mixin.flexCenter({})};
	${({ theme }) => theme.fonts.sb_16_600};
	gap: 1.2rem;
`;
import React from "react";
import * as S from './WriteType.style';
import Title from '../../components/common/Title/Title';
import { IcWriteAi, IcWriteSelf } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

const WriteType = () => {
	const navigate = useNavigate();
	const handleWriteAi = () => {
    navigate('/write-cost', {state: {key: 'aiSubmit'}});
  };
	const handleWriteSelf = () => {
    navigate('/write-cost', {state: {key: 'submit'}});
  };
	return (
		<S.WriteTypeWrapper>
			<Title>
				🤖 <br />
				지출 등록 방식을 <br />
				선택해주세요
			</Title>
			<S.SelectBox>
				<S.ItemBox onClick={() => handleWriteAi()}>
					<IcWriteAi />
					AI 영수증
				</S.ItemBox>
				<S.ItemBox onClick={() => handleWriteSelf()}>
					<IcWriteSelf />
					직접 작성
				</S.ItemBox>
			</S.SelectBox>
		</S.WriteTypeWrapper>
	);
};

export default WriteType;
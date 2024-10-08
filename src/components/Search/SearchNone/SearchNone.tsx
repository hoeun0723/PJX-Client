import React from "react";
import * as S from './SearchNone.style';

interface SearchNoneProps {
    nickname: string;
}

const SearchNone = ({nickname}:SearchNoneProps) => {
    return (
        <S.SearchNoneWrapper hasNickname={!!nickname}>
            <S.TextWrapper>
            <div>해당 닉네임과 동일한</div>친구를 찾지 못했습니다.
            </S.TextWrapper>
        </S.SearchNoneWrapper>
    )
}

export default SearchNone;
import React from "react";
import * as S from './SearchNone.style';

const SearchNone = () => {
    return (
        <S.SearchNoneWrapper>
            <S.TextWrapper>
            <div>해당 닉네임과 동일한</div>친구를 찾지 못했습니다.
            </S.TextWrapper>
        </S.SearchNoneWrapper>
    )
}

export default SearchNone;
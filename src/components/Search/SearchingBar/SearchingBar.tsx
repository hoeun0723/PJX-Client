import React from "react";
import * as S from './SearchingBar.style';
import { IcSearch } from "../../../assets/svg";

type SearchingBarProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchingBar: React.FC<SearchingBarProps> = ({ value, onChange }) => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    return (
        <S.SearchingBarWrapper><IcSearch/><S.SearchingBarInput placeholder="닉네임으로 친구찾기"  value={value}
        onChange={handleInput}/></S.SearchingBarWrapper>
    )
}

export default SearchingBar;
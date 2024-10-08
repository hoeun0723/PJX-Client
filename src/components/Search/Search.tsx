import React, { useState } from "react";
import * as S from './Search.style';
import SearchingBar from "./SearchingBar/SearchingBar";
import { IcBack } from "../../assets/svg";
import { useNavigate } from "react-router-dom";
import SearchNone from "./SearchNone/SearchNone";
import SearchPerson from "./SearchPerson/SearchPerson";

const Search = () => {
    const navigate = useNavigate();
    const nickName = "이웃집 영자";
    const [nickname,setNickname] = useState("");
    const handleInputChange = (value:string) => {
        setNickname(value);
    };
    return (
        <S.SearchWrapper>
            <S.BarWrapper>
            <S.BackButton onClick={()=> navigate(-1)}>
                <IcBack />
            </S.BackButton>
            <SearchingBar value={nickname} onChange={handleInputChange}/>
            </S.BarWrapper>
            {nickname 
                ? (nickName === nickname ? <SearchPerson/> : <SearchNone/>) 
                : null}
        </S.SearchWrapper>
    )
}

export default Search;
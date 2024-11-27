import React from "react";
import * as S from './PaidContent.style';

interface PaidContentProps {
    note: string;
    amount: number;
    description?: string;
    images?: string[];
}

const PaidContent = ({ amount, note, description, images }: PaidContentProps) => {
    const formatAmount = (value: number) => {
        return `${value.toLocaleString()}원`;
    };

    return (
        <S.PaidContentWrapper>
            <S.FirstWrapper>
                <S.PaidName>{note}</S.PaidName>
                <S.PaidCost>{formatAmount(amount)}</S.PaidCost>
            </S.FirstWrapper>

            {/* description이 존재할 때만 렌더링 */}
            {description && <S.PaidContent>{description}</S.PaidContent>}

            {/* images 배열 조건 처리 */}
            {images && images.length > 0 && (
                <S.PaidImgWrapper>
                    {images.length === 1 && <S.PaidImg src={images[0]} />}
                    {images.length > 1 && (
                        <>
                            <S.PaidImg src={images[0]} />
                            <S.PaidImg src={images[1]} />
                        </>
                    )}
                </S.PaidImgWrapper>
            )}
        </S.PaidContentWrapper>
    );
};

export default PaidContent;
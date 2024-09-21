import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  normal: {
    white: '#FFFFFF',
    background_white: '#F9F9F9',
    black: '#000000',
  },
  pink: {
    background_pink: '#FFBBCB',
    dark_pink: '#FF7575',
    btn_hover_pink: '#FFA8BC',
    btn_pink: '#FFDFE7',
    white_pink: '#FFEEF2',
    warm_pink: '#FFA2A2',
    red_pink: '#FF5959',
  },
  feeling: {
    happy_yellow: '#FFF1A8',
    sad_blue: '#B4F2FF',
    surprised_orange: '#FFCA99',
    relax_green: '#B9FFB3',
    worried_purple: '#C3C9FF',
    angry_pink: '#FFB6B6',
  },
  yellow: {
    background_yellow: '#FFE768',
  },
  gray: {
    white_gray: '#D9D9D9',
    dark_gray: '#CBC7C7',
    text_gray: '#858585',
  },
};

const fonts = {
  m_10_500: css`
    font-size: 10px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  sb_10_600: css`
    font-size: 10px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  m_11_500: css`
    font-size: 11px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  m_12_400: css`
    font-size: 12px;
    font-weight: 400;
    font-family: "Pretendard-Medium";
  `,
  r_12_400: css`
    font-size: 12px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
  `,
  m_12_500: css`
    font-size: 12px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  r_12_500: css`
    font-size: 12px;
    font-weight: 500;
    font-family: "Pretendard-Regular";
  `,
  m_13_500: css`
    font-size: 13px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  m_13_600: css`
    font-size: 13px;
    font-weight: 600;
    font-family: "Pretendard-Medium";
  `,
  sb_13_600: css`
    font-size: 13px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  r_14_400: css`
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
  `,
  m_14_500: css`
    font-size: 14px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  sb_14_600: css`
    font-size: 14px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  m_15_500: css`
    font-size: 15px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  sb_15_600: css`
    font-size: 15px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  r_16_400: css`
    font-size: 16px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
  `,
  m_16_500: css`
    font-size: 16px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  sb_16_600: css`
    font-size: 16px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  b_16_700: css`
    font-size: 16px;
    font-weight: 700;
    font-family: "Pretendard-Bold";
  `,
  r_18_400: css`
    font-size: 18px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
  `,
  r_18_600: css`
    font-size: 18px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
  `,
  sb_22_600: css`
    font-size: 22px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  sb_25_600: css`
    font-size: 25px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
  m_30_500: css`
    font-size: 30px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  m_34_500: css`
    font-size: 34px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  m_35_500: css`
    font-size: 35px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  `,
  sb_35_600: css`
    font-size: 35px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
  `,
};

const theme = { mixin, colors, fonts };

export default theme;
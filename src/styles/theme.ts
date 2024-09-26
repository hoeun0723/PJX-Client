import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  foregroundRgb: '0, 0, 0',
  backgroundStartRgb: '214, 219, 220',
  backgroundEndRgb: '255, 255, 255',

  dimmed: 'rgba(0, 0, 0, 0.24)',

  kakao: {
    yellow: '#fee500',
    brown: '#3c1e1e',
  },

  gray: {
    '700': '#27262e',
    '600': '#5e6066',
    '500': '#8c9097',
    '400': '#bec3cc',
    '300': '#d5d9e0',
    '200': '#e9eaf0',
    '100': '#f3f5f9',
    '50': '#f8f9fc',
  },

  primary: {
    default: '#f67402',
    hover: '#f04f1e',
    disabled: '#ffdace',
    bg: '#ffece8',
    bgDisabled: '#fff7f5',
  },

  category: {
    yellow: '#ffeb3a',
    mint: '#a1f9e4',
    navy: '#9ab6ff',
    lightRed: '#ff8585',
    orange: '#ffa858',
    lightOrange: '#ff774e',
    brown: '#e5aa99',
    lightPink: '#ffaafc',
    aeroBlue: '#afffc6',
    lightGreen: '#66d8a1',
    sky: '#7cd0ff',
    lightPurple: '#d2afff',
    lightGray: '#C5C5C5',
  },

  shadow: {
    bottom: {
      s: '0px 1px 4px rgba(42, 39, 65, 0.08)',
      m: '0px 2px 10px rgba(42, 39, 65, 0.1)',
      l: '0px 4px 8px 3px rgba(42, 39, 65, 0.1)',
      xl: '0px 8px 16px 2px rgba(42, 39, 65, 0.18)',
      '2xl': '0px 10px 18px 4px rgba(42, 39, 65, 0.22)',
    },
    top: {
      s: '0px -1px 4px rgba(42, 39, 65, 0.08)',
      m: '0px -2px 10px rgba(42, 39, 65, 0.1)',
      l: '0px -4px 8px 3px rgba(42, 39, 65, 0.1)',
      xl: '0px -8px 16px 2px rgba(42, 39, 65, 0.18)',
      '2xl': '0px -10px 18px 4px rgba(42, 39, 65, 0.22)',
    },
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
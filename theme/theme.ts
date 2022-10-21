import { createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '#91D3EB',
      primaryLightHover: '#549FC5',
      primaryLightActive: '#27648B',
      primaryLightContrast: '#021B35',
      primary: '#03243E',
      primaryBorder: '#03243E',
      primaryBorderHover: '#021B35',
      primarySolidHover: '#01142C',
      primarySolidContrast: '$white',
      primaryShadow: '#03243E',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      md: '1rem' /* 16px */,
      lg: '1.125rem' /* 18px */,
      xl: '1.25rem' /* 20px */,
      '2xl': '1.5rem' /* 24px */,
      '3xl': '1.875rem' /* 30px */,
      '4xl': '2.25rem' /* 36px */,
      '5xl': '3rem' /* 48px */,
      '6xl': '3.75rem' /* 60px */,
      '7xl': '4.5rem' /* 72px */,
      '8xl': '6rem' /* 96px */,
      '9xl': '8rem' /* 128px */,
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
});

export default theme;

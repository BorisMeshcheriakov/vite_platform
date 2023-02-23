import { createTheme } from '@mui/material/styles';
import SFPro from './assets/fonts/SFProDisplay-Regular.woff2';

// A custom theme for this app
const theme = createTheme({
	typography: {
		fontFamily: 'SFPro, Regular',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
            @font-face {
              font-family: 'SFPro';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('SFPro'), local('SFPro-Regular'), url(${SFPro}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
		},
	},
});

export default theme;

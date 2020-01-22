import { ThemeProvider } from 'styled-components';

const theme =  {
  colors: {
    base: '#F5F5F5',
    text: '#4a4a4a',
    primary: '#275EAF',
    secondaly: '#3B60B6',
    tertiary: '#74A9E8',
    quaternary: '#7489A4;',
    white: '#FFF',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

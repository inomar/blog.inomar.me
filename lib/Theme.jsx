import { ThemeProvider } from 'styled-components';

const theme =  {
  colors: {
    primary: '#275EAF',
    secondaly: '#3B60B6',
    tertiary: '#74A9E8',
    quaternary: '#7489A4;'
  }
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)

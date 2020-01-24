import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
  ${reset}
  body {
    font-family: 'Noto Sans JP', '游ゴシック体', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }

  ul {
    list-style: none;
  }
`;
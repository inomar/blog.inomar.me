import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');

  body {
    font-family: 'Noto Sans JP', '游ゴシック体', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.quaternary};
    }
  }
`;
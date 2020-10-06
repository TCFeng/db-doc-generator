import { createGlobalStyle } from 'styled-components';

import * as COLOR from './color';

export { default as COLOR } from './color';

export const injectGlobalStyle = () => createGlobalStyle`
  body {
    font-family: "PingFang SC", 'Microsoft JhengHei', sans-serif;
    font-size: 14px;
    background-color: #fff;
    overflow: hidden;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NanumSquareRound';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'NanumSquareRound', sans-serif;
        letter-spacing: -0.03rem;
        white-space: nowrap;
    }
    ul{
        list-style:none;
    }
`;

export default GlobalStyle;

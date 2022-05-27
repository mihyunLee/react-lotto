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
    body{
        background-color: #f6f6f6;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0px;
    }

    #root {
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    ul{
        list-style:none;
        display: flex;
        justify-content: center;
        alglin-itmes: center;
    }

    li{
        margin: 5px;
        padding: 10px;
        border 3px solid black;
        border-radius: 50%;
    }
   
`;

export default GlobalStyle;

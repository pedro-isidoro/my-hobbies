import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        font-size: 10px;
    }
    
    ul li, a{
        text-decoration: none;
        list-style: none;
    }

    body{
        overflow-x: hidden;
    }
`;
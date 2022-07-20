import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
padding: 0;
box-sizing: border-box;
outline: 0;
}

:root{
    --rosaTerroso: #c27061;
   --backPaper: #eaead2;
   --backCard: #ededdb; 
   --greenMenu: #18744b;
   --grayFont: #1f2d2d;
   --spanColor: #877771;

   

}

body{
    background: var(--backPaper);
    color: var(--grayFont);
    font-family: "Gentium Book Basic", serif;
    font-size: 1rem;

}

button{
    cursor: pointer;
}



`;

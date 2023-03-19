import { createGlobalStyle } from "styled-components";
import { darkPurple } from "./colorProvider";
import "./fontProvider.css";

export const GlobalStyle = createGlobalStyle`
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    color: #fff;
    background-color: ${darkPurple};
    font-family: Nexa Regular;
    font-weight: lighter;
}
`;

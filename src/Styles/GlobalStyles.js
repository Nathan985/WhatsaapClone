import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--text);
    }
    
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: -apple--apple-system, BlinkMacSystemFont, sans-serif, system-ui
    }
    html{
        background: var(--background)
    }
    :root{
        --primary: #06D755;
        --secondary: #009688;
        --white: #F6F6F6;
        --background: #D9DBD4;
        --text: #313131;
        --focus: #EBEBEB;
        --send: #DCF8C6;
        --received: #FFFFFF;
        --icons: #919191;
        --header: #EDEDED;
    }
`;
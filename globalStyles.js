import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:'Hammersmith One', sans-serif;
  }
  html, body {
    min-height: 100vh;
    background-color:${({ theme }) => theme.colors.bg}
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    width:100vw;
    height:100vh;
  }
`
export default GlobalStyle

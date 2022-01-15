import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  :root {
    --background: #050309;
    --border: rgba(255, 255, 255, 0.04);
    --border-light: rgba(255, 255, 255, 0.06);
    --border-bold: rgba(255, 255, 255, 0.1);

    --blue: rgba(13, 6, 32, 0.6);
    --blue-border: rgba(10, 9, 36, 1);

    --bg-blue: linear-gradient(45deg, rgba(13, 6, 32, 0.2), rgba(10, 9, 36, 0.4));
    --bg-blue-fade: linear-gradient(45deg, rgba(13, 6, 32, 0.25), rgba(10, 9, 36, 0.45));
    --bg-blue-hover: linear-gradient(45deg, rgba(13, 6, 32, 0.35), rgba(10, 9, 36, 0.55));
    --bg-blue-active: linear-gradient(45deg, rgba(13, 6, 32, 0.45), rgba(10, 9, 36, 0.65));
  
    --white-gradient: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4));
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export default GlobalStyle

export const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;

  background: var(--background);
`

export const ViewWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  padding: 180px 0 80px 0;
`

export const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding: 20px;

  background: var(--bg-blue);
  border: 1px solid var(--border);
`

export const ViewHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 6px;
  margin-bottom: 15px;

  color: rgba(255, 255, 255, 0.7);
  background: var(--bg-blue);
  border: 1px solid var(--border);

  svg {
    font-size: 24px;
    margin-right: 10px;

    color: rgba(255, 255, 255, 0.7);
  }
`

export const ViewContents = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 70px);
  padding: 20px;

  background: var(--bg-blue-fade);
  border: 1px solid var(--border);
`
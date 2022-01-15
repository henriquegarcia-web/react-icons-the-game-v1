import styled from "styled-components"

export const IconsViewerContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 6px solid orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .viewer {
    width: 100%;
    max-width: 360px;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 30px;

    border: 2px solid black;
  }

  .viewer__register {
    position: relative;
    display: flex;
    align-items: center;

    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      input {
        border-radius: 6px;
        padding: 5px 10px;
      }

      input[type='text'] {
        width: calc(65% - 10px);
        border: 1px solid black;
        margin-right: 10px;
      }

      select {
        width: 35%;
        padding: 5px 10px;
        border-radius: 6px;
      }

      input[type='submit'] {
        width: 35%;
        margin-top: 15px;
        font-size: 16px;
        font-weight: 300;
        padding: 6px 12px;
        cursor: pointer;
      }
    }

    .viewer__tester {
      position: absolute;
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      border-radius: 6px;
      transform: translateX(150%);
      transition: .2s;
      cursor: pointer;

      border: 2px solid black;

      svg {
        font-size: 40px;
        transition: .2s;
      }

      &:hover {
        background: black;

        svg {
          color: white;
        }
      }
    }
  }

  .viewer__finder {

  }
`
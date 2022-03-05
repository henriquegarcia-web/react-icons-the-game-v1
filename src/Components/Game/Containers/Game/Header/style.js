import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 20px;

  border-bottom: 1px solid var(--border);

  .wrapper {
    display: flex;
    width: 100%;
    max-width: 1300px;
    height: 100%;
  }
`

export const HeaderPlayerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 6px;
  padding: 15px 20px;
  margin-right: 10px;

  background: var(--bg-blue);
  border: 1px solid var(--border);

  .user_info__avatar {
    display: flex;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 6px;
    cursor: pointer;

    background: var(--bg-blue-fade);
    border: 1px solid var(--border-light);

    svg {
      color: white;
      font-size: 56px;
    }
  }

  .user_info__infos {
    width: calc(100% - 90px);
    padding: 5px;

    /* border: 1px solid var(--border-light); */

    .user_info__infos__nick {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      p {
        font-size: 16px;
        font-weight: 300;

        color: white;
      }

      .user_info__infos__level {
        border-radius: 6px;
        padding: 1px 3px;

        background: white;

        p {
          font-size: 15px;
          font-weight: 400;
        
          color: black;
        }
      }
    }

    .user_info__infos__emblems {
      /* outline: 1px solid yellow; */
      display: flex;
      justify-content: space-between;

      .emblem {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 6px;
        /* margin-right: 10px; */
        cursor: pointer;

        background: var(--bg-blue-fade);
        border: 1px solid var(--border-light);

        svg {
          font-size: 22px;

          color: white;
        }
      }
    }
  }
`

export const HeaderPlayerNumeraries = styled.div`
  display: flex;
  height: fit-content;
  border-radius: 6px;
  padding: 15px 20px;
  margin-right: 10px;

  background: var(--bg-blue);
  border: 1px solid var(--border);

  div {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 10px;
    margin-right: 10px;

    background: var(--bg-blue-fade);
    border: 1px solid var(--border-light);

    &:last-of-type {
      margin: 0;

      p {
        font-weight: 300;
      }
    }

    svg {
      font-size: 22px;
      margin-right: 6px;

      color: white;
    }

    p {
      font-size: 15px;
      letter-spacing: 1px;
      font-weight: 200;

      color: white;
    }
  }
`

export const HeaderNavbar = styled.div`
  width: fit-content;
  margin-left: auto;

  ul {
    display: flex;
    height: fit-content;
    border-radius: 6px;
    padding: 15px 20px;

    background: var(--bg-blue);
    border: 1px solid var(--border);

    li {
      a {
        display: flex;
        align-items: center;
        border-radius: 6px;
        padding: 10px;
        margin-right: 10px;
        cursor: pointer;
        transition: .2s;
  
        background: var(--bg-blue-fade);
        border: 1px solid var(--border-light);
  
        &:hover {
          background: var(--bg-blue-hover);
  
          p {
            color: rgba(255, 255, 255, 1);
          }
        }
  
        &.active {
          background: var(--bg-blue-active);
  
          p {
            color: rgba(255, 255, 255, 1);
          }
        }
  
        p {
          font-size: 15px;
          letter-spacing: 1px;
          font-weight: 200;
          text-transform: uppercase;
          transition: .2s;
  
          color: rgba(255, 255, 255, 0.7);
        }
  
        svg {
          font-size: 22px;
  
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
`
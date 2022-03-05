import styled from "styled-components";

import { View } from '../../../../GlobalStyles'

export const InventoryViewContainer = styled(View)`
  /* border: 4px solid yellowgreen; */
  color: white;
`

export const InventoryUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 10px);
  height: 100%;
  border-radius: 6px;
  padding: 15px;
  margin-right: 10px;

  background: var(--bg-blue);
  border: 1px solid var(--border);

  .user_info__header {
    display: flex;
    width: 100%;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;

    border: 1px solid var(--border-light);

    .user_info__header__image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 75px;
      border-radius: 6px;

      border: 1px solid var(--border-light);

      svg {
        font-size: 54px;
      }
    }

    .user_info__header__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;

      p {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }

      span {
        display: flex;
        align-items: center;
        height: fit-content;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        
        p {
          font-size: 14px;
          font-weight: 200;
          margin: 0;
          margin-right: 6px;
        }
      }
    }
  }

  .user_info__skills {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;

    border: 1px solid var(--border-light);

    .user_info__skills__skill {
      display: flex;
      justify-content: space-between;
      padding: 6px 10px;
      margin-bottom: 10px;
      border-radius: 6px;

      border: 1px solid var(--border);

      p {
        font-size: 15px;
        font-weight: 200;
        letter-spacing: 1px;
      }

      p:nth-of-type(1) {

      }

      p:nth-of-type(2) {
        font-weight: 400;

        b {
          font-weight: 200;
          font-size: 15px;
        }
      }
    }
  }
`

export const InventoryEquipment = styled.div`
  width: calc(45% - 10px);
  height: 100%;
  border-radius: 6px;
  margin: 0 5px;
  padding: 15px;
  
  background: var(--bg-blue);
  border: 1px solid var(--border);

  .equipment__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;

    border: 1px solid var(--border-light);

    .equipment__header {
      display: flex;
      margin-bottom: 15px;
      
      p {
        font-size: 18px;
        font-weight: 200;
        letter-spacing: 1px;

        color: rgba(255, 255, 255, 0.8);
      }
    }

    .equipment__items {
      display: flex;
      justify-content: space-between; 

      .equipment__items__item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        border-radius: 6px;

        border: 1px solid var(--border-light);

        &:first-of-type {
          border: 2px solid var(--border-bold);

          svg {
            font-size: 34px;
          }
        }

        &.active {
          svg {
            color: rgba(255, 255, 255, 1);
          }
        }

        svg {
          font-size: 28px;
          color: rgba(255, 255, 255, 0.04);
        }
      }
    }
  }

  .equipment__weapons {
    display: flex;
    flex-wrap: wrap;
  }

  #clothes {
    .equipment__items__item {
      width: 66px;
      height: 66px;

      svg {
        font-size: 34px;
      }
    }
  }
  
  #primary {
    width: calc(50% - 7.5px);
    margin-right: 7.5px;

    .equipment__items__item {
      &:nth-of-type(2) {
        margin: 0 15px 0 auto;
      }
    }
  }

  #secondary {
    width: calc(50% - 7.5px);
    margin-left: 7.5px;

    .equipment__items__item {
      &:nth-of-type(2) {
        margin: 0 15px 0 auto;
      }
    }
  }

  #hands {
    width: 100%;

    .equipment__items__item {
      border: 1px solid var(--border-light);
    }
  }
`

export const InventoryItems = styled.div`
  width: calc(30% - 10px);
  height: 100%;
  border-radius: 6px;
  margin-left: 10px;
  padding: 15px;

  background: var(--bg-blue);
  border: 1px solid var(--border);

  .inventory__items__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;

    border: 1px solid var(--border-light);

    .inventory__items__header {
      margin-bottom: 15px;
      
      p {
        font-size: 18px;
        font-weight: 200;
        letter-spacing: 1px;

        color: rgba(255, 255, 255, 0.8);
      }
    }

    .inventory__items {
      display: flex;
      flex-wrap: wrap;
      
      .inventory__item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        border-radius: 6px;
        margin: 6px 8px;

        border: 1px solid var(--border-light);

        svg {
          font-size: 30px;
          color: rgba(255, 255, 255, 0.04);
        }
      }
    }
  }
`
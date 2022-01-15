import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding-top: 200px;

  /* outline: 2px solid yellow; */
  
  background: var(--background);

  .catalog__wrapper {
    width: 100%;
    max-width: 1165px;
    padding: 0 20px;
    height: calc(100% - 80px);
    margin-bottom: 80px;
    overflow: auto;

    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`

export const CatalogCategoyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 30px;

  border: 1px solid rgba(160, 160, 160, 0.2);

  .catalog_container__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
    p {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;

      color: rgba(255, 255, 255, 0.9);
    }

    .catalog_container__header__hover {
      p {
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 2px;
        /* text-transform: none; */
      }
    }
  }

  .catalog_container__items_container {
    display: flex;
    align-items: center;
    /* height: 90px; */
    border-radius: 6px;
    padding: 10px;
    overflow: auto;

    ::-webkit-scrollbar {
      height: 10px;
      z-index: 1000;
    }

    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }

    border: 1px solid rgba(160, 160, 160, 0.1);

    .catalog_container__items_wrapper {
      display: flex;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      width: 100%;
      
      .catalog_container__item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 6px;
        margin: 5px;
        cursor: pointer;
        transition: .2s;
  
        border: 1px solid var(--border-light);

        &:hover {
          background: var(--bg-blue-hover);
          border: 1px solid var(--border-bold);

          svg {
            color: rgba(255, 255, 255, 2);
          }
        }
  
        svg {
          font-size: 36px;
          transition: .2s;

          color: rgba(255, 255, 255, 0.9);
        }
      }
    }

  }
`
import styled from "styled-components";

import { View } from '../../../../GlobalStyles'

export const DuelsViewContainer = styled(View)`
  /* border: 2px solid pink; */
  color: white;
`

export const DuelsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const DuelsInfoContainer = styled.div`
  width: calc(30% - 15px);
  padding: 15px;
  border-radius: 6px;
  margin-right: 15px;

  background: var(--bg-blue);
  border: 1px solid var(--border);
`

export const DuelsBattleContainer = styled.div`
  width: 70%;
  padding: 15px;
  border-radius: 6px;

  background: var(--bg-blue);
  border: 1px solid var(--border);

  .duel_controller__container {
    display: flex;
    height: 100%;

    .duel_controller__enemy_side {
      display: flex;
      width: 50%;
      padding-right: 7.5px;
/* 
      outline: 1px solid blue; */

      .enemy_status {
        display: flex;
        flex-direction: column;
        width: 100%;

        .enemy_status__main {
          display: flex;
          align-items: center;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 15px;

          background: var(--bg-infernal);
          border: 1px solid var(--border);

          .enemy_status__image {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 6px;

            border: 1px solid var(--border-bold);

            svg {
              font-size: 48px;
            }
          }

          .enemy_status__info {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: calc(100% - 95px);
            height: 100%;
            margin-left: 15px;
            padding: 5px 0;

            .enemy_status__info__name {
              margin-bottom: 5px;

              p {
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 1px;

                color: rgba(255, 255, 255, 0.95);
              }
            }

            .enemy_status__info__class {
              margin-bottom: auto;

              &.red {
                color: orangered;
              }

              p {
                font-size: 13px;
                font-weight: 300;
                letter-spacing: 1px;
                text-transform: uppercase;
              }
            }

            .enemy_status__info__level {


              p {
                font-size: 13px;
                font-weight: 300;
                letter-spacing: 1px;

                color: rgba(255, 255, 255, 0.8);
              }

              b {
                font-size: 15px;
                font-weight: 600;
                color: rgba(255, 255, 255, 95);
              }
            }
          }
        }

        .enemy_status__life {
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 15px;

          background: var(--bg-infernal);
          border: 1px solid var(--border);

          .enemy_status__lifebar {
            position: relative;
            width: 100%;
            height: 6px;
            border-radius: 6px;

            background: rgba(40, 40, 40, 0.4);

            .enemy_status__lifebar__fill {
              position: absolute;
              left: 0;
              top: 0;
              width: 80%;
              height: 100%;
              border-radius: 6px;

              background: orangered;
            }
          }
        }

        .enemy_status__attacks {
          padding: 15px;
          border-radius: 6px;

          background: var(--bg-infernal);
          border: 1px solid var(--border);
        }
      }
    }

    .duel_controller__player_side {
      display: flex;
      width: 50%;

      /* outline: 1px solid pink; */
    }
  }
`
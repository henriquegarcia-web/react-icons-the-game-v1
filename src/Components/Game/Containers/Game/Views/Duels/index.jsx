import React from 'react'

import {
  ViewWrapper,
  ViewContainer,
  ViewHeader,
  ViewContents,
} from '../../../../GlobalStyles'

import {
  DuelsViewContainer,
  DuelsContainer,
  DuelsInfoContainer,
  DuelsBattleContainer,

} from './style'

import {
  GiDuel,
  GiDrakkarDragon
} from "react-icons/gi"

const DuelsView = () => {
  return (
    <DuelsViewContainer>
      <ViewWrapper>
        <ViewContainer>
          <ViewHeader>
            <GiDuel />
            Duelos
          </ViewHeader>
          <ViewContents>
            <DuelsContents />
          </ViewContents>
        </ViewContainer>
      </ViewWrapper>
    </DuelsViewContainer>
  )
}

export default DuelsView

// ------------------- CONTEÚDO DA VIEW DUELOS

export const DuelsContents = () => {
  return (
    <DuelsContainer>
      
      <DuelsInfoContainer>

      </DuelsInfoContainer>

      <DuelsBattleContainer>
        <DuelController />
      </DuelsBattleContainer>

    </DuelsContainer>
  )
}


// ------------------ Controle do Duelo

export const DuelController = () => {
  return (
    <div className='duel_controller__container'>
      
      <div className='duel_controller__enemy_side'>
        <div className='enemy_status'>
          <div className='enemy_status__main'>
            <div className='enemy_status__image'>
              <GiDrakkarDragon />
            </div>
            <div className='enemy_status__info'>
              <div className='enemy_status__info__name'>
                <p>Drakkar Dragon</p>
              </div>
              <div className='enemy_status__info__class red'>
                <p>Infernal</p>
              </div>
              <div className='enemy_status__info__level'>
                <p>Level: <b>38</b></p>
              </div>
            </div>
          </div>
          <div className='enemy_status__life'>
            <div className='enemy_status__lifebar'>
              <div className='enemy_status__lifebar__fill'></div>
            </div>
          </div>
          <div className='enemy_status__attacks'>

          </div>
        </div>
      </div>

      <div className='duel_controller__player_side'>
        <div className='player_status'>

        </div>
      </div>

      {/* <div className=''>
        
      </div> */}

    </div>
  )
}

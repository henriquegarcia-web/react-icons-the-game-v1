import React from 'react'

import {
  ViewWrapper,
  ViewContainer,
  ViewHeader,
  ViewContents,
} from '../../../../GlobalStyles'

import {
  InventoryViewContainer,
  InventoryUserInfo,
  InventoryEquipment,
  InventoryItems
} from './style'

import {
  GiBandit,
  GiSwapBag,
  GiHand,
} from "react-icons/gi"

import { TestData } from '../../../../Data/test'

const InventoryView = () => {
  return (
    <InventoryViewContainer>
      <ViewWrapper>

        <ViewContainer>

          <ViewHeader>
            <GiSwapBag />
            Inventário
          </ViewHeader>

          <ViewContents>

            <InventoryContents />

          </ViewContents>
        
        </ViewContainer>

      </ViewWrapper>
    </InventoryViewContainer>
  )
}

export default InventoryView

// ------------------- CONTEÚDO DA VIEW DO INVENTÁRIO

export const InventoryContents = () => {
  return (
    <>
      <InventoryUserInfo>
        <div className='user_info__header'>
          <div className='user_info__header__image'>
            <GiBandit />
          </div>
          <div className='user_info__header__info'>
            <p>hrysk_</p>
            <span><p>Nível:</p> 001</span>
          </div>
        </div>

        <div className='user_info__skills'>
          <div className='user_info__skills__skill'>
            <p>Saúde</p>
            <p>200 <b>pts</b></p>
          </div>
          <div className='user_info__skills__skill'>
            <p>Resistência</p>
            <p>200 <b>pts</b></p>
          </div>
          <div className='user_info__skills__skill'>
            <p>Força</p>
            <p>200 <b>pts</b></p>
          </div>
          <div className='user_info__skills__skill'>
            <p>Inteligência</p>
            <p>200 <b>pts</b></p>
          </div>
          <div className='user_info__skills__skill'>
            <p>Furtividade</p>
            <p>200 <b>pts</b></p>
          </div>
        </div>
      </InventoryUserInfo>

      <InventoryEquipment>

        <InventoryEquipmentClothes />
        <InventoryEquipmentWeapons />

      </InventoryEquipment>

      <InventoryItems>
        <div className='inventory__items__container'>
          <div className='inventory__items__header'>
            <p>Na mochila</p>
          </div>

          <div className='inventory__items'>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
            <div className='inventory__item'>
              <GiSwapBag />
            </div>
          </div>
        </div>
      </InventoryItems>
    </>
  )
}

// ---------- Função que retorna as Categorias de Equipamentos

export const InventoryEquipmentClothes = () => {

  const clothes = {
    head: TestData.inventory.clothes.head[0],
    chest: TestData.inventory.clothes.chest[1],
    legs: TestData.inventory.clothes.legs[1],
    foot: TestData.inventory.clothes.foot[1],
    shield: TestData.inventory.clothes.shield[1],
    backpack: TestData.inventory.clothes.backpack[1],
  }

  return (
    <div className='equipment__container' id='clothes'>
      <div className='equipment__header'>
        <p>Roupas</p>
      </div>
      <div className='equipment__items'>
        <div className='equipment__items__item active'>
          {/* <GiBrodieHelmet /> */}
          {clothes.head.icon}
        </div>
        <div className='equipment__items__item active'>
          {/* <GiChestArmor /> */}
          {clothes.chest.icon}
        </div>
        <div className='equipment__items__item active'>
          {/* <GiArmoredPants /> */}
          {clothes.legs.icon}
        </div>
        <div className='equipment__items__item active'>
          {/* <GiChelseaBoot /> */}
          {clothes.foot.icon}
        </div>
        <div className='equipment__items__item active'>
          {/* <GiRoundShield /> */}
          {clothes.shield.icon}
        </div>
        <div className='equipment__items__item active'>
          {/* <GiBackpack /> */}
          {clothes.backpack.icon}
        </div>
      </div>
    </div>
  )
}

export const InventoryEquipmentWeapons = () => {

  const weapons = {
    primary: TestData.inventory.weapons.primary[0],
    secondary: TestData.inventory.weapons.secondary[0],
  }

  return (
    <div className='equipment__weapons'>

      <div className='equipment__container' id='primary'>
        <div className='equipment__header'>
          <p>Arma Primária</p>
        </div>
        <div className='equipment__items'>
          <div className='equipment__items__item active'>
            {/* <GiMachineGunMagazine /> */}
            {weapons.primary.icon}
          </div>
          <div className='equipment__items__item active'>
            {/* <GiMachineGunMagazine /> */}
            {weapons.primary.extraPrimary}
          </div>
          <div className='equipment__items__item active'>
            {/* <GiMachineGunMagazine /> */}
            {weapons.primary.extraSecondary}
          </div>
        </div>
      </div>

      <div className='equipment__container' id='secondary'>
        <div className='equipment__header'>
          <p>Arma Secundária</p>
        </div>
        <div className='equipment__items'>
          <div className='equipment__items__item active'>
            {/* <GiMachineGunMagazine /> */}
            {weapons.secondary.icon}
          </div>
          <div className='equipment__items__item active'>
            {/* <GiMachineGunMagazine /> */}
            {weapons.secondary.extraPrimary}
          </div>
          <div className='equipment__items__item active'>
            {/* <GiMachineGunMagazine /> */}
            {weapons.secondary.extraSecondary}
          </div>
        </div>
      </div>

      <div className='equipment__container' id='hands'>
        <div className='equipment__header'>
          <p>Em mãos</p>
        </div>
        <div className='equipment__items'>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
          <div className='equipment__items__item'>
            <GiHand />
          </div>
        </div>
      </div>
    </div>
  )
}
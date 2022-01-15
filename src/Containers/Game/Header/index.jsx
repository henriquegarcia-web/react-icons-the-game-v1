import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  HeaderPlayerInfo,
  HeaderPlayerNumeraries,
  HeaderNavbar
} from './style'

import { 
  GiDeadHead,
  GiBandana,
  GiBandit,
  GiBowieKnife,
  GiButterflyKnife,
  GiColtM1911,
  GiDesertEagle,
  GiFamas,
  GiAk47,
  GiMedalSkull,
  GiStarMedal,
  GiSteelwingEmblem,
  GiAbstract007,
  GiMoneyStack,
  GiGems,
  GiFireGem,
  GiSevenPointedStar,
  GiRank3,
  GiBanknote,
  GiCash,
  GiBigGear, // Settings
  GiCrownCoin,

} from "react-icons/gi"

import { 
  FiSettings,
  FiUser
} from "react-icons/fi"

const Header = () => {
  return (
    <HeaderContainer>

      <div className='wrapper'>

        <HeaderPlayerInfo>
          <div className='user_info__avatar'>
            <GiBandana />
          </div>
          <div className='user_info__infos'>
            <div className='user_info__infos__nick'>
              <p>hrysk_</p>
              <div className='user_info__infos__level'>
                <p>001</p>
              </div>
            </div>
            <div className='user_info__infos__emblems '>
              <div className='emblem'>
                <GiRank3 />
              </div>
              <div className='emblem'>
                {/* <GiAbstract007 /> */}
              </div>
              <div className='emblem'>
                {/* <GiSteelwingEmblem /> */}
              </div>
              <div className='emblem'>
                {/* <GiSteelwingEmblem /> */}
              </div>
            </div>
          </div>
        </HeaderPlayerInfo>

        <HeaderPlayerNumeraries>
          <div className='header__numeraries__cash'>
            <GiCash />
            <p>1.000</p>
          </div>
          <div className='header__numeraries__gems'>
            <GiCrownCoin />
            <p>10</p>
          </div>
          <div className='header__numeraries__points'>
            <GiSevenPointedStar />
            <p>0</p>
          </div>
        </HeaderPlayerNumeraries>

        <NavbarController />

      </div>

    </HeaderContainer>
  )
}

export default Header

// ----------------------- 

export const NavbarController = () => {

  const [menu, setActive] = useState(0)

  return (
    <HeaderNavbar>
      <ul>

        <li>
          <Link
            to='/game/inventory'
            className={menu == 0 ? 'active' : ''}
            onClick={() => {
              setActive(0)
            }}>
            <p>Inventário</p>
          </Link>
        </li>

        <li>  
          <Link
            to='/game/store'
            className={menu == 1 ? 'active' : ''}
            onClick={() => {
              setActive(1)
            }}>
            <p>Loja</p>
          </Link>
        </li>

        <li>
          <Link
            to='/game/duels'
            className={menu == 2 ? 'active' : ''}
            onClick={() => {
              setActive(2)
            }}>
            <p>Duelos</p>
          </Link>
        </li>

        <li>
          <Link
            to='/game/missions'
            className={menu == 3 ? 'active' : ''}
            onClick={() => {
              setActive(3)
            }}>
            <p>Missões</p>
          </Link>
        </li>

        <li>
          <Link
            to='/game/user'
            className={menu == 4 ? 'active' : ''}
            onClick={() => {
              setActive(4)
            }}>
            <FiUser />
          </Link>
        </li>

        <li>
          <Link
            to='/game/settings'
            className={menu == 5 ? 'active' : ''}
            onClick={() => {
              setActive(5)
            }}>
            <FiSettings />
          </Link>
        </li>

      </ul>
    </HeaderNavbar>
  )
}

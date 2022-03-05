import React from 'react'

import {
  ViewWrapper,
  ViewContainer,
  ViewHeader,
  ViewContents
} from '../../../../GlobalStyles'

import {
  StoreViewContainer
} from './style'

import { 
  GiShop 
} from "react-icons/gi"

const StoreView = () => {
  return (
    <StoreViewContainer>
      <ViewWrapper>

        <ViewContainer>
          
          <ViewHeader>
            <GiShop />
            Loja
          </ViewHeader>

          <ViewContents>

          </ViewContents>

        </ViewContainer>

      </ViewWrapper>
    </StoreViewContainer>
  )
}

export default StoreView
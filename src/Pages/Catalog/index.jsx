import React, { useState } from 'react'

import { 
  CatalogContainer ,
  CatalogCategoyContainer
} from './style'

// ------------------------ 
import { Head_CatalogData } from '../../Data/Catalog/Clothes/head'
import { Chest_CatalogData } from '../../Data/Catalog/Clothes/chest'
import { Legs_CatalogData } from '../../Data/Catalog/Clothes/legs'
import { Foot_CatalogData } from '../../Data/Catalog/Clothes/foot'
import { Shields_CatalogData } from '../../Data/Catalog/Clothes/shields'
import { Backpacks_CatalogData } from '../../Data/Catalog/Clothes/backpacks'

import { Skins_CatalogData } from '../../Data/Catalog/Others/skins'

import { PrimaryWeapons_CatalogData } from '../../Data/Catalog/Weapons/primary'
import { SecondaryWeapons_CatalogData } from '../../Data/Catalog/Weapons/secondary'
import { Others_CatalogData } from '../../Data/Catalog/Others/others'
import { Emblems_CatalogData } from '../../Data/Catalog/Others/emblems'
import { Resources_CatalogData } from '../../Data/Catalog/Others/resources'
import { Ambients_CatalogData } from '../../Data/Catalog/Scenario/ambients'
import { Animals_CatalogData } from '../../Data/Catalog/Scenario/animals'
import { Boxes_CatalogData } from '../../Data/Catalog/Scenario/boxes'
import { Enemies_CatalogData } from '../../Data/Catalog/Scenario/enemies'
import { Food_CatalogData } from '../../Data/Catalog/Scenario/food'
import { Tools_CatalogData } from '../../Data/Catalog/Scenario/tools'
import { Effects_CatalogData } from '../../Data/Catalog/Weapons/effects'
import { Vehicles_CatalogData } from '../../Data/Catalog/Others/vehicles'
import { Skills_CatalogData } from '../../Data/Catalog/Others/skills'
import { Melee_CatalogData } from '../../Data/Catalog/Weapons/melee'
import { Sentries_CatalogData } from '../../Data/Catalog/Weapons/sentries'
import { Throwables_CatalogData } from '../../Data/Catalog/Weapons/throwables'
// ------------------------ 

const Catalog = () => {
  return (
    <CatalogContainer>
      <div className='catalog__wrapper'>
        
        <CatalogCategoy data={Head_CatalogData} />
        <CatalogCategoy data={Chest_CatalogData} />
        <CatalogCategoy data={Legs_CatalogData} />
        <CatalogCategoy data={Foot_CatalogData} />
        <CatalogCategoy data={Shields_CatalogData} />
        <CatalogCategoy data={Backpacks_CatalogData} />

        <CatalogCategoy data={PrimaryWeapons_CatalogData} />
        <CatalogCategoy data={SecondaryWeapons_CatalogData} />
        <CatalogCategoy data={Melee_CatalogData} />

        <CatalogCategoy data={Skins_CatalogData} />
        <CatalogCategoy data={Enemies_CatalogData} />
        
        <CatalogCategoy data={Resources_CatalogData} />

        <CatalogCategoy data={Others_CatalogData} />
        <CatalogCategoy data={Emblems_CatalogData} />
        <CatalogCategoy data={Ambients_CatalogData} />
        <CatalogCategoy data={Animals_CatalogData} />
        <CatalogCategoy data={Boxes_CatalogData} />
        <CatalogCategoy data={Food_CatalogData} />
        <CatalogCategoy data={Tools_CatalogData} />
        <CatalogCategoy data={Effects_CatalogData} />
        <CatalogCategoy data={Vehicles_CatalogData} />
        <CatalogCategoy data={Skills_CatalogData} />
        <CatalogCategoy data={Sentries_CatalogData} />
        <CatalogCategoy data={Throwables_CatalogData} />

      </div>
    </CatalogContainer>
  )
}

export default Catalog

// ------------------- CATÁLOGO - Categoria

const CatalogCategoy = ({ data }) => {

  const [itemDescription, setItemDescription] = useState('');

  return (
    <CatalogCategoyContainer>

      <div className='catalog_container__header'>
        <p>{data.categoryName}</p>

        <div className='catalog_container__header__hover'>
          <p>{itemDescription}</p>
        </div>
      </div>

      <div className='catalog_container__items_container'>
        <div className='catalog_container__items_wrapper'>

          {data.items.map(({ id, itemName, icon }) => {
            return (
              <div 
                className='catalog_container__item' 
                key={id}
                onMouseEnter={() => setItemDescription(itemName)}
                onMouseLeave={() => setItemDescription('')}
                >

                {icon}
              </div>
            )
          })}

        </div>
      </div>

    </CatalogCategoyContainer>
  )
}
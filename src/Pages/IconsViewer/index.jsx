import React from 'react'

import {
  IconsViewerContainer
} from './style'

import {
  GiAmericanFootballHelmet,
  GiAstronautHelmet,
  GiArchitectMask,
  GiBabyFace,
  GiBalaclava,
} from "react-icons/gi"

const IconsViewer = () => {

  return (
    <IconsViewerContainer>

      <div className='viewer__register viewer'>   
        <form action="">
          <input type='text' placeholder='Nome do ícone' />
          <select id="category">
            <optgroup label="Categoria">
              <option value="clothes">Roupas</option>
              <option value="weapons">Armas</option>
              <option value="skills">Habilidades</option>
            </optgroup>
          </select>
          <input type="submit" value="Cadastrar" />
        </form>

        <div className='viewer__tester'>
          
        </div>
      </div>
      
      <div className='viewer__finder viewer'>        
      </div>

    </IconsViewerContainer>
  )
}

export default IconsViewer
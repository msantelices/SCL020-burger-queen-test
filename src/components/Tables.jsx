import React from 'react'
import { withRouter } from 'react-router-dom'

const Tables = ({history}) => {

    const goToMenu = () => {
        history.push('/menu')
    }

  return (
    <div className='containerOrder'>
            <div className='textSelectTable'>Selecciona la mesa</div>
            <div className='containerCircles'>
                <button type="button" className='circleTable boton-color' onClick={()=>goToMenu()}>
                    <div className='tableNumbers'>1</div>
                </button>
                <button type="button" className='circleTable boton-color'onClick={()=>goToMenu()}>
                    <div className='tableNumbers'>2</div>
                </button>
                <button type="button" className='circleTable boton-color' onClick={()=>goToMenu()}>
                    <div className='tableNumbers'>3</div>
                </button>
                <button type="button" className='circleTable boton-color' onClick={()=>goToMenu()}>
                    <div className='tableNumbers'>4</div>
                </button>
            </div>
        </div>
  )
}

export default withRouter(Tables)
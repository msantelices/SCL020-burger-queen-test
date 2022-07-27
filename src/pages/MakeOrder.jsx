import React from 'react'

const MakeOrder = () => {
    return (
        <div className='containerOrder'>
            <div className='textSelectTable'>Selecciona la mesa</div>
            <div className='containerCircles'>
                <button type="button" className='circleTable boton-color'>
                    <div className='tableNumbers'>1</div>
                </button>
                <button type="button" className='circleTable boton-color'>
                    <div className='tableNumbers'>2</div>
                </button>
                <button type="button" className='circleTable boton-color'>
                    <div className='tableNumbers'>3</div>
                </button>
                <button type="button" className='circleTable boton-color'>
                    <div className='tableNumbers'>4</div>
                </button>
            </div>
        </div>
    )
}

export default MakeOrder
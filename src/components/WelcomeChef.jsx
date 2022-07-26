import React from 'react'
import ViewOrder from '../stickers/VIEW-ORDER.png'
import InKitchen from '../stickers/IN-KITCHEN.png'

const WelcomeChef = () => {

    // const viewOrderbtn = './stickers/VIEW-ORDER.png'

    return (
        <div className='containerbtnChef'>
            <div className='btnCheffunction'>
                <img src={ViewOrder} className="sticker-fit" />
            </div>
            <div className='textFunctionbtn'>VER PEDIDOS</div>
            <div className='btnCheffunction'>
                <img src={InKitchen} className="sticker-fit" />
            </div>
            <div className='textFunctionbtn'>EN COCINA</div>
        </div>
    )
}

export default WelcomeChef
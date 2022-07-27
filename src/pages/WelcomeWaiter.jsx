import React from 'react'
import ViewOrder from '../stickers/VIEW-ORDER.png'
import MakeOrder from '../stickers/STICKER-CREAT-ORDER.png'

const WelcomeWaiter = () => {
    return (
        <div className='containerbtn'>
            <div className='btnCheffunction'>
                <img src={ViewOrder} className="sticker-fit" />
            </div>
            <div className='textFunctionbtn'>VER PEDIDOS</div>
            <div className='btnCheffunction'>
                <img src={MakeOrder} className="sticker-fit" />
            </div>
            <div className='textFunctionbtn'>REALIZAR PEDIDO</div>
        </div>
    )
}

export default WelcomeWaiter
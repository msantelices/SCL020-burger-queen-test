import React from 'react'
import ViewOrder from '../stickers/VIEW-ORDER.png'
import MakeOrder from '../stickers/STICKER-CREAT-ORDER.png'
import { withRouter } from 'react-router-dom'

const WelcomeWaiter = (props) => {

    const goToMakeOrder = ()=>{
        props.history.push('/makeorder')
    }

    return (
        <div className='containerbtn'>
            <div className='btnCheffunction' onClick={()=>goToMakeOrder()} >
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

export default withRouter(WelcomeWaiter)
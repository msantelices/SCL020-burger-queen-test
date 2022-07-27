import React from 'react'
import { withRouter } from 'react-router-dom'
import ViewOrder from '../stickers/VIEW-ORDER.png'
import InKitchen from '../stickers/IN-KITCHEN.png'

const WelcomeChef = (props) => {

    const goTOKitchenOrders = () => {
        props.history.push('/inKitchen')
    }

    return (
        <div className='containerbtn'>
            <div className='btnCheffunction'>
                <img src={ViewOrder} className="sticker-fit" />
            </div>
            <div className='textFunctionbtn'>VER PEDIDOS</div>
            <div className='btnCheffunction' onClick={() => goTOKitchenOrders()}>
                <img src={InKitchen} className="sticker-fit" />
            </div>
            <div className='textFunctionbtn'>EN COCINA</div>

        </div>
    )
}

export default withRouter(WelcomeChef)
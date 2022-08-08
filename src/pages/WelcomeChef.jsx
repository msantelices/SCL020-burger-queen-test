import React from 'react'
import { withRouter } from 'react-router-dom'
import ViewOrder from '../stickers/VIEW-ORDER.png'
import InKitchen from '../stickers/IN-KITCHEN.png'

const WelcomeChef = ({history}) => {

    const goToSeeOrders = ()=>{
        
        history.push('/orderschef')
    }

    const goToKitchenOrders = () => {
        history.push('/inKitchen')
    }

    return (
        <div className='containerbtn'>
            <div className='btnCheffunction' onClick={()=> goToSeeOrders()}>
                <img src={ViewOrder} className="sticker-fit" />
                <div className='textFunctionbtn' >VER PEDIDOS</div>
            </div>
            <div className='btnCheffunction' onClick={() => goToKitchenOrders()}>
                <img src={InKitchen} className="sticker-fit" />
                <div className='textFunctionbtn'>EN COCINA</div>
            </div>
            

        </div>
    )
}

export default withRouter(WelcomeChef)
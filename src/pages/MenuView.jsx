import React from 'react'
import Menu from '../components/Menu'


const MenuView = ({setOrders, tableRegister}) => {
    // console.log(setOrders)
    return (
        <div className='AllConteinerMenu'>
            
           <Menu setOrders={setOrders} tableRegister={tableRegister} />
            
        </div>
    )
}

export default MenuView
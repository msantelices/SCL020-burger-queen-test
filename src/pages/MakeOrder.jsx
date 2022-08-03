import React from 'react'
import Tables from '../components/Tables'

const MakeOrder = ({setTableRegister}) => {
    
    return (
        <div className='containerOrder'>
            <Tables setTableRegister={setTableRegister}/>
        </div>
    )
}

export default MakeOrder
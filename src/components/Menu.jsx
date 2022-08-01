import React from 'react'
import menudata from '../menudata.json'
import Tables from './Tables'
import { useState } from 'react'

const Menu = () => {

    const drinks = menudata.filter((food) => {
        return food.type === 'drink'
    })
    const breakfasts = menudata.filter((food) => {
        return food.type === 'breakfast'
    })
    const lunchs = menudata.filter((food) => {
        return food.type === 'lunch'
    })

    // CONTADOR
    const [count, setCount] = useState(0)

    return (
        <main className='AllContainerMenu'>
            <div className='textMenuMenu'>MENU</div>
            <div className='textTablesMenu'>Mesa no se cuanto</div>
            <div className='containerMenu'>
                <li className='textTypesMenu'>Bebidas</li>
                <div className='containerOptionsMenu'>
                    {drinks.map(food => {
                        return <div className='containerPriceFoodCountMenu'>
                            <div className='textFoodNameMenu'>{food.name}</div>
                            <div key={food.id} className='textFoodNameMenu'>{food.price}</div>
                            <button className='buttonCountMenu'>-</button>
                            <spam className='textFoodNameMenu'>{count}</spam>
                            <button className='buttonCountMenu' key={food.id} onClick={() => {
                                if (food.id === food.id) {
                                    setCount(count + 1)
                                }
                            }}>+</button>
                        </div>
                    })}
                </div>
                <li className='textTypesMenu'>Desayunos</li>
                <div className='containerOptionsMenu'>
                    {breakfasts.map(food => {
                        return <div className='containerPriceFoodCountMenu'>
                            <div className='textFoodNameMenu'>{food.name}</div>
                            <div className='textFoodNameMenu'>{food.price}</div>
                            <button className='buttonCountMenu'>-</button>
                            <spam className='textFoodNameMenu'>0</spam>
                            <button className='buttonCountMenu'>+</button>
                        </div>
                    })}
                </div>
                <li className='textTypesMenu'>Otros Platos</li>
                <div className='containerOptionsMenu'>
                    {lunchs.map(food => {
                        return <div className='containerPriceFoodCountMenu'>
                            <div className='textFoodNameMenu'>{food.name}</div>
                            <div className='textFoodNameMenu'>{food.price}</div>
                            <button className='buttonCountMenu'>-</button>
                            <spam className='textFoodNameMenu'>0</spam>
                            <button className='buttonCountMenu'>+</button>
                        </div>
                    })}
                </div>
            </div>
            <div className='buttonNextMenu'>
                <button className="btn mrg-2">SIGUIENTE</button>
            </div>
        </main>
    )
}

export default Menu
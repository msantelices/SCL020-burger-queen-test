import React from 'react'
import menudata from '../menudata.json'

const Menu = () => {

    const drinks = menudata.filter((food)=>{
        return food.type === 'drink'
    })
    const breakfasts = menudata.filter((food)=>{
        return food.type === 'breakfast'
    })
    const lunchs = menudata.filter((food)=>{
        return food.type === 'lunch'
    })

    return (
        <div className='AllConteinerMenu'>
            <h1>Bebidas</h1>
            {drinks.map(food => {
                return  <div> 
         
                    <li>{food.name}</li>
                </div>  
            })}
            <h1>Desayunos</h1>
            {breakfasts.map(food => {
                return  <div> 
         
                    <li>{food.name}</li>
                </div>  
            })}
            <h1>Otros Platos</h1>
            {lunchs.map(food => {
                return  <div> 
         
                    <li>{food.name}</li>
                </div>  
            })}
            
            
        </div>
    )
}

export default Menu
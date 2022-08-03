import {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'


const Tables = ({history}) => {

    // const [tableName, setTableName] = useState([])

    // useEffect(() => {
    //     localStorage.setItem("tableId", JSON.stringify(tableName));
    //   }, [tableName]);


    const goToMenu = () => {
      
            // console.log("clickeando");
            // const getTableId = JSON.parse(localStorage.getItem("tableId"));
            // console.log("tablename en local", tableName);
            


            history.push('/menu')
    }

    


  return (
    <div className='containerOrder'>
            <div className='textSelectTable'>Selecciona la mesa</div>
            <div className='containerCircles'>
                <button type="button" className='circleTable boton-color' onClick={()=>goToMenu()}  value='1'>
                    <div className='tableNumbers'>1</div>
                </button>
                <button type="button" className='circleTable boton-color'onClick={()=>goToMenu()} value='2'>
                    <div className='tableNumbers'>2</div>
                </button>
                <button type="button" className='circleTable boton-color' onClick={()=>goToMenu()} value='3'>
                    <div className='tableNumbers'>3</div>
                </button>
                <button type="button" className='circleTable boton-color' onClick={()=>goToMenu()} value='4'>
                    <div className='tableNumbers'>4</div>
                </button>
            </div>
        </div>
  )
}

export default withRouter(Tables)
import React, { useState } from 'react'
import Navegador from './views/layout/navegador/Navegador'

import './app.css'
import ListCars from './views/pages/ListCars/ListCars'
import AddCar from './views/pages/AddCar/AddCar'

const app = () => {

  //Modificar el arrego de coches
  const [cars, setCars] = useState([])

  //Creamos el props

  return (
    <div>
      <Navegador />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <AddCar
              cars={cars}
              setCars={setCars} />
          </div>
            <div className='col-6'>
            <ListCars cars={cars}
              setCars={setCars}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default app




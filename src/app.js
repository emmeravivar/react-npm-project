import React from 'react'
import Navegador from './views/layout/navegador/Navegador'

import './app.css'
import ListCars from './views/pages/ListCars/ListCars'
import AddCar from './views/pages/AddCar/AddCar'

const app = () => {

  return (
    <div>
      <Navegador />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <AddCar />
          </div>
            <div className='col-6'>
              <ListCars />
            </div>
          </div>
      </div>
    </div>
  )
}

export default app




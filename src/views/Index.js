import React, {useState} from 'react'
import ListCars from './pages/ListCars/ListCars'
import AddCar from './pages/AddCar/AddCar'
import Navegador from './layout/navegador/Navegador'
import LoginSignup from './pages/Auth/LoginSignup'


const IndexCars = () => {

  //Modificar el arrego de coches
  const [cars, setCars] = useState([])

  //Creamos el props

  return (
    <div>
      <Navegador />
      <div className='container'>
        <div className='row'>
          <LoginSignup />
        </div>
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

export default IndexCars
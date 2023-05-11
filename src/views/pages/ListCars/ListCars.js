import React, { useState, useEffect } from 'react'
import './list-cars.css';
import coches from './data'


//Componente
const ListCars = ({ cars }) => {

  useEffect(() => {
    console.log('El componente ha sido recargado...')
    if (cars.length) {
      setCarList([...carList, cars[0]])
    }
  }, [cars]);


  const [carList, setCarList] = useState(coches)

  // 3 de 1 => capturar los eventos
  const handleRemoveCar = (id) => {
    const newList = carList.filter(item => item.id !== id )
    setCarList(newList);
    }

  const handleSortDesList = (marca) => {
    const newList = [...carList].sort((a, b) => (a[marca] > b[marca] ? 1 : -1));
    setCarList(newList);
  }
        
  const handleViewCar = () => console.log('Aquí leemos el id que luego con router pasaremos por query params')

  // 2 Parte => Pintamos el componente (render al DOM)
  return (
    <div className='list-cars'>
      <h2>Listado de Coches en Venta</h2>

      <div className='button-order'>
          <span onClick={() => handleSortDesList()}>- ordenar + </span>
      </div>
      
      {
        /* Esto es código JS porque está dentro de los paréntesis */
        // Uitlizaré la función map
        carList.map(
          (item, i) =>  
            <div className='car-item row d-flex align-items-center' key={i} >
              <div className='col-1 item-id'>
                {item.id}
              </div>
              <div className='col-2'>
                <img className='car-item-img col-2' src={item.foto} alt="" />
              </div>
              <div className='col-2'>
                {item.modelo}
              </div>
              <div className='col-2'>
                {item.marca}
              </div>
              <div className='col-1'>
                {item.anio}
              </div>
              <div className='col-2'>
                <a href="#" onClick={() => handleRemoveCar(item.id)}>Eliminar</a>
              </div>
              <div className='col-2'>
                <a href="#" onClick={handleViewCar}>Ver</a>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default ListCars
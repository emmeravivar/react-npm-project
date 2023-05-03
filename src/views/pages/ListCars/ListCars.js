import React, { useState } from 'react'
import './list-cars.css';

//Datos
const data = [
      {
        id:1,
              marca: "Toyota",
              modelo: "Corolla",
              anio: 2020,
              foto: "https://upload.wikimedia.org/wikipedia/commons/c/c2/2021_Toyota_Corolla_SE_Hatchback.jpg"
            },
      {
              id:2,
              marca: "Honda",
              modelo: "Civic",
              anio: 2019,
              foto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/199431-honda-muestra-su-renovado-civic-type-r-en-el-tokyo-auto-salon-2020-1578660923.jpg"
            },
            {
              id:3,
              marca: "Ford",
              modelo: "Mustang",
              anio: 2021,
              foto: "https://www.gpas-cache.ford.com/guid/35b0f34d-0ff8-3e75-b278-3a38cb39a63d.png"
            }
          ];
//Componente
const ListCars = () => {
    const [carList, setCarList] = useState(data)


    // 3 de 1 => capturar los eventos
  const handleRemoveCar = (id) => {
        console.log(id)
        const newList = carList.filter(item => item.id !== id )
          console.log(newList)
        setCarList(newList);
        }

  const handleSortDesList = (id) => {
    const newList = [...carList].sort((a, b) => (a[id] > b[id] ? 1 : -1));
    setCarList(newList);

  }
        
        const handleViewCar = () => console.log('Aquí leemos el id que luego con router pasaremos por query params')

  // 2 Parte => Pintamos el componente (render al DOM)
  return (
    <div className='list-cars'>
      <h2>Listado de Coches en Venta</h2>

      <div className='button-order' onClick={() => handleSortDesList()}>
          <span>Ordenar descendente</span>

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
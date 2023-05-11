import React, { useState } from 'react'
import './add-car.css';

const AddCar = ({ cars, setCars }) => {

  //Id generator
  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return date + random
  }



  //Crear los states
  const [formCar, setFormCar] = useState({
    modelo: '',
    marca: '',
    anio: '',
    foto: '',
    id: idGenerator()
  })

  //Creamos el state para mostrar el error 
  const [error, setError] = useState(false)

  //Capturar el evento change => para almacenar su valor
  const handleChange = e => {

    //Capturar el value y el name del input
    const { name, value } = e.target

    //Crear una copia del objeto formCar y con el name (modelo) su valor será el de input
    const valueFormCar = { ...formCar, [name]:value} //[name]:value

    //Modificamos el state
    setFormCar(valueFormCar)

  };

  
  const handleSubmit = e => {
    e.preventDefault();
    
    const { modelo, marca} = formCar
    //Validación del formulario para todos los campos obligatorios
    if ([modelo, marca, anio].includes('')) {
      console.log('Hay al menos un campo vacio')
      setError(true)
    } else {
      console.log('Están todos llenos')
    }

    // Aquí agregamos la lógica => llamamos al useState de App mediante props y lo modificamos con nuestras variables
    setCars([...cars, formCar])
    
    //Reniciar el formulario ( limpiar los campos del value )
    setFormCar({
      modelo: '',
      marca: '',
      anio: '',
      foto: ''
    });
  };

  return (
    <div className='add-car'>
      <h2>Añadir un Coche (Carro)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Modelo</label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            placeholder='Modelo de coche'
            value={formCar.modelo}
            onChange={handleChange} />
        </div>
        <div>
          <label>Marca</label>
          <input type="text" id="marca" name="marca" value={formCar.marca}
            onChange={handleChange} placeholder='Marca' />
          </div>
        <div>
          <label>Año</label>
          <input type="number" id="anio" name="anio" value={formCar.anio}
            onChange={handleChange} placeholder='Año' />
        </div>
        <div>
          <label>Adjuntar foto</label>
          <input type="file" id="name" name="foto" value={formCar.foto}
            onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" className='btn btn-secondary'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default AddCar
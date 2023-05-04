import React, { useState } from 'react'
import './add-car.css';

const AddCar = ({ cars, setCars }) => {
  
  //Crear los states
  const [formCar, setFormCar] = useState({
    modelo: '',
    marca: '',
    anio: '',
    foto: ''
  })



  //Capturar el evento change => para almacenar su valor
  const handleChange = e => {

    //Capturar el value y el name del input
    const { name, value } = e.target

    //Crear una copia del objeto formCar y con el name (modelo) su valor será el de input
    const valueFormCar = { ...formCar, [name]:value} //[name]:value

    //Modificamos el state
    setFormCar(valueFormCar)

  };

// Manejar el file
  const handleImageUpload = e => {
    const { name, value } = e.target
    const file = e.target.files[0];
    console.log(file, name, value)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormCar( reader.result);
    };
  };
  
  
  
  const handleSubmit = e => {
    e.preventDefault();

    // Aquí agregamos las lógica => llamamos al useState de App mediante props y lo modificamos con nuestras variables
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
            onChange={handleImageUpload}/>
        </div>
        <div>
          <button type="submit" className='btn btn-secondary'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default AddCar
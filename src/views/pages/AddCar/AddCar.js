import React from 'react'
import './add-car.css';

const AddCar = () => {
  return (
    <div className='add-car'>
      <form>
        <div>
          <label>Modelo</label>
          <input type="text" name="modelo" value="" placeholder='Modelo' />  
        </div>
        <div>
          <label>Marca</label>
          <input type="text" name="marca" value="" placeholder='Marca' />
          </div>
        <div>
          <label>Año</label>
          <input type="date" name="ano" value="" placeholder='Año' />
        </div>
        <div>
          <label>Adjuntar foto</label>
          <input type="file" name="foto" />
        </div>
        <div>
          <button type="submit" className='btn btn-secondary'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default AddCar
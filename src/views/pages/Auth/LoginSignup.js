import React, { useState } from 'react'
import './login.css';

const LoginSignup = () => {

    //1. Creamos los states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    //2. Modificar nuestro/s states
    const handleEmailChange = e => {
        setEmail(e.target.value)

    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    //3. Enviar los datos
    const handleSubmit = (e) => {
        e.preventDefault();


        // Validar
        validateEmail()
        validatePassword()
        cleanFields()

        //Limpiar el campo y el campo error
    
        const nuevoEnvio = {
            email,
            password
        }

        console.log('Enviando datos....', nuevoEnvio)
        // Enviar
    }

    //4. Validación
    const validateEmail = () => {

        const emailRegex = /^\S+@\S+\.\S+$/;

        //Comprobar que el campo no viene vacio
        if (email === '') {
           return setEmailError('El email viene vacio')
        } 


        //Comprobar que el campo viene correcto
        if (!emailRegex.test(email)) {
            return    setEmailError('Compruebe su email')
        } 


    }

    const validatePassword = () => {
        console.log('Validando Password')
    }

    const cleanFields = () => {
        setEmail('')
    }

    return (
        <div className='login'>
            <h2>Loguearse o Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="mail" value={email} onChange={handleEmailChange}/>
                    <span style={{ color: 'red' }}>{ emailError }</span>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                    <span style={{ color: 'red' }}>{ passwordError }</span>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginSignup
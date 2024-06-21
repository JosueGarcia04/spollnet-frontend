import React, { useState } from 'react';
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import {Input} from '../../components/forms/input'
import {Label} from '../../components/forms/label'
import {Forgot} from '../../components/forms/Sign up/forgotPassword'
import {LinkRegister} from '../../components/forms/login/linkForRegister'
import RegisterButton from '../../components/forms/Sign up/registerButton'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const handleSubmit =  async (e) => {
      e.preventDefault();
      console.log(mail,contra)

      try{
        const response = await axios.post('http://localhost:5000/login',{
          email: mail,
          password: contra 
        });
        console.log(response.data);
        if (response.data.msg) {
          Swal.fire({
            title: "¡Bien!",
            text: "Haz iniciado sesión",
            icon: "success"
          })
        } else {
          alert(response.data.msg);
        }
      }catch(error){
        Swal.fire({
          icon: "error",
          title: "Algo salio mal",
          text: 'Error al iniciar sesion', error,
        });
      }
    } 
    return (
        <>
        <Navbar/>
            <div class=" h-screen bg-black flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
   
    <form onSubmit={handleSubmit}>
      <div class="mb-4 text-center font-bold">
        <Label htmlFor="emailAdress">Correo electronico </Label>
        <Input
            id='emailAdress'
            name='email'
            type='email'
            required
            value={mail} onChange={(e) => setEmail(e.target.value)}
        /> 
      </div>
      <div class="mb-4 text-center font-bold">
        <Label htmlFor="password">Contraseña </Label>
        <Input
            id='password'
            name='password'
            type='password'
            required
            value={contra} onChange={(e) => setPassword(e.target.value)}
        /> 
      </div>
      <div class="mt-6 text-center">
        <Forgot/>
      </div>
      <div class="mt-6">
        <RegisterButton text="Iniciar sesión"/>
      </div>
      <div class="mt-6 text-center">
        <LinkRegister/>
      </div>
    </form>
  </div>
</div>
<Footer/>
        </>

    );
}

export default Login
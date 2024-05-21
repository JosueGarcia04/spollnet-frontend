import React from 'react'
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import {Input} from '../../components/forms/input'
import {Label} from '../../components/forms/label'
import {Forgot} from '../../components/forms/forgotPassword'
import {LinkRegister} from '../../components/forms/linkForRegister'
import RegisterButton from '../../components/forms/registerButton'

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log(data);
    };
    return (
        <>
        <Navbar/>
            <div class="w-full min-h-screen bg-black flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
   
    <form>
      <div class="mb-4 text-center font-bold">
        <Label htmlFor="emailAdress">Correo electronico </Label>
        <Input
            id='emailAdress'
            name='email'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        /> 
      </div>
      <div class="mb-4 text-center font-bold">
        <Label htmlFor="password">Contraseña </Label>
        <Input
            id='password'
            name='password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        /> 
      </div>
      <div class="mt-6 flex items-center justify-between">
        <Forgot/>
      </div>
      <div class="mt-6">
        <RegisterButton/>
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
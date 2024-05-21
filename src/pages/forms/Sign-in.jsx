import React, { useState } from 'react';
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import {Input} from '../../components/forms/input'
import {Label} from '../../components/forms/label'
import RegisterButton from '../../components/forms/registerButton'

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        level: '',
        speciality: '',
        identify: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
    };

    return(
        <>
    <Navbar/>
    <div className="bg-black h-screen">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md">
        <h2 class="mb-12 text-center text-5xl font-extrabold text-[#E31FAE]">Bienvenido.</h2>
            <form className="mt-10 border border-white p-10 rounded-lg">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div className="text-center font-bold">
                        <Label htmlFor="name">Nombre completo </Label>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-center font-bold">
                        <Label htmlFor="emailAdress">Correo electronico </Label>
                        <Input
                            id='emailAdress'
                            name='email'
                            type='email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="level">Nivel educativo </Label>
                        <Input
                            id='level'
                            name='level'
                            type='text'
                            required
                            value={formData.level}
                            onChange={handleChange}
                        />  
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="speciality">Especialidad</Label>
                        <Input
                            id='speciality'
                            name='speciality'
                            type='text'
                            required
                            value={formData.speciality}
                            onChange={handleChange}
                        />  
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="identify">Carnet </Label>
                        <Input
                            id='identify'
                            name='identify'
                            type='text'
                            required
                            value={formData.identify}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className='text-center font-bold'>
                    <Label htmlFor="password">Contraseña </Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />  
                    </div>
                </div>
                <RegisterButton/>
            </form>
        </section>
    </div>
    <Footer/>
</>

    );
}

export default SignIn;
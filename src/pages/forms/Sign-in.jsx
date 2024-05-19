import React from 'react'
const SignIn = () => {
    return(
        <>
            <div className="bg-black h-screen">
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md ">
        <h2 className="text-lg text-center font-bold text-[#E31FAE]">Registrate</h2>
        
        <form className="mt-10 border border-white p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div className="text-center font-bold" >
                    <label className="text-[#E31FAE]" htmlFor="completeName">Nombre Completo</label>
                    <input id="completeName" type="text" className="block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border border-white" />
                </div>

                <div className="text-center font-bold" >
                    <label className="text-[#E31FAE]" htmlFor="emailAdress">Correo institucional</label>
                    <input id="emailAdress" type="email" className="block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border border-white" />
                </div>

                <div className="text-center font-bold" >
                    <label className="text-[#E31FAE]" htmlFor="level">Nivel educativo</label>
                    <input id="level" type="text" className="block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border border-white" />
                </div>

                <div className="text-center font-bold" >
                    <label className="text-[#E31FAE]" htmlFor="speciality">Especialidad</label>
                    <input id="speciality" type="text" className="block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border border-white" />
                </div>

                
                <div className="text-center font-bold" >
                    <label className="text-[#E31FAE]" htmlFor="identify">Carnét</label>
                    <input id="identify" type="text" className="block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border border-white" />
                </div>

                <div className="text-center font-bold" >
                    <label className="text-[#E31FAE]" htmlFor="identify">Contraseña</label>
                    <input id="identify" type="text" className="block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border border-white" />
                </div>
                
            </div>

            <div className="flex justify-end mt-6">
                <button className="rounded-md bg-[#380B99] px-3.5 w-full py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrate</button>
            </div>
        </form>
    </section>
            </div>
        </>
    );
}

export default SignIn;
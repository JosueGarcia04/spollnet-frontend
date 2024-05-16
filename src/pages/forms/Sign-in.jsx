import React from "react"
const SignIn = () => {
    return(
        <>
            <div className="bg-black h-screen">
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md ">
        <h2 className="text-lg text-center font-bold capitalize text-[#E31FAE]">Account settings</h2>
        
        <form className="mt-10">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Nombre Completo</label>
                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-[#E31FAE] focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Correo Electrónico</label>
                    <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Nivel Educativo</label>
                    <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Especialidad</label>
                    <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Carnet</label>
                    <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Contraseña</label>
                    <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="rounded-md bg-[#380B99] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrate</button>
            </div>
        </form>
    </section>
            </div>
        </>
    );
}

export default SignIn;
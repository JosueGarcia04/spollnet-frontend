import React from 'react'

export default function Id (){
    return(
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 my-8">
            <div class="flex flex-col items-center max-w-sm">
            <div class=" [background-image:url('src/assets/id.png')] bg-cover bg-center
                bg-gray-300 h-64 w-full rounded-lg shadow-md"></div>
            <div class="w-2/3 bg-black -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div class="py-2 text-center font-bold tracking-wide">Carnét de estudiante</div>
                <div class="flex items-center justify-between py-2 px-3 bg-[#380B99]">
                <h1 class="text-white font-bold text-center ">Importante para la identificación del votante</h1>
                </div>
            </div>
            </div>
            <div class="flex flex-col items-center max-w-sm">
            <div class=" [background-image:url('src/assets/registro.png')] bg-cover bg-center
                bg-gray-300 h-64 w-full rounded-lg shadow-md"></div>
            <div class="w-2/3 bg-black -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div class="py-2 text-center font-bold tracking-wide">Registro del estudiante</div>
                <div class="flex items-center justify-between py-2 px-3 bg-[#380B99]">
                <h1 class="text-white font-bold text-center ">Importante para la identificación del votante</h1>
                </div>
            </div>
            </div>
        </div>
    );
}
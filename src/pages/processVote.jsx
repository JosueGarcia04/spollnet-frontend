import React from 'react';
import Footer from '../components/footer';

const Process = () => {
    return (
        <>
            <div className="bg-black text-white min-h-screen flex flex-col items-center">
                <header className="bg-black text-[#E31FAE] py-4 w-full">
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold text-center">Proceso de Votación para Estudiantes</h1>
                    </div>
                </header>
                <main className="container mx-auto mt-8 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Paso 1 */}
                        <div className="border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#E31FAE] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">1</div>
                                <h2 className="text-3xl font-semibold ml-4 text-white">Registro de Estudiantes</h2>
                            </div>
                            <p className="text-white">
                                Todos los estudiantes deben registrarse utilizando su ID estudiantil y proporcionar la información necesaria para el proceso de votación.
                            </p>
                        </div>

                        {/* Paso 2 */}
                        <div className="border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#E31FAE] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">2</div>
                                <h2 className="text-3xl font-semibold ml-4 text-white">Verificación de Identidad</h2>
                            </div>
                            <p className="text-white">
                                Los estudiantes deben verificar su identidad presentando un documento de identificación válido en el punto de verificación asignado.
                            </p>
                        </div>

                        {/* Paso 3 */}
                        <div className=" border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#E31FAE] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">3</div>
                                <h2 className="text-3xl font-semibold ml-4 text-white">Emisión del Voto</h2>
                            </div>
                            <p className="text-white">
                                Una vez verificada la identidad, los estudiantes pueden proceder a emitir su voto en la urna designada o a través del sistema de votación en línea.
                            </p>
                        </div>

                        {/* Paso 4 */}
                        <div className="border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#E31FAE] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">4</div>
                                <h2 className="text-3xl font-semibold ml-4 text-white">Confirmación del Voto</h2>
                            </div>
                            <p className="text-white">
                                Después de emitir el voto, los estudiantes recibirán una confirmación de que su voto ha sido registrado correctamente en el sistema.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Process;
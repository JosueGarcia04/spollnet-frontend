import React from 'react';

export default function ReadyToVote() {
    return (
        <div
            data-aos="fade-up"
            className="bg-[#141414] bg-[url('public/foto1.jpg')] bg-cover bg-center bg-fixed relative flex flex-col md:flex-row justify-center md:justify-around items-center h-auto md:h-[16.4rem]"
        >
            <div className="lg:flex lg:justify-center items-center md:flex">
                <div
                    data-aos="fade-up"
                    className="flex flex-col lg:w-[700px] md:pl-10 justify-center items-center md:items-center lg:mt-0 lg:mb-0 mt-10 md:mt-0 text-center md:text-left flex-1 rounded-lg"
                >
                    <p
                        data-aos="fade-up"
                        className="text-white leading-relaxed mb-7 text-center text-3xl md:text-3xl"
                    >
                        <strong>¿Estás listo? </strong> para hacer <strong>tu voto realidad.</strong>
                    </p>
                    <button
                        className="transform duration-300 hover:scale-105 md:0 lg:mt-0 text-xl inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 px-4 py-2 text-white shadow-xl md:w-[7.5rem] select-none hover:opacity-90 hover:bg-primary h-[2.9375rem] bg-[#5F37EF] rounded-full border border-white w-[13rem]"
                        type="button"
                    >
                        Vota ya
                    </button>
                </div>
                <div
                    data-aos="fade-up"
                    className="flex justify-center lg:justify-start flex-1"
                >
                    <img
                        src="/aguilita.png"
                        alt="WooCommerce"
                        className="w-full max-w-[300px] mt-10 lg:mt-0 md:mt-0 md:max-w-[350px] object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
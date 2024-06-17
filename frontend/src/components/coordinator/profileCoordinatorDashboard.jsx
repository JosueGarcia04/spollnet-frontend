export default function ProfileCoordinatorDashboard(){
    return(
        <div>
             <h1 class="font-bold text-lg lg:text-3xl text-[#E31FAE]">Panel Admin</h1>
            <p class="text-white text-sm mb-2">Bienvenido Coordinador,</p>
            <a href="#" class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                <div>
                    <img class="rounded-full w-10 h-10 relative object-cover" src="https://i.pinimg.com/originals/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg" alt=""/> 
                </div>
                <div>
                    <p class="font-medium group-hover:text-[#E31FAE] leading-4">Joshue</p>
                    <span class="text-xs text-white">Colegio Don Bosco</span>
                </div>
            </a>
        </div>
    );
}
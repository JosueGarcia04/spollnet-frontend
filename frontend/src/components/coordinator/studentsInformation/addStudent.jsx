import  AddStudentButton from '../studentsInformation/buttonsAddStudent/addStudentButton'
import ClearStudentButton from './buttonsAddStudent/clearStudentButton';
export default function AddStudent(){
    return(
        <div>
            <h2 className="text-xl font-bold py-5">Añadir estudiante</h2>
            <div class="flex items-center justify-center p-3">
            <div class="mx-auto w-full max-w-[550px]">
                <form action="" method="POST">
                <div class="mb-5">
                    <label for="guest" class="mb-3 block text-base font-medium text-white">
                        Nombre
                    </label>
                    <input
                    type="text" min="0" class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                </div>
                <div class="mb-5">
                    <label for="guest" class="mb-3 block text-base font-medium text-white">
                        Correo 
                    </label>
                    <input
                    type="text" min="0" class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none"
                    />
                </div>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label
                        for="date"
                        class="mb-3 block text-base font-medium text-white"
                        >
                        Código
                        </label>
                        <input
                        type="text"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                        />
                    </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label
                        for="time"
                        class="mb-3 block text-base font-medium text-white"
                        >
                        Nivel
                        </label>
                        <input
                        type="text" 
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
                        />
                    </div>
                    </div>
                </div>
                <div>
                    
                        <ClearStudentButton/>
                        <br></br><br></br>
                        <AddStudentButton/>
                    
                </div>
                </form>
            </div>
            </div>
        </div>
    );
}

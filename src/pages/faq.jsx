import React from 'react'
import Footer from '../components/footer'

const Faq =()=>{
    return(
        <div className="bg-black text-white h-screen">
    <div>
        <h4 className="text-4xl font-bold text-c tracking-widest uppercase text-center text-[#E41FAE]">FAQ</h4>
        <p className="text-center text-[#E41FA] text-sm mt-2">Preguntas frecuentes generales sobre el uso de nuestra pagina</p>
        <div className="space-y-12 px-2 xl:px-16 mt-12">
            <div className="mt-4 flex">
                <div>
                    <div class="flex items-center h-16 border-l-4 border-[#E41FAE]">
                        <span class="text-4xl text-[#E41FAE] px-4">Q.</span>
                    </div>
                    <div class="flex items-center h-16 border-l-4 border-white">
                        <span class="text-4xl text-white px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div class="flex items-center h-16">
                        <span class="text-lg text-[#E41FAE] font-bold">Lorem ipsum dolor sit amet?</span>
                    </div>
                    <div class="flex items-center py-2">
                        <span class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                    </div>
                </div>
            </div>
            <div className="mt-4 flex">
                <div>
                    <div class="flex items-center h-16 border-l-4 border-[#E41FAE]">
                        <span class="text-4xl text-[#E41FAE] px-4">Q.</span>
                    </div>
                    <div class="flex items-center h-16 border-l-4 border-white">
                        <span class="text-4xl text-white px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div class="flex items-center h-16">
                        <span class="text-lg text-[#E41FAE] font-bold">Lorem ipsum dolor sit amet?</span>
                    </div>
                    <div class="flex items-center py-2">
                        <span class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                    </div>
                </div>
            </div>
            <div className="mt-4 flex">
                <div>
                    <div class="flex items-center h-16 border-l-4 border-[#E41FAE]">
                        <span class="text-4xl text-[#E41FAE] px-4">Q.</span>
                    </div>
                    <div class="flex items-center h-16 border-l-4 border-white">
                        <span class="text-4xl text-white px-4">A.</span>
                    </div>
                </div>
                <div>
                    <div class="flex items-center h-16">
                        <span class="text-lg text-[#E41FAE] font-bold">Lorem ipsum dolor sit amet?</span>
                    </div>
                    <div class="flex items-center py-2">
                        <span class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
);
}
export default Faq;
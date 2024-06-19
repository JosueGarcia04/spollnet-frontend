import EmailContact from './emailContact'
import PhoneContact from './phoneContact'
import LocationContact from './locationContact'
export default function InfoContact(){
    return(
        <div class="w-full draggable">
            <div class="container flex flex-col items-center gap-8 mx-auto px-5 my-32">
            <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <EmailContact/>
                <PhoneContact/>
                <LocationContact/>
            </div>
            </div>
    </div>
    );
}
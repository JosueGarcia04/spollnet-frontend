import React from 'react';
import Footer from '../../../components/general/footer';
import Navbar from '../../../components/general/navBar';
import NavDown from '../../../components/general/navDown';
import InfoContact from '../../../components/contact/infoMediaContact';

export default function Contact() {
    return (
        <div className="bg-black">
            <Navbar />
            <div className="container flex flex-col mx-auto bg-black">
                <InfoContact />
            </div>
            <NavDown />
            <Footer />
        </div>
    );
}

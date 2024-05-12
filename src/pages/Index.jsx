import React from 'react';
import Navbar from "../components/navBar";

import Footer from "../components/footer";

export const Index = () => {
    return(
        <>
            <Navbar/>
                <div className="bg-black text-white h-screen">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quas natus eum alias ipsam ducimus dolor repellendus. Blanditiis incidunt quas doloribus perferendis esse officia, nulla delectus, labore sequi error fugiat.</p>
                </div>
            <Footer/>
        </>
    );
}
import React from 'react';
import Hero from "../hero/Hero";
import About from "../about/About";
import Best from "../best/Best";
import Main from "../main/Main";
import Modem from "../modem/Modem";
import Contact from "../contact/Contact";


const MainPage = () => {
    return (
        <div>

            <Hero/>
            <About/>
            <Best/>
            <Main/>
            <Modem/>
            <Contact/>

        </div>
    );
};

export default MainPage;
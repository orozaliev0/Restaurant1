import React from 'react';
import "./About.scss"
import Food1 from './img/ProsessCooking1.png'
import Food2 from './img/ProsessCoock2.png'

const About = () => {
    return (
        <div id='about'>
            <div className='containerAbout'>
                <div className='about'>
                    <div className='about--us'>
                        <svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.2598 8.99226H12.2598C9.25977 7.99226 9.25977 2.99226 12.2598 1.49226C14.5451 0.349437 19.7598 0.99231 19.2598 5.99226" stroke="#EF272C" stroke-width="2"/>
                            <line y1="14.9922" x2="51.2599" y2="14.9922" stroke="#EF272C" stroke-width="2"/>
                        </svg>
                        <h1>About Us</h1>
                    </div>
                    <div className='about--info'>
                        <h1>A Journey Throught <br/>
                            Cafesio Flavors</h1>
                        <p>Try dishes that will open up new tastes for you and delight your <br/>
                            eyes with their appearance. Here you will find a cozy <br/>
                            atmosphere, excellent service and attention to each guest. <br/>
                            Book a table now and enjoy a unique experience of taste <br/>
                            discovery!</p>
                    </div>
                    <div className='about--img'>
                        <img src={Food1} alt=""/>
                        <img src={Food2} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
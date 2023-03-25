import React from 'react';
import "./Best.scss"
import Slider from 'react-slick'
import Slide1 from './img/Slide1.png'
import Slide2 from './img/Slide2.png'
import Slide3 from './img/Slide3.png'
import Slide4 from './img/Slide4.png'
import Slide5 from './img/Slide5.png'
import Slide6 from './img/Slide6.png'
import {AiOutlineDoubleLeft} from "react-icons/ai";
import next from "./../../image/next.svg"


const Best = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: false,
        nextArrow: <img src={next}/>,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <div>
            <div id='bestSeller'>
                <div className='containerAbout'>
                    <div className='best'>
                        <div className='best--title'>
                            <div className='best--title__first'>
                                <svg width="52" height="16" viewBox="0 0 52 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M51.2598 8.99226H12.2598C9.25977 7.99226 9.25977 2.99226 12.2598 1.49226C14.5451 0.349437 19.7598 0.99231 19.2598 5.99226"
                                        stroke="#EF272C" stroke-width="2"/>
                                    <line y1="14.9922" x2="51.2599" y2="14.9922" stroke="#EF272C" stroke-width="2"/>
                                </svg>
                                <h1>Best Sellers</h1>
                            </div>
                            <div className='best--title__info'>
                                <h1>You Only Reserve <br/>
                                    Exception</h1>
                                <p>Each location has a menu that`s curated just for them. <br/>
                                    See what new at your Cafesio and You`ll find Cafesio <br/>
                                    Covent Carden moments.</p>
                            </div>

                        </div>
                        <div className='best-slide'>
                            <div className='slick-slider'>
                                <button className='slick-arrow slick-prev slick-disabled'><AiOutlineDoubleLeft/>
                                </button>
                                <Slider {...settings}>
                                    <div>
                                        <img src={Slide1} alt=""/>
                                    </div>
                                    <div>
                                        <img src={Slide2} alt=""/>
                                    </div>
                                    <div>
                                        <img src={Slide3} alt=""/>
                                    </div>
                                    <div>
                                        <img src={Slide4} alt=""/>
                                    </div>
                                    <div>
                                        <img src={Slide5} alt=""/>
                                    </div>
                                    <div>
                                        <img src={Slide6} alt=""/>
                                    </div>

                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best;
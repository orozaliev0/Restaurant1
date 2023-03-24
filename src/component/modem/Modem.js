import React from 'react';
import "./Modem.scss"
import Vector from "../../image/Vector.svg";
import Line from "../../image/Line.svg";
import Vector1 from "../../image/Vector 1.svg";
import Slider from "react-slick";
import img1 from "../../image/Component1.png"
import img2 from "../../image/Component2.png"
import img3 from "../../image/Component3.png"
import img4 from "../../image/Component4.png"
import img5 from "../../image/Component5.png"


const Modem = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 43,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div id="modern">
                <div className='modern'>
                    <div className='modern__vector'>
                        <img src={Vector} alt=""/>
                        <img src={Line} alt=""/>
                    </div>
                    <h2>Modern interior</h2>
                    <div className='modern__vector'>
                        <img src={Vector1} alt=""/>
                        <img src={Line} alt=""/>
                    </div>
                </div>


                <div className={"slider"}>
                    <div className='line'></div>

                    <div className='slider-item'>
                        <Slider {...settings}>


                            <div>
                                <img src={img1} alt=""/>
                            </div>
                            <div>
                                <img src={img2} alt="" className='img2'/>

                                <div className='block'>
                                    <img src={img3} alt="" className='img'/>
                                    <img src={img4} alt="" className='img'/>
                                </div>
                            </div>
                            <div>
                                <img src={img5} alt="" className='img5'/>
                            </div>

                            <div>
                                <img src={img1} alt=""/>
                            </div>
                            <div>
                                <img src={img2} alt="" className='img2'/>

                                <div className='block'>
                                    <img src={img3} alt="" className='img'/>
                                    <img src={img4} alt="" className='img'/>
                                </div>
                            </div>
                            <div>
                                <img src={img5} alt="" className='img5'/>
                            </div>


                        </Slider>
                    </div>
'

                </div>
            </div>

        </>







    );
};

export default Modem;
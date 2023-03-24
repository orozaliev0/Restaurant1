import React from 'react';
import img1 from "../../image/Component1.png"
import img2 from "../../image/Component2.png"
import img3 from "../../image/Component3.png"
import img4 from "../../image/Component4.png"
import img5 from "../../image/Component5.png"
import "./Modem.scss"
import Vector from "../../image/Vector.svg";
import Line from "../../image/Line.svg";
import Vector1 from "../../image/Vector 1.svg";


const Modem = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        // nextArrow: <AiOutlineSearch/>,
        // prevArrow: <img src={Line} alt=""/>,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

const Modem = () => {
    return (
        <section id="modern">
            <div className="container">
                <div className="line"/>
                <div className="modern--text">
                    <div className="modern--text__block">
                        <img src={Vector} alt="" className="modern--text__block--img"/>
                        <img src={Line} alt="" className="modern--text__block--line"/>
                    </div>
                    <h1 className="modern--text__title">Modern Interior</h1>
                    <div className="modern--text__block">
                        <img src={Vector1} alt="" className="modern--text__block--img"/>
                        <img src={Line} alt="" className="modern--text__block--line"/>
                    </div>
                </div>
                <div className="modern">
                    <div className="modern--img">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="modern--image">
                        <img src={img2} alt=""/>
                        <div className="modern--image__fon">
                            <img src={img3} alt=""/>
                            <img src={img4} alt=""/>
                        </div>
                    </div>
                    <div className="modern--img">
                        <img src={img5} alt=""/>
                    </div>
                    <div className="modern--img">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="modern--image">
                        <img src={img2} alt=""/>
                        <div className="modern--image__fon">
                            <img src={img3} alt=""/>
                            <img src={img4} alt=""/>
                        </div>
                    </div>
                    <div className="modern--img">
                        <img src={img5} alt=""/>
                    </div>
        <div className='container'>
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


            {/*<div className='line'></div>*/}

            <Slider {...settings}>

                <div>
                    <img src={img1} alt="" style={{marginLeft: '8px'}}/>
                </div>
                <div>
                    <img src={img2} alt="" className='img'/>

                    <div className='block'>
                        <img src={img3} alt="" className='img'/>
                        <img src={img4} alt="" className='img'/>
                    </div>
                </div>
                <div>
                    <img src={img5} alt="" style={{marginLeft: "60px"}}/>
                </div>
                <div>
                    <img src={img1} alt=""/>
                </div>
                <div>
                    <img src={img2} alt="" className='img'/>

                    <div className='block'>
                        <img src={img3} alt="" className='img'/>
                        <img src={img4} alt="" className='img'/>
                    </div>
                </div>
                <div>
                    <img src={img5} alt="" style={{marginLeft: "60px"}}/>
                </div>
            </div>
        </section>
    );
};

export default Modem;
import React from 'react';
import "./Hero.scss"
import vectorLeft from "./img/Vector left.png"
import vectorRight from "./img/Vector right.png"
import vector from "./img/vector.png"
import {IoMdArrowRoundForward} from "react-icons/io"
import {GoLocation} from "react-icons/go"
import {BsFillTelephoneFill} from "react-icons/bs"

const Hero = () => {
    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero">
                        <hr className= "hero-hr1"/>
                        <hr className= "hero-hr2"/>
                        <hr className= "hero-hr3"/>
                    <div className="heroo">
                        <div className="heroo-title">
                            <div className={"vector-left"}>
                                <img src={vectorLeft} alt="img"/>
                                <img src={vector} alt="img"/>
                            </div>
                            <h1>Delicious</h1>
                            <div className={"vector-right"}>
                                <img src={vectorRight} alt="img"/>
                                <img src={vector} alt="img"/>
                            </div>
                        </div>
                        <div className="heroo-nav">
                            <h2>Italian Cuisine</h2>
                            <p>Classic steak & delicious with delightfully unexpenced twists. <br/>
                                The Restaurant`s sunny decor was inspired by the diners</p>
                            <h6>Reserve Your  <IoMdArrowRoundForward  className="hero-right"/> </h6>
                        </div>
                    </div>
                    <div className="hero-bottom">
                        <div className="hero-bottom-left">
                            <h3>Location</h3>
                            <hr/>
                            <GoLocation className={"hero-location"}/>
                            <h6>Rua da moeda 1g,1200-275,Portugal</h6>
                        </div>
                        <div className="hero-bottom-right">
                            <h3>Hotline</h3>
                            <hr/>
                            <BsFillTelephoneFill className={"hero-phone"}/>
                            <h6>+771219900</h6>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
import React, {useState} from 'react';
import "./Hero.scss"
import vectorLeft from "./img/Vector left.png"
import vectorRight from "./img/Vector right.png"
import vector from "./img/vector.png"
import {IoMdArrowRoundForward} from "react-icons/io"
import {GoLocation} from "react-icons/go"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai";
import {IoMdContact} from "react-icons/io"
import {FaPhoneSquareAlt} from "react-icons/fa"

const Hero = () => {

    const [modal,setModal] = useState(false)


    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero">
                        <hr className= "hero-hr1"/>
                        <hr className= "hero-hr2"/>
                    <div className="heroo">
                        <div className="heroo-title">
                            <div className={"vector-left"}>
                                <img style={
                                    {width: "50px"}
                                } src={vectorLeft} alt="img"/>
                                <img style={
                                    {width: "70px"}
                                } src={vector} alt="img" className="vector-left-bottom"/>
                            </div>
                            <h1>Delicious</h1>
                            <div className={"vector-right"}>
                                <img style={
                                              {width: "50px"}
                                          }  src={vectorRight} alt="img"/>
                                <img style={
                                    {width: "70px"}
                                } src={vector} alt="img" className="vector-left-bottom"/>
                            </div>
                        </div>
                        <div className="heroo-nav">
                            <h2>Italian Cuisine</h2>
                            <p>Classic steak & delicious with delightfully unexpenced twists. <br/>
                                The Restaurant`s sunny decor was inspired by the diners</p>
                            <div className="hero-button">
                                <div className="btn-top"></div>
                                <button onClick={() => setModal(!modal)}>Reserve Your  <IoMdArrowRoundForward  className="hero-right"/></button>
                                <div className="modal" style={{display: modal? "block" : "none" }}>
                                    <div className="modal-top">
                                        <div className="modal-top_left">
                                            <IoMdContact className="modal-icon"/>
                                        </div>
                                        <div className="modal-top_right">
                                            <h6>Name</h6>
                                            <h4>Enter your name</h4>
                                        </div>
                                    </div>
                                    <div className="modal-bottom">
                                        <div className="modal-top_left">
                                            <FaPhoneSquareAlt className="modal-icon"/>
                                        </div>
                                        <div className="modal-top_right">
                                            <h6>Phone</h6>
                                            <h4>Enter your phone</h4>
                                        </div>
                                    </div>
                                    <div className="modal-btn">
                                        <button className="modal-btn--bbb" onClick={() => setModal(!modal)}>Сontact</button>
                                    </div>
                                </div>
                                <div className="btn-bottom"></div>
                            </div>

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
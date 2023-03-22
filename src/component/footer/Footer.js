import React from 'react';
import "./Footer.scss"
import "./Media.scss"
import {BsTelegram} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <h1>Restaurant</h1>
                    <div className="footer--menu">
                        <a href="#">interior</a>
                        <a href="#">About us</a>
                        <a href="#">Menu</a>
                        <a href="#">Contacts</a>
                    </div>
                    <div className="footer__icons">
                        <a href="https://t.me/Motion web"><BsTelegram/></a>
                        <a href="https://instagram.com/motion_web?igshid=YmMyMTA2M2Y="><BsInstagram/></a>
                    </div>
                </div>
                <center>c 2023 Motion Study LLC</center>
            </div>
        </section>

    );
};

export default Footer;
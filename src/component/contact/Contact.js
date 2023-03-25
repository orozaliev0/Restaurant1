import React from 'react';
import "./Contact.scss"
import "./Media.scss"
import ContactIcon from "./img/Frame 10.svg"
import {BsArrowRightShort, BsFillTelephoneOutboundFill, BsInstagram, BsTelegram} from "react-icons/bs"
import {HiOutlineMailOpen} from "react-icons/hi"
import {FaTelegramPlane} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"


const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact--text">

                        <div className="contact--text__visit">
                            <img src={ContactIcon} alt=""/>
                            <h2>Visit Restaurant</h2>
                        </div>

                        <h1>Join Us for <br/> Happy Hours</h1>

                        <p>Your neighborhood</p>
                        <h3>225$.Lake Ave.Suite 1150 <br/> Pasadena,CA 911101</h3>

                        <p>Opening hours:</p>
                        <h3>Mon-Thu: 10:00 am - 01:00 <br/> am</h3>
                        <h3>Fri-Sun: 10:00 am - 02:00 am</h3>
<div style={{
    paddingTop: '30px'
}}>
    <hr style={{
        width:  "130px",
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0 5px 45px",
    }}/>
    <button className="contact--text__btn">Purchase gift card <BsArrowRightShort className="contact--text__icon"/></button>
    <hr style={{
        width:  "130px",
        height: "1px",
        margin: "5px 0",
        border: "1px solid red",
    }}/>
</div>
                    </div>

                    <div className="contact__maps">
                        <div className="contact__maps--group">
                            <h3>Contact Info</h3>
                            <a href=""><b><BsFillTelephoneOutboundFill/></b>+771219900</a> <br/>
                            <a href=""><b><HiOutlineMailOpen/></b>motionweb312@gmail.com</a> <br/>
                            <div className="contact__maps--group__title">
                                <a className="contact__maps--a" href="https://t.me/Motion web"><BsTelegram/></a>
                                <a className="contact__maps--a" href="https://instagram.com/motion_web?igshid=YmMyMTA2M2Y="><BsInstagram/></a>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2196.8549415310567!2d74.58520831303298!3d42.880102918608614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81915eaf75d%3A0x9bfedde3851dcd21!2sMaximum!5e0!3m2!1sru!2skg!4v1679570014068!5m2!1sru!2skg"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
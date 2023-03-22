import React from 'react';
import "./Contact.scss"
import "./Media.scss"
import ContactIcon from "./img/Frame 10.svg"
import {BsArrowRightShort, BsInstagram, BsTelegram} from "react-icons/bs"


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

                        <button className="contact--text__btn">Purchase gift card <BsArrowRightShort/></button>
                    </div>

                    <div className="contact__maps">
                        <a className="dg-widget-link"
                           href="http://2gis.kg/bishkek/firm/70000001057860881/center/74.5860829352023,42.880134176382036/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть
                            на карте Бишкека</a>
                        <div className="dg-widget-link"><a
                            href="http://2gis.kg/bishkek/firm/70000001057860881/photos/70000001057860881/center/74.5860829352023,42.880134176382036/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии
                            компании</a></div>
                        <div className="dg-widget-link"><a
                            href="http://2gis.kg/bishkek/center/74.586003,42.87992/zoom/17/routeTab/rsType/bus/to/74.586003,42.87992╎Motion Web, IT-компания?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти
                            проезд до Motion Web, IT-компания</a></div>
                        <div className="contact__maps--icons">
                            <a href="https://t.me/Motion web"><BsTelegram/></a>
                            <a href="https://instagram.com/motion_web?igshid=YmMyMTA2M2Y="><BsInstagram/></a>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12839.157435911387!2d74.57739742707425!3d42.88193397712214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1679482261675!5m2!1sru!2skg"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, {useState} from 'react';
import "./Header.scss"
import "./media.scss"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import {NavLink,Link} from "react-router-dom";
import {AiOutlineCloseCircle} from "react-icons/ai"


const Header = () => {

    const [burger, setBurger] = useState(false)

    return (
        <div>
            <header id="header">
                <div className="container">
                    <div className="header">
                      <Link to={'/'}>
                          <h1>Restaurant</h1>
                      </Link>
                        <div className="header-title">

                                <Link to={'/'}>Interior</Link>
                                <Link to={'/about-us'}>About Us</Link>
                                <Link to={'/menu'}>Menu</Link>
                                <Link to={'/contact'}>Contacts</Link>
                                <div className={"input"}>

                                <input type="text" placeholder="Search"/>
                                <AiOutlineSearch className={"icon"}/>
                                    <select>
                                        <option>En</option>
                                        <option>Ru</option>
                                        <option>Kg</option>
                                    </select>
                            </div>
                        </div>

                        <div className="Menu">
                            <button onClick={() => setBurger(!burger)} className="menu-icon">{burger? <AiOutlineCloseCircle/> : <AiOutlineMenu/>}</button>
                            <div className="burger" style={{display: burger? "block" : "none" }}>
                                <h6 href="#">interior</h6>
                                <h6 href="#">About Us</h6>
                                <h6 href="#">Menu</h6>
                                <h6 href="#">Contacts</h6>
                                <div className="burger-link">
                                    <a href="#">En</a>
                                    <a href="#">Ru</a>
                                    <a href="#">Kz</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
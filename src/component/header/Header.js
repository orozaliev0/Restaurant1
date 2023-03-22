import React, {useState} from 'react';
import "./Header.scss"
import "./media.scss"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"


const Header = () => {

    const [burger, setBurger] = useState(false)

    return (
        <div>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <h1>Restaurant</h1>
                        <div className="header-title">
                            <a href="#">interior</a>
                            <a href="#">About Us</a>
                            <a href="#">Menu</a>
                            <a href="#">Contacts</a>
                            <div className={"input"}>
                                <input type="text" placeholder="Search"/>
                                <AiOutlineSearch className={"icon"}/>
                            </div>
                        </div>
                        <div className="header-select">
                            <select>
                                <option>En</option>
                                <option>Ru</option>
                                <option>Kg</option>
                            </select>
                        </div>
                        <div className="Menu">
                            <AiOutlineMenu onClick={() => setBurger(!burger)} className="menu-icon"/>
                            <div className="burger" style={{display: burger? "block" : "none" }}>
                                <a href="#">interior</a>
                                <a href="#">About Us</a>
                                <a href="#">Menu</a>
                                <a href="#">Contacts</a>
                                <input type="text" className="burger-input" placeholder="Search"/>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
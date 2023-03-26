import React from 'react';
import "./Menu.scss"
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Hot_Drinks from "../../../image/Hot Drinks.jpg";
import cuisine from "../../../image/italian-cuisine.jpg";
import food from "../../../image/italy-food.jpg";
import Cold_Drinks from "../../../image/Cold Drinks.webp";
import Cold_DrinksI from "../../../image/Cold DrinksI.jpg";
import National_Foods from "../../../image/National Foods.jpg";
import pizza from "../../../image/Pizza.webp";
import Fast_foods from "../../../image/Fast foods.jpg";
import Fast_foods2 from "../../../image/Fast foods.2jpg.jpg";
import pageImg1 from "../../../image/pageImg1.png";
import pageImg2 from "../../../image/pageImg2.png";
import pageImg3 from "../../../image/pageImg3.png";
import pageImg4 from "../../../image/pageImg4.png";
import pageImg5 from "../../../image/pageImg5.png";
import pageImg6 from "../../../image/pageImg6.png";
import drinks from "../../../image/italian-hot-drinks.webp";
import {NavLink} from "react-router-dom";
import vector from "../menu/img/vector-bottom.png"
import Vector from "../menu/img/Vector-top.png"
import {BsSearch} from 'react-icons/bs'



const Menu = () => {

    return (

        <div className='menu'>
            <div className="menu--bottom">
                <div className="menu--bottom__left">
                    <div className="menu--bottom__left--vectors">
                        <img style={{
                        width: "80px",
                            margin: "10px 0"
                        }} src={Vector} alt=""/>
                        <img style={{
                            width: "100px"
                        }}src={vector} alt=""/>
                    </div>
                    <h3>Menu</h3>
                </div>
                <div className="menu--bottom__right">
                    <BsSearch className="menu--bottom__right--icon"/>
                </div>
            </div>
        <div className="tab">
            <Tabs>
                <TabList>
                    <Tab>
                        <div className='dd' style={{width: "50px"}}></div>
                        <p>Desserts</p>
                        <div className="ttt"></div>
                    </Tab>
                    <Tab>
                        <div className='dd' style={{width: "50px"}}></div>
                        <p>Hot Drinks</p>
                        <div className="ttt"></div>
                    </Tab>
                    <Tab>
                        <div className='dd' style={{width: "50px"}}></div>
                        <p>Cold Drinks</p>
                        <div className="ttt"></div>
                    </Tab>
                    <Tab>
                        <div className='dd' style={{width: "50px"}}></div>
                        <p>National Foods</p>
                        <div className="ttt"></div>
                    </Tab>
                    <Tab>
                        <div className='dd' style={{width: "50px"}}></div>
                        <p>Eastern cuisine</p>
                        <div className="ttt"></div>
                    </Tab>
                    <Tab>
                        <div className='dd' style={{width: "50px"}}></div>
                        <p>Fast foods</p>
                        <div className="ttt"></div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="panel-page">

                        <div style={{
                            display: "flex",
                        }}>
                            <div className='panel-page__img'>
                                <NavLink to={"/menu/detail-page"}>
                                    <img src={pageImg1} alt=""/>
                                </NavLink>
                                <h2>Ice Cream <span>$24</span></h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>


                            <div className='panel-page__img'>
                                <img src={pageImg2} alt=""/>
                                <h2>Ice Cream
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                        </div>


                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={pageImg3} alt=""/>
                                <h2>Ice Cream
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                            <div className='panel-page__img'>
                                <img src={pageImg4} alt=""/>
                                <h2>Ice Cream
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                        </div>


                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={pageImg5} alt=""/>
                                <h2>Ice Cream
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                            <div className='panel-page__img'>
                                <img src={pageImg6} alt=""/>
                                <h2>Ice Cream
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                        </div>
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className="panel-page">
                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={Hot_Drinks} alt=""/>
                                <h2>Hot Drinks
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={drinks} alt=""/>
                                <h2>Hot Drinks
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>

                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={drinks} alt=""/>
                                <h2>Hot Drinks
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={Hot_Drinks} alt=""/>
                                <h2>Hot Drinks
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="panel-page">
                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={Cold_Drinks} alt=""/>
                                <h2>Cold DrinksI
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={Cold_DrinksI} alt=""/>
                                <h2>Cold DrinksI
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>

                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={Cold_DrinksI} alt=""/>
                                <h2>Cold DrinksI
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={Cold_Drinks} alt=""/>
                                <h2>Cold DrinksI
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="panel-page">
                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={National_Foods} alt=""/>
                                <h2> Foods
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={pizza} alt=""/>
                                <h2>pizza
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>
                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={pizza} alt=""/>
                                <h2>pizza
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={National_Foods} alt=""/>
                                <h2>Foods
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="panel-page">

                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={cuisine} alt=""/>
                                <h2>cuisine
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                            <div className='panel-page__img'>
                                <img src={food} alt=""/>
                                <h2>cuisine
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="panel-page">
                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={Fast_foods} alt=""/>
                                <h2>Fast foods
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={Fast_foods2} alt=""/>
                                <h2>Fast foods
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>
                        <div style={{
                            display: "flex"
                        }}>
                            <div className='panel-page__img'>
                                <img src={Fast_foods2} alt=""/>
                                <h2>Fast foods
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <div className='panel-page__img'>
                                <img src={Fast_foods} alt=""/>
                                <h2>Fast foods
                                    <span>$24</span>
                                </h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
            <div className="tab_new">
                <Tabs>
                    <TabList>
                        <Tab>
                            <div className='dd' style={{width: "50px"}}></div>
                            <p>wertyui</p>
                            <div className="ttt"></div>
                        </Tab>
                        <Tab>
                            <div className='dd' style={{width: "50px"}}></div>
                            <p>Hot Drinks</p>
                            <div className="ttt"></div>
                        </Tab>
                        <Tab>
                            <div className='dd' style={{width: "50px"}}></div>
                            <p>Cold Drinks</p>
                            <div className="ttt"></div>
                        </Tab>
                        <Tab>
                            <div className='dd' style={{width: "50px"}}></div>
                            <p>National Foods</p>
                            <div className="ttt"></div>
                        </Tab>
                        <Tab>
                            <div className='dd' style={{width: "50px"}}></div>
                            <p>Eastern cuisine</p>
                            <div className="ttt"></div>
                        </Tab>
                        <Tab>
                            <div className='dd' style={{width: "50px"}}></div>
                            <p>Fast foods</p>
                            <div className="ttt"></div>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className="panel-page">

                            <div className="glav-div" style={{
                                display: "flex",
                            }}>
                                <div className='panel-page__img'>
                                    <div className="panel-page__img--div1">
                                        <NavLink to={"/menu/detail-page"}>
                                            <img src={pageImg1} alt=""/>
                                        </NavLink>
                                        <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                            <p>soda,cream,milk,sugar</p></div>
                                    </div>
                                </div>


                                <div className='panel-page__img'>
                                    <img src={pageImg2} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>

                            </div>


                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={pageImg3} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>

                                <div className='panel-page__img'>
                                    <img src={pageImg4} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>

                            </div>
                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div  className="panel-page">
                                <div className="glav-div" style={{
                                    display: "flex"
                                }}>
                                    <div className='panel-page__img'>
                                        <img src={Hot_Drinks} alt=""/>
                                        <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                            <p>soda,cream,milk,sugar</p></div>
                                    </div>
                                    <div className='panel-page__img'>
                                        <img src={drinks} alt=""/>
                                        <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                            <p>soda,cream,milk,sugar</p></div>
                                    </div>
                            </div>

                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={drinks} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={Hot_Drinks} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="panel-page">
                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={Cold_Drinks} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={Cold_DrinksI} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>

                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={Cold_DrinksI} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={Cold_Drinks} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div  className="panel-page">
                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={National_Foods} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={pizza} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>
                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={pizza} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={National_Foods} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="panel-page">

                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={cuisine} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>

                                <div className='panel-page__img'>
                                    <img src={food} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className="glav-div" style={{
                                    display: "flex"
                                }}>
                                    <div className='panel-page__img'>
                                        <img src={pageImg5} alt=""/>
                                        <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                            <p>soda,cream,milk,sugar</p></div>
                                    </div>

                                    <div className='panel-page__img'>
                                        <img src={pageImg6} alt=""/>
                                        <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                            <p>soda,cream,milk,sugar</p></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div  className="panel-page">
                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={Fast_foods} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={Fast_foods2} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>
                            <div className="glav-div" style={{
                                display: "flex"
                            }}>
                                <div className='panel-page__img'>
                                    <img src={Fast_foods2} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                                <div className='panel-page__img'>
                                    <img src={Fast_foods} alt=""/>
                                    <div className="panel-page__img--h2"> <h2>Ice Cream <span>$24</span></h2>
                                        <p>soda,cream,milk,sugar</p></div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>




        </div>

    );
};

export default Menu;
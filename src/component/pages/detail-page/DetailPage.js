import React from 'react';
import "./DetailPage.scss"
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
import pageImg3 from "../../../image/pageImg3.png";
import pageImg4 from "../../../image/pageImg4.png";
import pageImg5 from "../../../image/pageImg5.png";
import pageImg6 from "../../../image/pageImg6.png";
import drinks from "../../../image/italian-hot-drinks.webp";
import x from "../../../image/x.svg"


const DetailPage = () => {

    return (

        <div className='menu'>

            <img src={x} alt="" className='menu--svg'/>


            <Tabs>
                <TabList>
                    <Tab>
                        <p>Desserts</p>
                        <div></div>
                    </Tab>
                    <Tab>
                        <p>Hot Drinks</p>
                        <div></div>
                    </Tab>
                    <Tab>
                        <p>Cold Drinks</p>
                        <div></div>
                    </Tab>
                    <Tab>
                        <p>National Foods</p>
                        <div></div>
                    </Tab>
                    <Tab>
                        <p>Eastern cuisine</p>
                        <div></div>
                    </Tab>
                    <Tab>
                        <p>Fast foods</p>
                        <div></div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="panel-page">

                        <div style={{
                            display: "flex",
                            marginTop: '330px'
                        }}>
                            <div className='panel-page__img2'>
                                <img src={pageImg1} alt=""/>
                                <h2 style={{color: "white"}}>Ice Cream <span>$24</span></h2>
                                <p>soda,cream,milk,sugar</p>
                            </div>


                            <div className='panel-page__img2'>
                                {/*<img src={pageImg2} alt=""/>*/}
                                <h2 style={{color: "white", marginBottom: '10px', paddingTop: "5px"}}>Extras</h2>
                                <p style={{marginBottom: "5px"}}>Cherry <span>$24</span></p>
                                <p style={{paddingBottom: "5px"}}>Cherry <span>$24</span></p>
                                <h2 style={{color: "white", marginBottom: '10px'}}>Drinks</h2>
                                <p style={{marginBottom: "5px"}}>Coca Cola <span>$24</span></p>
                                <p>Coca Cola <span>$24</span></p>
                            </div>

                        </div>


                        <h1 className='panel-page__title'>Similar gueries</h1>

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

    );
};

export default DetailPage;
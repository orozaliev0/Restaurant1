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
import "./DetailPage.scss"
import {Link} from "react-router-dom";
import desert1 from '../../../image/decert1.png'

const DetailPage = () => {

    return (

        <div>
            <div className='menuDetail'>

                <Link to={"/menu"}>
                    <img src={x} alt="" className='menuDetail--svg'/>
                </Link>


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

                            <div className="panel-page__img2" style={{
                                display: "flex",
                                marginTop: '386px'

                            }}>
                                <div className='panel-page__img3'>
                                    <img src={pageImg1} alt=""/>
                                    <div className="panel-page__img3--block">
                                        <div className="panel-page__img3--block__left">
                                            <h3>Ice Cream</h3>
                                            <h6>soda,cream,milk,sugar</h6>
                                        </div>
                                        <div className="panel-page__img3--block__right">
                                            <h4>$9.11</h4>
                                        </div>
                                    </div>
                                </div>


                                <div className='panel-page__img4'>
                                    <h3>Extras</h3>
                                    <div className="panel-page__img4--block1">
                                        <div className="panel-page__img4--block1__title">
                                            <h4>Cherry</h4>
                                            <h6>$0.90</h6>
                                        </div>
                                        <div className="panel-page__img4--block1__title">
                                            <h4>Cherry</h4>
                                            <h6>$0.90</h6>
                                        </div>
                                    </div>

                                    <div className="panel-page__img4--block2">
                                        <h3>Drinks</h3>
                                        <div className="panel-page__img4--block1">
                                            <div className="panel-page__img4--block1__title">
                                                <h4>Cherry</h4>
                                                <h6>$0.90</h6>
                                            </div>
                                            <div className="panel-page__img4--block1__title">
                                                <h4>Cherry</h4>
                                                <h6>$0.90</h6>
                                            </div>
                                        </div>
                                    </div>
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


            <div id='changeMenu'>
                <div className='containerD'>
                    <div className='menuAd'>
                        <Link to={"/menu"}>
                            <img src={x} alt="" className='menuAd--svgX'/>
                        </Link>
                        <img src={desert1} alt="" className='menuAd--imgDesert'/>
                        <div className='menuAd--food'>
                            <div className='menuAd--food__info'>
                                <h1>Ice Cream</h1>
                                <p>soda,cream,milk,sugar</p>
                            </div>
                            <h2>$9.11</h2>
                        </div>
                        <button>Desserts</button>
                        <div className='menuAd--lineDesert'></div>
                        <h3>Extras</h3>
                        <div className='menuAd--cherry'>
                            <p>Cherry</p>
                            <p>$0.90</p>
                        </div>
                        <div className='menuAd--cherry'>
                            <p>Cherry</p>
                            <p>$0.90</p>
                        </div>
                        <div className='menuAd--lineDesert'></div>
                        <h3>Drinks</h3>
                        <div className='menuAd--cherry'>
                            <p>Coca Cola</p>
                            <p>$0.90</p>
                        </div>
                        <div className='menuAd--cherry'>
                            <p>Coca Cola</p>
                            <p>$0.90</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>


    );
};

export default DetailPage;
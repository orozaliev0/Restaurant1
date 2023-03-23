import React from 'react';
import "./Main.scss"
import Vector from "../../image/Vector.svg"
import Vector1 from "../../image/Vector 1.svg"
import Line from "../../image/Line.svg"
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {MdOutlineArrowRightAlt} from "react-icons/md"
import Hot_Drinks from "../../image/Hot Drinks.jpg"
import cuisine from "../../image/italian-cuisine.jpg"
import Cold_Drinks from "../../image/Cold Drinks.webp"
import National_Foods from "../../image/National Foods.jpg"
import Fast_foods from "../../image/Fast foods.jpg"
import { useNavigate } from "react-router-dom";
import line14 from "../../image/Line.svg"



const Main = () => {

    const navigate = useNavigate();


    return (

        <div id='main'>

            <div className='block'>
                <div className='block__vector'>
                    <img src={Vector} alt=""/>
                    <img src={Line} alt=""/>
                </div>
                <h2>Main Menu</h2>
                <div className='block__vector'>
                    <img src={Vector1} alt=""/>
                    <img src={Line} alt=""/>
                </div>
            </div>

            <h3>Exceptional Quality.
                <br/>Delightfully Delicious</h3>

            <div className='main_block'>
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
                        <div className="panel-content">

                            <h2>Beer Brewery
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Beer Brewery
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Beer Brewery
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Beer Brewery
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Beer Brewery
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">

                            <h2>Hot Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Hot Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Hot Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Hot Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Hot Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h2>Cold Drinks

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Cold Drinks

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Cold Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Cold Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Cold Drinks
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h2>National Foods

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>National Foods

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>National Foods
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>National Foods
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>National Foods
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h2>Eastern cuisine

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Eastern cuisine

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Eastern cuisine
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Eastern cuisine
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Eastern cuisine
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h2>Fast foods

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Fast foods

                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Fast foods
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Fast foods
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <h2>Fast foods
                                .................................................................... <span>$24</span>
                            </h2>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>

                </Tabs>

                <div className='main_block__btn'>

                    <div className='main_block__arrow'></div>
                    <button onClick={() =>  navigate('/menu')}>View Full menu <MdOutlineArrowRightAlt className='arrowR'/></button>
                    <div className='main_block__arrow'></div>

                </div>

            </div>

        </div>

    );
};

export default Main;
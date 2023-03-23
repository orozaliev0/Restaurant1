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
import {useNavigate} from "react-router-dom";
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
                            <div className="ttt" ></div>
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
                        <div className="panel-content">

                            <div className='panel-content__block'>
                                <h2>Beer Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Beer Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Beer Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Beer Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Beer Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">

                            <div className='panel-content__block'>
                                <h2>Hoot Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Hoot Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Hoot Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Hoot Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Hoot Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <div className='panel-content__block'>
                                <h2>Cold Brewery</h2>
                                <div></div>
                                <span>824</span>
                                </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Cold Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Cold Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Cold Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Cold Brewery</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <div className='panel-content__block'>
                                <h2>National Foods</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>National Foods</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>National Foods</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>National Foods</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>National Foods</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <div className='panel-content__block'>
                                <h2>Eastern cuisine</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Eastern cuisine</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Eastern cuisine</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Eastern cuisine</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Eastern cuisine</h2>
                                <div></div>
                                <span>824</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <div className='panel-content__block'>
                                <h2>Fast Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Fast Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Fast Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Fast Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>


                            <div className='panel-content__block'>
                                <h2>Fast Brewery</h2>
                                <div></div>
                                <span>$24</span>
                            </div>
                            <p>Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att <br/>endomatisk. Geogehet
                                pultvätta, om pneumativ.</p>
                            <h4>Order Now</h4>
                        </div>
                    </TabPanel>

                </Tabs>

                <div className='main_block__btn'>
                    <div className='main_block__arrow'></div>
                    <button onClick={() => navigate('/menu')}>View Full menu <MdOutlineArrowRightAlt
                        className='arrowR'/></button>
                    <div className='main_block__arrow'></div>
                </div>

            </div>

        </div>

    );
};

export default Main;
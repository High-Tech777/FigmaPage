import React, { useState } from "react";
import "./dashboard.scss";
import "./dashboard-style.scss";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const[isOpen, setIsOpen]=useState(false);
    const navigate=useNavigate();
    return (
        <div className="dashboard_page">
            <div className="navbtn" onClick={()=>setIsOpen(!isOpen)}>
                <img src="./assets/nav.png" alt=""></img>
            </div>
            <div className={`navsection ${isOpen ? "show": ""}`} >
                <div className="listtext menu">Homepage</div>
                <div className="listtext menu">Focus Point</div>
                <div className="listtext menu">Rewards</div>
                <div className="listtext menu">Profile</div>
                <div className="listtext menu">My Statistics</div>
                <div className="listtext menu">Pricing</div>
                
            </div>
            <div className="header">
                <div className="sm_infinite">
                    <img src="/assets/sm_infinite.png" alt=""></img>
                </div>

                <div className="listgroup">
                    <div className="list">
                        <div className="eachlist">
                            <div className="icon">
                                <div className="sub_icon">
                                    <img src="./assets/home.png" alt=""></img>
                                </div>
                            </div>
                            <div className="listtext">Homepage</div>
                        </div>

                        <div className="eachlist">
                            <div className="icon">
                                <div className="sub_icon">
                                    <img src="./assets/target-04.png" alt=""></img>
                                </div>
                            </div>
                            <div className="listtext">Foucs Point</div>
                        </div>

                        <div className="eachlist">
                            <div className="icon">
                                <div className="sub_icon">
                                    <img src="./assets/trophy-01.png" alt=""></img>
                                </div>
                            </div>
                            <div className="listtext">Rewards</div>
                        </div>

                        <div className="eachlist">
                            <div className="icon">
                                <div className="sub_icon">
                                    <img src="./assets/user-03.png" alt=""></img>
                                </div>
                            </div>
                            <div className="listtext">Profile</div>
                        </div>

                        <div className="eachlist">
                            <div className="icon">
                                <div className="sub_icon">
                                    <img src="./assets/bar-line-chart.png" alt=""></img>
                                </div>
                            </div>
                            <div className="listtext">My Statistics</div>
                        </div>

                        <div className="eachlist">
                            <div className="icon">
                                <div className="sub_icon">
                                    <img src="./assets/diamond-01.png" alt=""></img>
                                </div>
                            </div>
                            <div className="listtext">Pricing</div>
                        </div>
                    </div>
                    <div className="logout">
                        <div className="icon">
                            <div className="sub_icon">
                                <img src="./assets/log-out-01.png" alt=""></img>
                            </div>
                        </div>
                        <div className="listtext">Log out</div>
                    </div>
                </div>
                {/* <div className="navbtn">
                    <img src="./assets/menu-04.png" alt=""></img>
                </div> */}
            </div>

            <div className="body">
                <div className="bodyup">
                    <div className="help">
                        <div className="need_icon">
                            <img src="./assets/i.png" alt=""></img>
                        </div>
                        <div className="needtext">
                            Need Help?
                        </div>
                    </div>

                    <div className="items">
                        <div className="eachitem">
                            <div className="itemtext">Value</div>
                        </div>
                        <div className="eachitem">
                            <div className="itemtext">Habit</div>
                        </div>
                        <div className="eachitem">
                            <div className="itemtext">Goal</div>
                        </div>
                    </div>
                </div>

                
                <div className="bodymiddle">
                    <div className="sub_container">
                        <div className="focus">
                            <div className="selecttext">Select your Focus</div>
                            <div className="search">
                                <div className="search_icon">
                                    <img src="./assets/search-refraction.png" alt="" className="icon1"></img>
                                    <img src="./assets/Divider.png" alt="" className="Divider"></img>
                                </div>
                                <input type="text" className="searchtext" placeholder="Search for card"></input>
                            </div>
                        </div>
                        <hr>
                        
                        </hr>

                        <div className="bodydown">
                            <div className="card_group">
                                <div className="eachcard">
                                    <div className="cardtext1">
                                        Distinctio perspiciatis sint nihil nulla
                                    </div>
                                    <div className="cardtext2">
                                        Voluptatem soluta onmis doloremque iusto odit ab architecto voluptas
                                    </div>
                                    <div className="need_icon1">
                                        <img src="./assets/i.png" alt=""></img>
                                    </div>
                                    <div className="next">
                                        <img src="./assets/arrow-narrow-right.png" alt=""></img>
                                    </div>
                                    <div className="user_group">
                                        <div className="user">
                                            <img src="./assets/users-02.png" alt=""></img>
                                            <div className="num">1,234</div>
                                        </div>
                                        <div className="user">
                                            <img src="./assets/FIZZ.png" alt=""></img>
                                            <div className="num">1000</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="eachcard">
                                    <div className="cardtext1">
                                        Distinctio perspiciatis sint nihil nulla
                                    </div>
                                    <div className="cardtext2">
                                        Voluptatem soluta onmis doloremque iusto odit ab architecto voluptas
                                    </div>
                                    <div className="need_icon1">
                                        <img src="./assets/i.png" alt=""></img>
                                    </div>
                                    <div className="next">
                                        <img src="./assets/arrow-narrow-right.png" alt=""></img>
                                    </div>
                                    <div className="user_group">
                                        <div className="user">
                                            <img src="./assets/users-02.png" alt=""></img>
                                            <div className="num">1,234</div>
                                        </div>
                                        <div className="user">
                                            <img src="./assets/FIZZ.png" alt=""></img>
                                            <div className="num">1000</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="eachcard">
                                    <div className="cardtext1">
                                        Distinctio perspiciatis sint nihil nulla
                                    </div>
                                    <div className="cardtext2">
                                        Voluptatem soluta onmis doloremque iusto odit ab architecto voluptas
                                    </div>
                                    <div className="need_icon1">
                                        <img src="./assets/i.png" alt=""></img>
                                    </div>
                                    <div className="next">
                                        <img src="./assets/arrow-narrow-right.png" alt=""></img>
                                    </div>
                                    <div className="user_group">
                                        <div className="user">
                                            <img src="./assets/users-02.png" alt=""></img>
                                            <div className="num">1,234</div>
                                        </div>
                                        <div className="user">
                                            <img src="./assets/FIZZ.png" alt=""></img>
                                            <div className="num">1000</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="eachcard">
                                    <div className="cardtext1">
                                        Distinctio perspiciatis sint nihil nulla
                                    </div>
                                    <div className="cardtext2">
                                        Voluptatem soluta onmis doloremque iusto odit ab architecto voluptas
                                    </div>
                                    <div className="need_icon1">
                                        <img src="./assets/i.png" alt=""></img>
                                    </div>
                                    <div className="next">
                                        <img src="./assets/arrow-narrow-right.png" alt=""></img>
                                    </div>
                                    <div className="user_group">
                                        <div className="user">
                                            <img src="./assets/users-02.png" alt=""></img>
                                            <div className="num">1,234</div>
                                        </div>
                                        <div className="user">
                                            <img src="./assets/FIZZ.png" alt=""></img>
                                            <div className="num">1000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eachcard">
                                    <div className="cardtext1">
                                        Distinctio perspiciatis sint nihil nulla
                                    </div>
                                    <div className="cardtext2">
                                        Voluptatem soluta onmis doloremque iusto odit ab architecto voluptas
                                    </div>
                                    <div className="need_icon1">
                                        <img src="./assets/i.png" alt=""></img>
                                    </div>
                                    <div className="next">
                                        <img src="./assets/arrow-narrow-right.png" alt=""></img>
                                    </div>
                                    <div className="user_group">
                                        <div className="user">
                                            <img src="./assets/users-02.png" alt=""></img>
                                            <div className="num">1,234</div>
                                        </div>
                                        <div className="user">
                                            <img src="./assets/FIZZ.png" alt=""></img>
                                            <div className="num">1000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eachcard">
                                    <div className="cardtext1">
                                        Distinctio perspiciatis sint nihil nulla
                                    </div>
                                    <div className="cardtext2">
                                        Voluptatem soluta onmis doloremque iusto odit ab architecto voluptas
                                    </div>
                                    <div className="need_icon1">
                                        <img src="./assets/i.png" alt=""></img>
                                    </div>
                                    <div className="next">
                                        <img src="./assets/arrow-narrow-right.png" alt=""></img>
                                    </div>
                                    <div className="user_group">
                                        <div className="user">
                                            <img src="./assets/users-02.png" alt=""></img>
                                            <div className="num">1,234</div>
                                        </div>
                                        <div className="user">
                                            <img src="./assets/FIZZ.png" alt=""></img>
                                            <div className="num">1000</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="button_group">
                                <button className="Load">
                                    Load More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="footer">
                <div className="footerup">
                    <div className="left">
                        <div className="bg_infinite">
                            <img src="./assets/bg_infinite.png" alt=""></img>
                            <button className="contact">Contact Us</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_up">
                            <div className="up_photo">
                                <img src="./assets/Telegram_logo.png" alt=""></img>
                            </div>
                            <div className="up_photo">
                                <img src="./assets/Vector.png" alt=""></img>
                            </div>
                            
                            
                        </div>
                        <div className="right_down">
                            <div className="up">
                                <div className="uptext">FAQ</div>
                                <div className="uptext">Terms & Conditions</div>
                            </div>
                            <div className="middle">
                                Founded by:
                            </div>
                            <div className="down">
                                <img src="./assets/image_11.png" alt="" className="image_11"></img>
                                <img src="./assets/image_10.png" alt="" className="image_10"></img>
                            </div>
                        </div>
                        {/* <div className="blank"></div> */}
                    </div>
                </div>
                <div className="footermiddle"></div>
                <div className="footerdown">
                    © 2023 Design. All right reserves
                </div>
            </div>
        </div>
    )
}
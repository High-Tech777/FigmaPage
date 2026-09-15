import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./check.scss";
// import "./style.scss";

import nav from "../../assets/nav.png";
import home from "../../assets/home.png";
import target_04 from "../../assets/target-04.png";
import trophy_01 from "../../assets/trophy-01.png";
import user_03 from "../../assets/user-03.png";
import bar_line_chart from "../../assets/bar-line-chart.png";
import diamond_01 from "../../assets/diamond-01.png";
import log_out_01 from "../../assets/log-out-01.png";
import arrow_left from "../../assets/arrow-left.png";
import PayPal from "../../assets/paypal.png";
import credit_card from "../../assets/credit-card.png";
import I from "../../assets/i.png";
import search_refraction from "../../assets/search-refraction.png";
import Divider from "../../assets/Divider.png";
import arrow_narrow_right from "../../assets/arrow-narrow-right.png";
import users_02 from "../../assets/FIZZ.png";
import FIZZ from "../../assets/search-refraction.png";
import sm_infinite from "../../assets/sm_infinite.png";
import bg_infinite from "../../assets/bg_infinite.png";
import Telegram_logo from "../../assets/Telegram_logo.png";
import image_10 from "../../assets/image_10.png";
import image_11 from "../../assets/image_11.png";
import { Navigate } from "react-router-dom";


export default function Check() {
    const [isOpen, setIsOpen]=useState(false);
    const  navigate=useNavigate();
    return (
        <div className="check_page
            bg-[#F9F8F4] w-full h-[100vh] relative flex flex-col
        ">
            <div className="navbtn
                hidden !absolute top-5 right-5 w-[44px] h-[44px] box-border px-[13px] py-[16px] cursor-pointer z-10
            " onClick={()=>setIsOpen(!isOpen)}>
                <img src={nav} alt=""></img>
            </div>
            <div className={`navsection

                hidden z-10 absolute top-20 right-0 transition-transform duration-500 ease-in-out
                ${isOpen ? "block translate-x-0 max-[1440px]:hidden": "hidden translate-x-full"}`}    
            >
                <div className="listtext menu">Homepage</div>
                <div className="listtext menu">Focus Point</div>
                <div className="listtext menu">Rewards</div>
                <div className="listtext menu">Profile</div>
                <div className="listtext menu">My Statistics</div>
                <div className="listtext menu">Pricing</div>    
            </div>
            <div className="header
                w-full h-auto box-border px-[8.6%] py-10 flex justify-between items-center gap-[76px]
            ">
                <div className="sm_infinite">
                    <img src={sm_infinite} className="w-full h-full" alt=""></img>
                </div>

                <div className="listgroup
                    max-[1440px]:hidden
                    flex items-center justify-around float-left gap-[76px]
                ">
                    <div className="list
                        flex gap-4
                    ">
                        <div className="relative inline-block pb-1 group">
                            <div className="eachlist
                                flex items-center relative 
                            ">
                                <div className="icon
                                    w-14 h-14 flex justify-center items-center
                                ">
                                    <div className="sub_icon
                                        w-6 h-6
                                    ">
                                        <img src={home} alt="" className="w-full h-full"></img>
                                    </div>
                                </div>
                                <div className="listtext
                                    text-[14px] font-syne font-medium leading-[40px] tracking-[4%] cursor-pointer
                                ">Homepage</div>
                            </div>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#845DEA] to-[#EB5DB9] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <div className="relative inline-block pb-1 group">
                            <div className="eachlist
                                flex items-center relative 
                            ">
                                <div className="icon
                                    w-14 h-14 flex justify-center items-center
                                ">
                                    <div className="sub_icon
                                        w-6 h-6
                                    ">
                                        <img src={home} alt="" className="w-full h-full"></img>
                                    </div>
                                </div>
                                <div className="listtext
                                    text-[14px] font-syne font-medium leading-[40px] tracking-[4%] cursor-pointer
                                ">Focus Point</div>
                            </div>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#845DEA] to-[#EB5DB9] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <div className="relative inline-block pb-1 group">
                            <div className="eachlist
                                flex items-center relative 
                            ">
                                <div className="icon
                                    w-14 h-14 flex justify-center items-center
                                ">
                                    <div className="sub_icon
                                        w-6 h-6
                                    ">
                                        <img src={home} alt="" className="w-full h-full"></img>
                                    </div>
                                </div>
                                <div className="listtext
                                    text-[14px] font-syne font-medium leading-[40px] tracking-[4%] cursor-pointer
                                ">Rewards</div>
                            </div>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#845DEA] to-[#EB5DB9] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <div className="relative inline-block pb-1 group">
                            <div className="eachlist
                                flex items-center relative 
                            ">
                                <div className="icon
                                    w-14 h-14 flex justify-center items-center
                                ">
                                    <div className="sub_icon
                                        w-6 h-6
                                    ">
                                        <img src={home} alt="" className="w-full h-full"></img>
                                    </div>
                                </div>
                                <div className="listtext
                                    text-[14px] font-syne font-medium leading-[40px] tracking-[4%] cursor-pointer
                                ">Profile</div>
                            </div>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#845DEA] to-[#EB5DB9] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <div className="relative inline-block pb-1 group">
                            <div className="eachlist
                                flex items-center relative 
                            ">
                                <div className="icon
                                    w-14 h-14 flex justify-center items-center
                                ">
                                    <div className="sub_icon
                                        w-6 h-6
                                    ">
                                        <img src={home} alt="" className="w-full h-full"></img>
                                    </div>
                                </div>
                                <div className="listtext
                                    text-[14px] font-syne font-medium leading-[40px] tracking-[4%] cursor-pointer
                                ">My Statistics</div>
                            </div>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#845DEA] to-[#EB5DB9] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <div className="relative inline-block pb-1 group">
                            <div className="eachlist
                                flex items-center relative]
                            ">
                                <div className="icon
                                    w-14 h-14 flex justify-center items-center
                                ">
                                    <div className="sub_icon
                                        w-6 h-6
                                    ">
                                        <img src={home} alt="" className="w-full h-full"></img>
                                    </div>
                                </div>
                                <div className="listtext
                                    text-[14px] font-syne font-medium leading-[40px] tracking-[4%] cursor-pointer
                                ">Pricing</div>
                            </div>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#845DEA] to-[#EB5DB9] transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    </div>
                    <div className="logout">
                        <div className="icon">
                            <div className="sub_icon">
                                <img src={log_out_01} alt=""></img>
                            </div>
                        </div>
                        <div className="listtext">Log out</div>
                    </div>
                </div>
            </div>

            <div className="body
                box-border w-full px-[8.6%] py-0 flex flex-col justify-between
            ">

                <div className="bodyup
                    bg-[#F8E6D940] rounded-tl-2xl rounded-tr-2xl w-full h-[52px] flex items-center  px-[7.2%]
                ">
                    <div className="Go_back
                        h-[26px] flex items-center gap-[10px] 
                    ">
                        <div className="back_icon
                            float-left w-4 h-4 rounded-[20px] bg-[rgba(210, 91, 134, 1)] flex justify-center items-center
                        ">
                            <img src={arrow_left} alt="" className="w-full h-full"></img>
                        </div>
                        <div className="Backtext
                            font-montserrat font-medium text-base leading-[160%] tracking-normal text-[rgba(101, 70, 87, 1)]
                        ">
                            Go back
                        </div>
                    </div>
                </div>
                
                <p className="checktext
                    w-full font-syne font-medium text-[32px] leading-10 tracking-[10%] text-center bg-[#F8E6D940]
                ">
                    Check-out
                </p>

                <div className="bodymiddle
                    bg-[#F8E6D940] w-full flex justify-center items-center box-border px-[22%] py-[4%]
                ">
                    <div className="sub_container
                        flex flex-col w-full box-border gap-16
                    ">
                        <div className="flex flex-col gap-6 w-full px-[4%]">
                            <div className="Express
                                w-full flex items-center gap-2
                            ">
                                <hr className="flex-1 border border-[#654657]"></hr>
                                <div className="ExpressText
                                    font-montserrat font-medium text-base leading-[160%] tracking-normal whitespace-nowrap
                                ">
                                    Express checkout
                                </div>
                                <hr className="flex-1 border border-[#654657]"></hr>
                            </div>
                            <div className="card_group
                            
                                grid grid-template-col: 315px 315px justify-between
                            ">
                                <div className="card 
                                    min-w-[284px] h-[60px] text-center text-white rounded-[10px] bg-[linear-gradient(90deg,#B05EEB_0%,#5B3CD6_52.92%,#7C67E9_100%)] font-syne font-medium text-[22px] leading-[60px] tracking-[10%]
                                ">
                                    Credit Card
                                </div>
                                <div className="card 
                                    min-w-[284px] h-[60px] flex justify-center items-center rounded-[10px] bg-[linear-gradient(90deg,#68EBC4_0%,#27B8CC_52.92%,#4A7BEC_100%)]
                                ">
                                    <img src={PayPal} alt="paypal"></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-5">
                            <div className="w-full flex justify-between">
                                <div className="w-[45%] min-w-[315px] h-[60px] bg-white px-5 py-2 flex gap-3 items-center rounded-[10px] border-[1px] border-[#F8E6D9]">
                                    <img src={credit_card} alt="credit_card" className="w-6 h-6"></img>
                                    <img src={Divider} alt="Divider"></img>
                                    <input type="text" placeholder="Card Number" className="
                                        w-full text-base font-cairo font-medium leading-[140%] tracking-normal float-left text-[#24262D] outline-none
                                    "></input>
                                </div>
                                <div className="w-[45%] min-w-[315px] h-[60px] bg-white px-5 py-2 flex gap-3 items-center rounded-[10px] border-[1px] border-[#F8E6D9]">
                                    <img src={credit_card} alt="credit_card" className="w-6 h-6"></img>
                                    <img src={Divider} alt="Divider"></img>
                                    <input type="text" placeholder="MM/YY" className="
                                        w-full text-base font-cairo font-medium leading-[140%] tracking-normal float-left text-[#24262D] outline-none
                                    "></input>
                                </div>
                                
                            </div>

                            <div className="w-full flex justify-between">
                                <div className="w-[45%] min-w-[315px] h-[60px] bg-white px-5 py-2 flex gap-3 items-center rounded-[10px] border-[1px] border-[#F8E6D9]">
                                    <img src={credit_card} alt="credit_card" className="w-6 h-6"></img>
                                    <img src={Divider} alt="Divider"></img>
                                    <input type="text" placeholder="Name on Card" className="
                                        w-full text-base font-cairo font-medium leading-[140%] tracking-normal float-left text-[#24262D] outline-none
                                    "></input>
                                </div>
                                <div className="w-[45%] min-w-[315px] h-[60px] bg-white px-5 py-2 flex gap-3 items-center rounded-[10px] border-[1px] border-[#F8E6D9]">
                                    <img src={credit_card} alt="credit_card" className="w-6 h-6"></img>
                                    <img src={Divider} alt="Divider"></img>
                                    <input type="text" placeholder="Security Code" className="
                                        w-full text-base font-cairo font-medium leading-[140%] tracking-normal float-left text-[#24262D] outline-none
                                    "></input>
                                </div>
                                
                            </div>
                        </div>
                    
                        

                        
                    </div>
                </div>
                <div className="bodydown
                    bg-[#F8E6D940] w-full bg-[linear-gradient(156.26deg,#FFF5F6_17.24%,#FFECD5_78.79%,#F49E6D_306.08%)]
                    flex justify-center items-center box-border py-[33px] px-[36%]
                ">
                    <button className="Load
                        w-full h-[60px] bg-[linear-gradient(113.87deg,_#DD5690_14.81%,_#FDB95F_88.76%)] 
                        text-white text-base font-syne font-medium leading-[60px] text-center rounded-[10px]
                    " onClick={()=>navigate('/dashboard')}>
                        Pay now
                    </button>
                </div>
                
            </div>
        </div>
    )
}
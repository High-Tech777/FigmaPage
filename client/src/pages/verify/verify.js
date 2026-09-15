import React from "react";
// import "./signup.scss";
// import "./signup-style.scss";

// import { Link } from 'react-router-dom';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../index.css";

import sm_infinite from "../../assets/sm_infinite.png";
import bg_infinite from "../../assets/bg_infinite.png";
import Group from "../../assets/Group.png";


export default function Verify() {
    const navigate=useNavigate();

    const handleChange=(e)=> {
        const {name,value}=e.target;
        setFormData((previous)=>({
            ...previous,
            [name]:value
        }));
    }

    const handleSubmit=async(e)=> {
    e.preventDefault();
    try {
        const response=await fetch(
            "http://localhost:5000/api/auth/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        const data=await response.json();
        if(!response.ok) {
            alert(data.message);
            return;
        }
        alert(data.message);
        
        console.log("User creaetd:", data.user);
        } catch(error) {
            console.error(error);
            alert("Cannot connect to the server.")
        }
    };

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password:""
    });

    return (
        
        <div className="verify-page
        max-[992px]:bg-[#F9F8F4]
        w-full h-screen z-100">
            <div className="main">
                <div className="header flex justify-around box-border py-[40px] px-[124px] 
                w-full h-[140px] gap-[103px] items-center relative z-10">
                    <div className="sm_infinite 
                    max-[992px]:top-[50px]
                    max-[992px]:!left-[50px]
                    absolute top-[50.5px] left-[124px] h-[39px]">
                        <img src={sm_infinite} alt="sm_infinite" />
                    </div>
                    <div className="login_content
                    max-[992px]:!hidden
                    absolute right-[124px] max-w-[997px] w-full h-[60px] gap-[20px] flex justify-around items-center">
                        <div className="blank max-w-[689px] w-full h-14"></div>
                        <div className="btn_log_sign
                        max-w-[288px] w-full h-[60px] flex justify-center items-center gap-[12px]">
                            <button className="login
                            flex max-w-[107px] w-full h-15 items-center justify-center p-0 border-0
                            bg-[#FFFFFF] cursor-pointer font-syne font-medium text-base leading-[140%]
                            tracking-normal" 
                            onClick={()=>navigate('/login')}
                            >
                                Log In
                            </button>
                            <button className="signup
                            flex max-w-[167px] w-full h-[60px] items-center justify-center rounded-[10px]
                            bg-[linear-gradient(135deg,#DD5690,_#FDB95F)] border-0 cursor-pointer p-0
                            font-syne font-medium text-base leading-[140%] tracking-normal text-white" 
                            onClick={()=>navigate('/signup')}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="sub_container
                    max-[992px]:mt-0
                    max-[992px]:justify-center
                    
                    grid grid-cols-[47.2%_52.8%] max-[992px]:grid-cols-1 justify-center
                    w-full mt-[-140px] relative">
                        <div className="left
                        max-[992px]:!hidden
                        h-screen z-2 flex bg-[rgba(244, 158, 109, 1)]
                        

                        flex justify-center items-center relative bg-[#F9F8F4] ">
                            <div className="bg_infinite
                            max-[992px]:!hidden
                            max-[992px]:bg-center
                            max-w-[383px] h-[383px] w-full">
                                <img src={bg_infinite} alt="" />
                            </div>
                            <div className="group absolute float-left h-auto shrink-0
                            max-[992px]:hidden">
                                <img src={Group} alt="Group " />
                            </div>
                        </div>
                        <div className="group
                        max-[992px]:block
                        hidden absolute h-auto shrink-0">
                            <img src={Group} alt="Group"/>
                        </div>
                        
                        <div className="right 
                        bg-[#F9F8F4]
                        flex flex-col items-center justify-center">
                            
                            <div className="w-[375px] h-auto">
                                <div className="verify_email
                                max-[992px]:!right-auto
                                w-70 h-8 font-Syne font-medium text-[32px] 
                                leading-[100%] tracking-[0.1em] text-center mb-[24px] ">
                                    Verify Your Email
                                </div>
                                <div className="subhead
                                max-[992px]:min-w-[315px]
                                max-[992px]:!right-auto
                                h-13 font-[Montserrat] font-medium text-base mb-[124px]
                                leading-[160%] tracking-normal text-center text-[rgb(101,70,87)]">
                                    We have sent you a code. Check your email and 
                                    input the code to proceed
                                </div>
                                
                                
                                <div className="Typeforms_CTA
                                max-[992px]:min-w-[315px]
                                max-[992px]:!right-auto
                                max-w-[376px] w-full h-[370px] flex flex-col gap-5 ">
                                    
                                    <div className="numbers
                                    items-center justify-between box-border px-5 py-[17px] flex mb-[100px]
                                    w-[376px] h-[60px] rounded-[10px] border-[1px] border-[rgba(248, 230, 217, 1)] ">
                                        <div className="number_group
                                        flex items-center justify-between w-full h-full">
                                            <div className="number
                                            w-[37px] h-6 relative gap-3 flex items-center">
                                                <div className="line
                                                w-6 h-6 border-b-[2px] border-black absolute left-0"></div>
                                                <div className="Divider
                                                w-[1px] h-5 bg-[#F8E6D9] absolute right-0"></div>
                                            </div>

                                            <div className="number
                                            w-[37px] h-6 relative gap-3 flex items-center">
                                                <div className="line
                                                w-6 h-6 border-b-[2px] border-black absolute left-0"></div>
                                                <div className="Divider
                                                w-[1px] h-5 bg-[#F8E6D9] absolute right-0"></div>
                                            </div>

                                            <div className="number
                                            w-[37px] h-6 relative gap-3 flex items-center">
                                                <div className="line
                                                w-6 h-6 border-b-[2px] border-black absolute left-0"></div>
                                                <div className="Divider
                                                w-[1px] h-5 bg-[#F8E6D9] absolute right-0"></div>
                                            </div>

                                            <div className="number
                                            w-[37px] h-6 relative gap-3 flex items-center">
                                                <div className="line
                                                w-6 h-6 border-b-[2px] border-black absolute left-0"></div>
                                                <div className="Divider
                                                w-[1px] h-5 bg-[#F8E6D9] absolute right-0"></div>
                                            </div>

                                            <div className="number
                                            w-[37px] h-6 relative gap-3 flex items-center">
                                                <div className="line
                                                w-6 h-6 border-b-[2px] border-black absolute left-0"></div>
                                                <div className="Divider
                                                w-[1px] h-5 bg-[#F8E6D9] absolute right-0"></div>
                                            </div>

                                            <div className="number
                                            w-[37px] h-6 relative gap-3 flex items-center">
                                                <div className="line
                                                w-6 h-6 border-b-[2px] border-black absolute left-0"></div>
                                                <div className="Divider
                                                w-[1px] h-5 bg-[#F8E6D9] absolute right-0"></div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                    <div className="btn_back
                                    max-[992px]:bg-[linear-gradient(181.71deg, #F6E8EA -5%, #F9F0E6 37.12%, #F49E6D 143.7%)]
                                    
                                    w-full h-[126px] bg-[rgba(249, 248, 244, 1) flex justify-center items-center rounded-[10px]">
                                        <button type="submit" className="typeform
                                        box-border w-full h-[60px] flex items-center py-[0px] px-[10px]
                                        border border-[#F8E6D9] flex-none font-syne font-bold cursor-pointer
                                        bg-[linear-gradient(#DD5690,#FDB95F)] 
                                        justify-center rounded-[10px] text-white " onClick={handleSubmit}>
                                            <div className="Proceed
                                            max-w-[75px] w-full h-[60px] flex items-center">Proceed</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

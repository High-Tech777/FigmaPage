import React from "react";
// import "./login.scss";
// import "./login-style.scss";
import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";


import sm_infinite from "../../assets/sm_infinite.png";
import bg_infinite from "../../assets/bg_infinite.png";
import Group from "../../assets/Group.png";
import user_02 from "../../assets/user-02.png";
import Divider from "../../assets/Divider.png";
import mail_02 from "../../assets/mail-02.png";
import lock from "../../assets/lock.png";
import phone from "../../assets/phone.png";
import Google from "../../assets/Google.png";
import firefox from "../../assets/firefox.png";
import bird from "../../assets/bird.png";

function Login(){
    const navigate=useNavigate();

    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const handleLogin = async ()=> {
        try {
            const response=await API.post(
                "/auth/login",
                { username, password }
            );

            if(response.data.success){
                navigate("/dashboard");
            }
        }

        catch(error) {
            alert(error.response.data.message);
        }
    }
    return (
        
        <div className="login-page
        w-full h-screen z-100">
            <div className="main">
                <div className="header flex justify-around box-border py-[40px] px-[124px] 
                w-full h-[140px] gap-[103px] items-center relative z-10">
                    <div className="sm_infinite
                    max-[992px]:top-[50px]
                    max-[992px]:!left-[5%]
                    absolute top-[36%] left-[12.4%] h-[39px]">
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
                            tracking-normal" onClick={()=>navigate('/login')}>
                                Log In
                            </button>
                            <button className="signup
                            flex max-w-[167px] w-full h-[60px] items-center justify-center rounded-[10px]
                            bg-[linear-gradient(135deg,#DD5690,_#FDB95F)] border-0 cursor-pointer p-0
                            font-syne font-medium text-base leading-[140%] tracking-normal text-white" 
                            onClick={()=>navigate('/signup')}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="sub_container
                    max-[992px]:mt-0
                    grid grid-cols-[47.2%_52.8%] max-[992px]:grid-cols-1 justify-center
                    w-full mt-[-140px]">
                        <div className="Signuptext
                        max-[992px]:!block
                        max-[992px]:cursor-pointer
                        w-[67px] absolute top-[50px] right-[57px] font-syne font-medium text0base
                        leading-[140%] tracking-0 items-center text-center underline z-[200] hidden"
                        onClick={()=>navigate('/signup')}>
                            Sign up</div>
                        <div className="left
                        max-[992px]:!hidden
                        h-screen z-2 flex bg-[linear-gradient(181.71deg, rgba(246, 232, 234, 0.24) -5%, rgba(249, 240, 230, 0.24) 37.12%, rgba(244, 158, 109, 0.24) 143.7%)]
                        flex justify-center items-center relative bg-[#F9F8F4]">
                            <div className="bg_infinite
                            max-[992px]:!hidden
                            max-w-[383px] h-[383px] w-full">
                                <img src={bg_infinite} alt="" />
                            </div>
                            <div className="group
                            max-[992px]:!hidden
                            absolute top-0 right-0">
                                <img src={Group} alt="Group" />
                            </div>
                        </div>
                        
                        <div className="group
                            max-[992px]:block
                            hidden absolute h-auto shrink-0"
                        >
                            <img src={Group} alt="Group"/>
                        </div>

                        <div className="right
                        flex flex-col items-center justify-center">
                            <div className="items flex flex-col justify-center items-center">
                                <div className="welcome_back
                                max-[992px]:!right-auto
                                w-70 h-8 font-Syne font-medium text-[32px] 
                                leading-[100%] tracking-[0.1em] text-center mb-[24px]">
                                    Welcome Back
                                </div>

                                <div className="subhead
                                max-[992px]:!right-auto
                                w-[375px] h-13 font-[Montserrat] font-medium text-base mb-[24px]
                                leading-[160%] tracking-normal text-center text-[rgb(101,70,87)]">
                                    Go ahead and log in. Get access to your incredible account!
                                </div>

                                <div className="Typeforms_CTA
                                max-[992px]:!right-auto
                                max-[992px]:min-w-[315px]
                                max-w-[376px] w-full h-[370px] flex flex-col gap-5 mb-[55px]">
                                    <div className="Typeforms
                                    w-full h-[144px] flex flex-col justify-between gap-5 mb-[100px]">
                                        <div className="typeform
                                        box-border w-full h-[60px] flex items-center py-[0px] px-[10px] bg-[#FFFFFF]
                                        border border-[#F8E6D9] rounded-[10px] flex-none font-syne font-bold
                                        text-base leading-[140%] tracking-normal">
                                            <div className="Img
                                            w-[33px] h-6 items-center relative">
                                                <img src={user_02} alt="" className="user-02 w-6 h-6 absolute left-0" />
                                                <img src={Divider} alt="" className="Divider w-[1px] h-5 bg-[#F8E6D9] absolute right-0" />
                                            </div>
                                            <div className="Username
                                            max-w-[291px] w-full h-11 font-cairo font-medium text-base leadin-[140%] tracking-normal flex items-center justify-[left] ml-2">
                                                <input type="text" className="text w-[90%] h-6 outline-none border-0" placeholder="Username"
                                                 onChange={(e)=>setUsername(e.target.value)} value={username}></input>
                                            </div>
                                        </div>

                                        <div className="typeform
                                        box-border w-full h-[60px] flex items-center py-[0px] px-[10px] bg-[#FFFFFF]
                                        border border-[#F8E6D9] rounded-[10px] flex-none font-syne font-bold
                                        text-base leading-[140%] tracking-normal">
                                            <div className="Img
                                            w-[33px] h-6 items-center relative">
                                                <img src={lock} alt="" className="lock w-6 h-6 absolute left-0" />
                                                <img src={Divider} alt="" className="Divider w-[1px] h-5 bg-[#F8E6D9] absolute right-0 gap-2" />
                                            </div>
                                            <div className="Username
                                            max-w-[291px] w-full h-11 font-cairo font-medium text-base leadin-[140%] tracking-normal flex items-center justify-[left] ml-2">
                                                <input type="password" placeholder="Password" className="text
                                                font-[Cairo] font-medium text-base leading-[140%] tracking-normal border-0 outline-none w-[90%] focus:outline-none focus:border-0" 
                                                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="typeform_Main
                                    w-full h-[60px] flex items-center box-border py-[0px] px-[10px] cursor-pointer
                                    border border-[#F8E6D9] flex-none font-[Syne] font-bold bg-[linear-gradient(#DD5690,_#FDB95F)]
                                    justify-center rounded-[10px] text-white" 
                                    onClick={handleLogin}>
                                        <div className="proceed">Log In</div>
                                    </button>

                                    <button className="typeform_Sub
                                    w-full h-[46px] flex items-center box-border py-[0px] px-[10px] cursor-pointer
                                    border border-[#F8E6D9] flex-none font-[Syne] font-bold
                                    justify-center rounded-[10px] bg-[linear-gradient(113.87deg, rgba(221, 86, 144, 0.1) 14.81%, rgba(252, 181, 97, 0.1) 88.76%)] "
                                    onClick={()=>navigate('/reset')}>

                                        <div className="account ">
                                        I forgot my password
                                        </div>
                                    </button>
                                </div>    
                            </div>

                            
                            <div className="icon_group
                            max-[992px]:bg-[linear-gradient(181.71deg,_#F6E8EA_-5%,_#F9F0E6_37.12%,_#F49E6D_143.7%)]
                            max-[992px]:top-[843px]
                            w-full h-[67px] flex justify-center items-center gap-5 ">
                                <div className="icon
                                max-w-[66px] w-full h-[66px] rounded-full bg-[linear-gradient(#EF3C89,_#F9B93F)]
                                flex items-center justify-center">
                                    <img src={Google} alt="Google"/>
                                </div>

                                <div className="icon 
                                max-w-[66px] w-full h-[66px] rounded-full bg-[linear-gradient(#EF3C89,_#F9B93F)]
                                flex items-center justify-center">
                                    <img src={firefox} alt="firefox"/>
                                </div>

                                <div className="icon 
                                max-w-[66px] w-full h-[66px] rounded-full bg-[linear-gradient(#EF3C89,_#F9B93F)]
                                flex items-center justify-center">
                                    <img src={bird} alt="bird"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;
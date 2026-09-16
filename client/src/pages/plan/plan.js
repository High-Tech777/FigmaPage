 import React, { useState } from "react";

// Your images
import Group from "../../assets/Group.png";
import sm_infinite from "../../assets/sm_infinite.png";
import I from "../../assets/i.png";

const plans = {
    Bubbler: {
        price: "FREE",
        title: "Bubbler",
        gradient:
            "linear-gradient(90deg,#B05EEB 0%,#5B3CD6 52.92%,#7C67E9 100%)",
        icon_gradient:
            "#B18CF2",


        features: [
            <>
                Receive <span className="text-[#A042CB]">all the benefits</span>{" "}
                of the Fizzer subscription and more
            </>,
            <>
                Access to create up to{" "}
                <span className="text-[#3E91E1]">
                    four personalized videos
                </span>{" "}
                per year for personal growth
            </>,
        ],
    },

    Fizz: {
        price: "$10 /month",
        title: "Fizz",
        gradient:
            "linear-gradient(90deg,#A63BB6 0%,#A240C6 52.92%,#9E45D2 100%)",
        icon_gradient:
            "#CAA1E6",

        features: [
            <>
                Access to advanced features and expanded usage of the app
            </>,
            <>
                Create and track an{" "}
                <span className="text-[#A042CB]">unlimited</span> number of
                habits, goals and values
            </>,
            <>
                Get ability to earn{" "}
                <span className="text-[#A042CB]">FIZZ points</span>
            </>,
        ],
    },

    "Loop Daddy": {
        price: "$250 /month",
        title: "Loop Daddy",
        gradient:
            "linear-gradient(90deg,#68EBC4 0%,#27B8CC 52.92%,#4A7BEC 100%)",
        icon_gradient: 
            "##47BBC1",

        features: [
            <>
                Receive <span className="text-[#3E91E1]">all the benefits</span>{" "}
                of the Fizzer subscription and more
            </>,
            <>
                Access to create up to{" "}
                <span className="text-[#3E91E1]">
                    four personalized videos
                </span>{" "}
                per year for personal growth
            </>,
            <>
                Leverage these personalized videos to enhance the
                self-improvement journey within the app
            </>,
        ],
    },

    "Infinity Loop Enterprise": {
        price: "Enterprise",
        title: "Infinity Loop Enterprise",
        gradient:
            "linear-gradient(90deg,#B89E3D 0%,#ECD630 48.67%,#F1EB1C 100%)",
        icon_gradient:
            "#BA723D",

        features: [
            <>
                Please contact us for LOOP2 enhancement of your business and
                receive all the benefits of the Fizzer subscription and more
            </>,
        ],
    },
};


// /* ============================================================
//    SMALL PLAN CARD
//    ============================================================ */

function SmallPlanCard({
    name,
    price,
    gradient,
    icon_gradient,
    selected,
    onClick,
    buttonText = "Try Now",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                relative
                w-full
                min-h-[95px]
                rounded-[20px]
                px-[40px]
                py-[8px]
                text-left
                transition-all
                duration-200    
            `}
            style={{
                background: gradient,
            }}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-cairo text-[16px] font-bold text-white">
                        {name}
                    </p>

                    <p className="font-cairo text-[14px] font-bold text-white">
                        {price}
                    </p>
                </div>

                <span
                    className="
                        rounded-[8px]
                        bg-white/20
                        px-[18px]
                        py-[7px]
                        font-syne
                        text-[14px]
                        font-bold
                        text-white
                    "
                >
                    {buttonText}
                </span>
            </div>
            <div className="
                w-[16px] h-[16px]
                rounded-[100%]
                
                
                flex justify-center items-center
                absolute
                right-[12px]
                top-[10px]
                "
                style={{
                    background: icon_gradient,
                }}
            >
                <img src={I} alt="" className="
                    text-white w-[2px] h-[8px]
                    
                    "
                ></img>
            </div>
        </button>
    );
}


/* ============================================================
   SELECTED PLAN / RIGHT SECTION
   ============================================================ */

function SelectedPlan({ planName }) {
    if (!planName) {
        return (
            <div
                className="
                    block
                    md:flex
                    min-w-[315px]
                    w-[332px]
                    items-center
                    justify-center
                    rounded-[32px]
                    bg-white/40
                    text-center
                "
            >
                <p className="font-cairo text-[16px] text-[#654657]">
                    Choose a membership plan
                </p>
            </div>
        );
    }

    const plan = plans[planName];

    return (
        <div
            className="
                w-full
                max-w-[332px]
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-[0_12px_20px_rgba(80,60,130,0.25)]
            "
        >
            {/* TOP GRADIENT */}
            <div
                className="
                    flex
                    h-[45px]
                    w-full
                    items-center
                    justify-center
                    rounded-tl-[32px]
                    rounded-tr-[32px]
                    py-[10px]
                "
                style={{
                    background: plan.gradient,
                }}
            >
                <p className="font-cairo text-[18px] font-medium leading-[162%] text-white">
                    {plan.price}
                </p>
            </div>

            {/* CONTENT */}
            <div className="w-full px-[24px] py-[21px]">
                <p className="mb-4 text-center font-syne text-[24px] font-medium leading-10 tracking-[0.1em]">
                    {plan.title}
                </p>

                {/* FEATURES */}
                <div className="flex flex-col gap-4">
                    {plan.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-2"
                        >
                            <div className="flex h-[29px] w-[29px] shrink-0 items-center justify-center">
                                <div
                                    className="
                                        h-[9px]
                                        w-[9px]
                                        rounded-full
                                        bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                    "
                                />
                            </div>

                            <div className="w-[247px] font-cairo text-[14px] font-medium leading-[150%]">
                                {feature}
                            </div>
                        </div>
                    ))}
                </div>

                {/* SELECT BUTTON */}
                <button
                    type="button"
                    className="
                        mt-5
                        w-full
                        rounded-[10px]
                        bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)]
                        px-[50px]
                        py-[19px]
                        text-center
                        font-syne
                        text-base
                        font-medium
                        leading-[100%]
                        text-white
                    "
                >
                    Select
                </button>

                {/* LATER BUTTON */}
                <button
                    type="button"
                    className="
                        mt-3
                        w-full
                        rounded-[10px]
                        bg-[#F9F1EC]
                        px-[50px]
                        py-[12px]
                        text-center
                        font-syne
                        text-[12px]
                        font-medium
                        text-[#654657]
                    "
                >
                    Later
                </button>
            </div>
        </div>
    );
}


/* ============================================================
   MAIN PAGE
   ============================================================ */

export default function PlanPage() {
    const [selectedPlan, setSelectedPlan] = useState("Bubbler");

    return (
        <>
            <div
                className="
                    PlanResponsivePage
                    relative
                    min-h-screen
                    w-full
                    flex-col
                    bg-center
                    bg-no-repeat
                    block
                    md:hidden
                    
                "
                style={{
                    backgroundImage: `url(${Group})`,
                }}
            >
                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        header
                        flex
                        h-auto
                        w-full
                        items-center
                        justify-between
                        gap-[76px]
                        px-[8.6%]
                        py-10
                    "
                >
                    <div className="sm_infinite">
                        <img
                            src={sm_infinite}
                            className="h-full w-full"
                            alt=""
                        />
                    </div>

                    <button
                        type="button"
                        className="
                            hidden
                            h-[60px]
                            w-[200px]
                            rounded-[10px]
                            bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)]
                            text-center
                            font-syne
                            text-base
                            font-medium
                            leading-[100%]
                            text-white
                            sm:block
                        "
                    >
                        Try for Free
                    </button>
                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <div className="mb-[34px] flex flex-col justify-center">
                    <p
                        className="
                            checktext
                            mb-6
                            text-center
                            font-syne
                            text-[32px]
                            font-medium
                            leading-10
                            tracking-[0.1em]
                            sm:mb-0
                        "
                    >
                        Choose
                        <br />
                        Membership Plan
                    </p>

                    <p
                        className="
                            min-w-[315px]
                            text-center
                            font-cairo
                            text-base
                            font-medium
                            leading-[160%]
                            tracking-normal
                            text-[#654657]
                            sm:hidden
                        "
                    >
                        Choose Plan you want to subscribe to
                    </p>
                </div>


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                    className="
                        body
                        grid
                        w-full
                        grid-cols-1
                        items-start
                        gap-8
                        px-[20px]
                        mb-8

                        md:grid-cols-2
                        md:px-[50px]

                        xl:grid-cols-[332px_332px_332px]
                        xl:justify-center
                        xl:px-[100px]
                        
                    "
                >

                    {/* =================================================
                        LEFT PLAN LIST
                    ================================================= */}

                    <div
                        className="
                            w-full
                            min-w-[332px]
                            justify-self-center
                            rounded-[32px]
                            bg-white
                            p-[16px]

                        "
                    >

                        {/* BUBBLER */}

                        <SmallPlanCard
                            name="Bubbler"
                            price="FREE"
                            gradient="linear-gradient(90deg,#5269E8 0%,#9B45DD 100%)"
                            selected={selectedPlan === "Bubbler"}
                            onClick={() => setSelectedPlan("Bubbler")}
                            buttonText="Try Now"
                        />


                        {/* FIZZ */}

                        <div className="mt-3">
                            <SmallPlanCard
                                name="Fizz"
                                price="$10 /month"
                                gradient="linear-gradient(90deg,#A63BB6 0%,#A240C6 52.92%,#9E45D2 100%)"
                                selected={selectedPlan === "Fizz"}
                                onClick={() => setSelectedPlan("Fizz")}
                                buttonText="Try Now"
                            />
                        </div>


                        {/* LOOP DADDY */}

                        <div className="mt-3">
                            <SmallPlanCard
                                name="Loop Daddy"
                                price="$250 /month"
                                gradient="linear-gradient(90deg,#68EBC4 0%,#27B8CC 52.92%,#4A7BEC 100%)"
                                selected={selectedPlan === "Loop Daddy"}
                                onClick={() => setSelectedPlan("Loop Daddy")}
                                buttonText="V1 Release"
                            />
                        </div>


                        {/* INFINITY LOOP */}

                        <div className="mt-3">
                            <SmallPlanCard
                                name="Infinity Loop Enterprise"
                                price="Enterprise"
                                gradient="linear-gradient(90deg,#B89E3D 0%,#ECD630 48.67%,#F1EB1C 100%)"
                                selected={
                                    selectedPlan === "Infinity Loop Enterprise"
                                }
                                onClick={() =>
                                    setSelectedPlan("Infinity Loop Enterprise")
                                }
                                buttonText="V2 Release"
                            />
                        </div>


                        {/* TRY FOR FREE */}
                        
                        
                    </div>


                    {/* =================================================
                        SELECTED PLAN
                    ================================================= */}

                    <div
                        className="
                            hidden
                            w-full
                            max-w-[332px]
                            justify-self-center
                            md:block
                        "
                    >
                        <SelectedPlan planName={selectedPlan} />
                    </div>


                    {/* =================================================
                        OPTIONAL THIRD COLUMN
                    ================================================= */}

                    <div className="hidden xl:block">
                        {/* You can put another section here later */}
                    </div>
                </div>


                {/* =================================================
                    MOBILE TRY FOR FREE
                ================================================= */}

                <div
                    className="
                        TryNow
                        w-full
                        rounded-[20px]
                        bg-[linear-gradient(181.71deg,_#F6E8EA_-5%,_#F9F0E6_37.12%,_#F49E6D_143.7%)]
                        px-[30px]
                        py-[33px]
                        md:hidden
                    "
                >
                    <button
                        type="button"
                        className="
                            w-full
                            min-w-[315px]
                            rounded-[10px]
                            bg-[linear-gradient(113.87deg,_#DD5690_14.81%,_#FDB95F_88.76%)]
                            py-[19px]
                            text-center
                            font-syne
                            text-base
                            font-bold
                            leading-[140%]
                            text-white
                        "
                    >
                        Try For Free
                    </button>
                </div>
            </div>


            <div className="PlanPage
                w-full
                relative 
                flex-col 
                bg-[#F9F8F4]
                bg-center
                bg-no-repeat
                "
                style={{backgroundImage: `url(${Group})`}}
                
            >
                <div className="header
                    w-full
                    h-auto
                    box-border 
                    px-[8.6%] 
                    py-10
                    justify-between
                    items-center 
                    gap-[76px]
                    hidden
                    "
                >
                    <div className="sm_infinite">
                        <img src={sm_infinite} className="w-full h-full" alt=""></img>
                    </div>

                    <button className="TryFree
                        w-[200px] 
                        h-[60px] 
                        bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)] 
                        rounded-[10px]
                        text-base 
                        text-center 
                        text-white 
                        font-medium 
                        font-syne 
                        leading-[100%] 
                        tracking-normal 
                        hidden
                        sm:block"
                    >
                        Try for Free
                    </button>
                </div>

                <div className="flex-col justify-center mb-[34px] hidden">        
                    <p className="checktext
                        font-syne font-medium text-[32px] leading-10 tracking-[10%] text-center mb-6
                        sm:mb-0"
                    >
                        Choose<br />Membership Plan    
                    </p>
                    <p className="min-w-[315px]
                        font-cairo font-medium text-base leading-[160%] tracking-normal text-center text-[#654657]
                        sm:hidden"
                    >
                        Choose Plan you want to subscribe to
                    </p>
                </div>

                <div className="body
                    box-border 
                    w-full 
                    px-[18px] 
                    py-0 
                    
                    mb-8
                    columns-[350px]
                    gap-8
                    break-inside-avoid  
                    xl:px-[100px]
                    min-[830px]:px-[50px]
                    hidden
                    md:block
                    "
                >
                    {/* =============================
                                    FIZZER
                    ================================= */}
                    <div className="
                        w-full 
                        rounded-[32px] 
                        bg-white
                        px-4 py-4
                        mb-4
                        break-inside-avoid
                        " 
                    >
                        <div className="w-full  flex flex-col justify-center items-center py-[10px] 
                            rounded-tl-[32px] rounded-tr-[32px] bg-[linear-gradient(90deg,#A63BB6_0%,#A240C6_52.92%,#9E45D2_100%)]">
                            <p className="font-cairo font-medium text-base text-center text-white leading-[162%] tracking-normal ">
                                <span className="text-[20px] font-bold">$25 </span>/month
                            </p>
                            <p className="font-cairo font-medium text-[14px] text-center text-white leading-[162%] tracking-normal ">$NZD 250 /year</p>
                        </div>
                        <div className="w-full px-[24px] py-[21px]">
                        <p className="font-syne font-medium text-[24px] text-center leading-10 tracking-[10%] mb-3">Fizzer</p>
                        <div className="w-full box-border flex-col gap-4 hidden
                            md:block">
                            <div className="flex gap-2  items-center mb-4">
                                <div className="w-[29px] h-[29px] flex justify-center items-center">
                                    <div className="w-[9px] h-[9px] bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                        rounded-[50%]"></div>
                                </div>
                                <div className="w-[247px] h-[42px] font-cairo font-medium text-[14px] leading-[150%] tracking-normal">
                                    Access to advanced features and Expanded usage of the app
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between mb-4">
                                <div className="w-[29px] h-[29px] flex justify-center items-center">
                                    <div className="w-[9px] h-[9px] bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                    rounded-[50%]"></div>
                                </div>
                                <div className="w-[247px] h-[42px] font-cairo font-medium text-[14px] leading-[150%] tracking-normal">
                                    Create the track an <span className="text-[#A042CB]">unlimited</span> number of habits, goals, and values
                                </div>
                            </div>

                            <div className="flex gap-2 justify-between items-center mb-4">
                                <div className="w-[29px] h-[29px] flex justify-center items-center">
                                    <div className="w-[9px] h-[9px] bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                    rounded-[50%]"></div>
                                </div>
                                <div className="w-[247px] h-[42px] font-cairo font-medium text-[14px] leading-[150%] tracking-normal">
                                    Get ability to earn <span className="text-[#A042CB]">FIZZ points</span>, which can be used for various in-app rewards
                                </div>
                            </div>

                            <div className="flex gap-2 justify-between items-center mb-5">
                                <div className="w-[29px] h-[29px] flex justify-center items-center">
                                    <div className="w-[9px] h-[9px] bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                    rounded-[50%]"></div>
                                </div>
                                <div className="w-[247px] h-[42px] font-cairo font-medium text-[14px] leading-[150%] tracking-normal">
                                    Participate in NFT staking activities and engage with <span className="text-[#A042CB]">community leaderboard</span>
                                </div>
                            </div>
                            <div className="w-full box-border px-[50px] py-[19px] rounded-[10px] bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)]
                            text-white text-base font-syne font-medium leading-[100%] tracking-normal text-center ">
                                Secret
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    {/* =====================================
                                    Bubbler
                    ========================================= */}
                    <div className="
                        w-full 
                        rounded-[32px] 
                        bg-white
                        mb-4
                        break-inside-avoid
                        "
                    >
                        <div className="w-full h-[45px] 
                            flex flex-col justify-center items-center py-[10px] 
                            rounded-tl-[32px] rounded-tr-[32px] 
                            bg-[linear-gradient(90deg,#B05EEB_0%,#5B3CD6_52.92%,#7C67E9_100%)]
                            "
                        >
                            <p className="font-cairo font-medium text-[18px] text-center text-white 
                                leading-[162%] tracking-normal
                                "
                            >
                                FREE
                            </p>
                        </div>
                        <div className="w-full px-[24px] py-[21px]">
                            <p className="
                                font-syne font-medium text-[24px] text-center 
                                leading-10 tracking-[10%] 
                                mb-4
                                "
                            >
                                Bubbler
                            </p>
                            <div className="
                                w-full 
                                box-border 
                                flex-col 
                                gap-4 
                                hidden
                                md:block
                                "
                            >
                                
                                <div className="flex gap-2 justify-between items-center mb-4">
                                    <div className="
                                        w-[29px] h-[29px] 
                                        flex justify-center items-center
                                        "
                                    >
                                        <div className="
                                            w-[9px] h-[9px] 
                                            bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                            rounded-[50%]
                                            "
                                        ></div>
                                    </div>
                                    <div className="w-[247px] font-cairo font-medium text-[14px] leading-[150%] tracking-normal">
                                        Receive <span className="">all the benefits</span> of the Fizzer subscription and more
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between items-center">
                                    <div className="
                                        w-[29px] h-[29px] 
                                        flex justify-center items-center
                                        "
                                    >
                                        <div className="w-[9px] h-[9px] bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                            rounded-[50%]"></div>
                                    </div>
                                    <div className="
                                        w-[247px] 
                                        font-cairo font-medium text-[14px] 
                                        leading-[150%] tracking-normal
                                        "
                                    >
                                        Access to create up to <span className="text-[#3E91E1]">four personalize videos</span> per year for personal growth
                                    </div>
                                </div>
                                <div className="
                                    w-full 
                                    box-border px-[50px] py-[19px] rounded-[10px] 
                                    bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)]
                                    text-base text-white text-center font-syne font-medium 
                                    leading-[100%] tracking-normal
                                    "
                                >
                                    Select
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =====================================
                                    Loop Enterprise
                    =========================================*/}
                    <div className="
                        w-full 
                        rounded-[32px] 
                        bg-white
                        mb-4
                        break-inside-avoid
                        "
                    >
                        <div className="
                            w-full h-[45px] 
                            flex flex-col justify-center items-center 
                            py-[10px]
                            rounded-tl-[32px] rounded-tr-[32px] 
                            bg-[linear-gradient(90deg,#B89E3D_0%,#ECD630_48.67%,#F1EB1C_100%)]
                            "
                        >
                        </div>
                        <div className="w-full px-[24px] py-[21px]">
                            <p className="
                                font-syne font-medium text-[24px] text-center 
                                leading-10 tracking-[10%] mb-4
                                "
                            >
                                Infinity Loop Enterprise
                            </p>
                            <div className="
                                w-full 
                                box-border 
                                flex-col gap-4 hidden
                                md:block
                                "
                            >    
                                <div className="flex gap-2  items-center">
                                    <div className="
                                        w-[29px] h-[29px]
                                        flex justify-center items-center
                                        "
                                    >
                                        <div className="
                                            w-[9px] h-[9px] 
                                            bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                            rounded-[50%]
                                            "
                                        ></div>
                                    </div>
                                    <div className="
                                        w-[247px] 
                                        font-cairo font-medium text-[14px] 
                                        leading-[150%] tracking-normal
                                        "
                                    >
                                        Please contact for LOOP2 enhance of your business <span className="">all the benefits</span> of the Fizzer subscription and more
                                    </div>
                                </div>
                                
                                <div className="
                                    w-full 
                                    box-border px-[50px] py-[19px] rounded-[10px] 
                                    bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)]
                                    text-base text-white font-syne font-medium 
                                    leading-[100%] tracking-normal text-center 
                                    "
                                >
                                    Select
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===============================================
                                            LoopDaddy
                    =================================================== */}
                    <div className="
                        w-full 
                        rounded-[32px] 
                        bg-white
                        mb-4
                        break-inside-avoid
                        "
                    >
                        <div className="
                            w-full 
                            flex flex-col justify-center items-center 
                            py-[10px] 
                            rounded-tl-[32px] rounded-tr-[32px] 
                            bg-[linear-gradient(90deg,#68EBC4_0%,#27B8CC_52.92%,#4A7BEC_100%)]
                            "
                        >
                            <p className="
                                font-cairo font-medium text-base text-center text-white 
                                leading-[162%] tracking-normal 
                                "
                            >
                                <span className="text-[20px] font-bold">$250 </span>/month
                            </p>
                            <p className="
                                font-cairo font-medium text-[14px] text-center text-white 
                                leading-[162%] tracking-normal
                                "
                            >
                                $NZD 2,500 /year
                            </p>
                        </div>
                        <div className="w-full px-[24px] py-[21px]">
                            <p className="
                                font-syne font-medium text-[24px] text-center 
                                leading-10 tracking-[10%] mb-4
                                "
                            >
                                Loop Daddy
                            </p>
                            <div className="
                                w-full 
                                box-border 
                                flex-col gap-4 hidden
                                md:block
                                "
                            >    
                                <div className="
                                    flex gap-4  justify-between items-center
                                    "
                                >
                                    <div className="
                                        w-[29px] h-[29px] 
                                        flex justify-center items-center
                                        "
                                    >
                                        <div className="
                                            w-[9px] h-[9px] 
                                            bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                            rounded-[50%]
                                            "
                                        ></div>
                                    </div>
                                    <div className="
                                        w-[247px] 
                                        font-cairo font-medium 
                                        text-[14px] 
                                        leading-[150%] tracking-normal
                                        "
                                    >
                                        Receive <span className="">all the benefits</span> of the Fizzer subscription and more
                                    </div>
                                </div>
                                <div className="
                                    flex gap-4 justify-between items-center
                                    "
                                >
                                    <div className="
                                        w-[29px] h-[29px] 
                                        flex justify-center items-center
                                        "
                                    >
                                        <div className="
                                            w-[9px] h-[9px] 
                                            bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                            rounded-[50%]
                                            "
                                        ></div>
                                    </div>
                                    <div className="
                                        w-[247px] 
                                        font-cairo font-medium text-[14px] 
                                        leading-[150%] tracking-normal
                                        "
                                    >
                                        Access to create up to <span className="text-[#3E91E1]">four personalize videos</span> per year for personal growth
                                    </div>
                                </div>

                                <div className="
                                    flex gap-4 justify-between items-center 
                                    mb-4
                                    "
                                >
                                    <div className="
                                        w-[29px] h-[29px] 
                                        flex justify-center items-center
                                        "
                                    >
                                        <div className="
                                            w-[9px] h-[9px] 
                                            bg-[linear-gradient(90.63deg,rgba(221,86,144,0.78)_9.11%,rgba(235,130,122,0.78)_34.65%,rgba(239,141,117,0.78)_64.89%,rgba(249,172,101,0.78)_95.76%)]
                                            rounde d-[50%]
                                            "
                                        ></div>
                                    </div>
                                    <div className="
                                        w-[247px] 
                                        font-cairo font-medium text-[14px] 
                                        leading-[150%] tracking-normal
                                        "
                                    >
                                        Leverage these personalized videos to enhance their self-improvement journey within the app
                                    </div>
                                </div>

                                
                                <div className="
                                    w-full 
                                    box-border px-[50px] py-[19px] rounded-[10px] 
                                    bg-[linear-gradient(113.87deg,#DD5690_14.81%,#FDB95F_88.76%)]
                                    text-base text-white text-center font-syne font-medium 
                                    leading-[100%] tracking-normal
                                    "
                                >
                                    Select
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                {/* <div className="TryNow 
                        w-full rounded-[20px] py-[33px] px-[30px]
                        bg-[linear-gradient(181.71deg,_#F6E8EA_-5%,_#F9F0E6_37.12%,_#F49E6D_143.7%)] 
                        md:hidden">
                        <div className="min-w-[315px] rounded-[10px] bg-[linear-gradient(113.87deg,_#DD5690_14.81%,_#FDB95F_88.76%)]
                            font-syne font-bold leading-[140%] tracking-normal text-base text-center text-white
                            py-[19px]">
                            Try For Free
                        </div>
                </div> */}
            </div>
        </>
        
            
    );
}


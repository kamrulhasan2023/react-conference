"use client";
import React from 'react';
import {IConference} from "./interface";
import { FaBolt } from "react-icons/fa6";
// styles
import styles from "./conference.module.scss";

const Conference = ({name,slogan,startDate, count, isLastItem}:IConference) => {
    const isEven = (count + 1 ) %2 === 0;
    const date = new Date (startDate)
    const eventDate = date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() + ", " + date.getFullYear();
    
    return (
        <div className={`${styles['single-conference-container']}`}>
            <div className={`single-conference xl:max-w-[1088px] mx-auto flex justify-center xl:items-start items-center xl:flex-row flex-col-reverse relative ${isEven ? "xl:flex-row-reverse" : ""}  }`}>
            {/* left side */}
                <div className={`conference-left flex xl:flex-row flex-row-reverse  xl:w-[56%] w-[95%]  ${isEven ? "xl:flex-row-reverse" : ""}`}>
                    <div className={`${styles['conference-content']} w-full h-max `}>
                        <div className="flex items-center gap-4 pb-[10px]">
                            {/* circle */}
                            <div className="indicator-circle w-4 h-4 bg-[#FFC93E] rounded-full flex justify-center items-center">
                                <div className="indicator-circle-inner w-[6px] h-[6px] bg-white rounded-full ">
                                </div>
                            </div>
                            <h4 className="text-[#111D5E] text-[18px] font-medium">
                                {name}
                            </h4>
                        </div>
                        <div className="pl-8">
                            <p className="text-sm text-[#617187]">
                                {slogan}
                            </p>
                        </div>
                    </div>
                    {/* divider */}
                    <div className={`conference-divider xl:px-10 pl-6 pr-5 flex items-center justify-start flex-col gap-[6px]`}>
                        <div className={`${styles['divider-icon']}`}>
                            <FaBolt></FaBolt>
                        </div>
                        <div className={`${styles['divider-line']} bg-[#CDCDCD] w-[2px] max-h-full xl:min-h-[100px] min-h-[131px] mb-[6px] ${isLastItem ? "hidden" : ""}`} ></div>
                    </div>
                </div>
               
                {/* right side */}
                <div className={`conference-right xl:w-[44%] w-[95%] mt-[14px] xl:pl-0 pl-[96px] pb-[14px] xl:static absolute bottom-[100%] ${isEven ? "xl:text-right": "" }`}>
                    <span className="conference-date text-[#617187] text-sm">
                        {eventDate}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Conference;

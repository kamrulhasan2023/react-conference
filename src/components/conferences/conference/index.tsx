import React from 'react';
import {IConference} from "./interface";
import { FaBolt } from "react-icons/fa6";
// styles
import styles from "./conference.module.scss";

const Conference = ({title,description,startDate, count}:IConference) => {
    const isEven = (count + 1 ) %2 === 0;
    return (
        <div className="single-conference-container">
            <div className={`single-conference max-w-[1088px] mx-auto  flex justify-center  ${isEven ? "flex-row-reverse" : ""}  }`}>
            {/* left side */}
                <div className={`conference-left flex w-[56%]  ${isEven ? "flex-row-reverse" : ""}`}>
                    <div className={`${styles['conference-content']} w-full `}>
                        <div className="flex items-center gap-4 pb-[10px]">
                            {/* circle */}
                            <div className="indicator-circle w-4 h-4 bg-[#FFC93E] rounded-full flex justify-center items-center">
                                <div className="indicator-circle-inner w-[6px] h-[6px] bg-white rounded-full ">
                                </div>
                            </div>
                            <h4 className="text-[#111D5E] text-[18px] font-medium">Freezing Edge 2023</h4>
                        </div>
                        <div className="pl-8">
                            <p className="text-sm text-[#617187]">The edge isnt bleeding, its freezing!</p>
                        </div>
                    </div>
                      {/* divider */}
                    <div className={`${styles['conference-divider']} px-10`}>
                        <div className={`${styles['divider-icon']}`}>
                            <FaBolt></FaBolt>
                        </div>
                        <div className="divider-line" ></div>
                    </div>
                </div>
               
                {/* right side */}
                <div className={`conference-right w-[44%] mt-[14px] ${isEven ? "text-right": ""}`}>
                    <span className="conference-date">02 September, 2023</span>
                </div>
            </div>
        </div>
    );
};

export default Conference;

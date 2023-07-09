import React from 'react';
import {IConference} from "./interface";
import { FaBolt } from "react-icons/fa6";

const Conference = ({title,description,startDate, isAlter, isLastItem}:IConference) => {
    return (
        <div className='conference-container'>
            <div className="conference">
                <div className="conference-left">
                    <div className="conference-content">
                        <div>
                            <h4>Freezing Edge 2023</h4>
                            {/* circle */}
                            <div className="indicator-circle">
                                <div className="indicator-circle-inner">
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>The edge isnt bleeding, its freezing!</p>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="conference-divider">
                        <FaBolt></FaBolt>
                        <div className="divider-line" ></div>
                    </div>
                </div>
                {/* date */}
                <div className="conference-right">
                    <span className="conference-date">02 September, 2023</span>
                </div>
            </div>
        </div>
    );
};

export default Conference;

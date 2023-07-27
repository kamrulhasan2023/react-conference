import React from 'react';
import styles from "./single.module.scss";

const SingleConferenceDetails = () => {
    return (
        <div>
            <div className={`${styles['details-container']}`}>
                <div className="list-item">
                    <div className="item-content">
                        <span className="order">1</span> Alpha
                    </div>
                </div>

                <div className="list-item">
                    <div className="item-content">
                        <span className="order">2</span> Bravo
                    </div>
                </div>

                <div className="list-item">
                    <div className="item-content">
                        <span className="order">3</span> Charlie
                    </div>
                </div>

                <div className="list-item">
                    <div className="item-content">
                        <span className="order">4</span> Delta
                    </div>
                </div>
            </div>
            <div className="circle">+</div>
        </div>
    );
};

export default SingleConferenceDetails;
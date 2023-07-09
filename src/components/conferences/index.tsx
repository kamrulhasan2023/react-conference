import React from 'react';
import {IConferences} from "./interface";
import Conference from "./conference";


const Conferences = ({title,conferences}:IConferences) => {
  return (
    <>
      <div className="conferences-container xl:py-[100px] py-10">
        <h2 className='lg:text-[48px] text-xl font-bold text-center'>{title}</h2>
        <div className="pt-10">
          {
            conferences.map((conference,idx) =>  <Conference count={idx} key={conference.id}  {...conference} ></Conference> )
          }
        </div>
      </div>
     
    </>
  );
};

export default Conferences;

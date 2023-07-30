"use client";
import React, { FC, useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import {ItemType, ITabContentType} from "./interface";
import { useSearchParams } from 'next/navigation'
import { gql, useQuery } from '@apollo/client';
import  {tabs} from "./mock-data";
import { BsArrowDownUp } from "react-icons/bs";

// styles
import styles from "./single.module.scss";

const SingleConferenceDetails : FC = () => {
    // getting query id
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    console.log(id);
    // query
    const get_conference = gql`
    query{
        conference (id: "${id}") {
             name
             slogan
             schedules{
                day
                intervals {
                   sessions{
                     type
                     title
                     begin
                     end
                   }
                }
           }
            organizers{
             name
             about
             image{
               url
               title
             }
           }
             sponsors {
             name,
             about
             image {
               url 
               title
             }
           }
          speakers {
           name,
           about
            social {
               twitter
               linkedin
               github
               dribble
             }
           image {
             url
             title
            }
            }
        }
    }`;
    const { loading, error, data } = useQuery(get_conference);
    let conference = {};
    if(loading || error){
        console.log("Loading");
    }else {
        conference = data.conference;
    }
 

    const [state, setState] = useState<ItemType[]>(tabs);
      
      
    return (
        <div className="xl:pt-[60px]">
            <div className="xl:pb-[52px]">
                <h2 className="text-4xl text-primary font-bold pb-4">{conference.name}</h2>
                <h3 className="text-lg text-primary">{conference.slogan}</h3>
            </div>

           <div className="details-accordion-container flex gap-10">
                {/* tab */}
                <div className="max-w-[365px] w-full">
                    <ReactSortable list={state} setList={setState}>
                        {state.map((item) => (
                            <div 
                                key={item.id}  
                                className={`flex items-center border border-[#D9D9D9]/[0.5] rounded-lg mb-8 lg:gap-11 gap-[39px] p-2 ${styles['tab-control']} `}
                            >
                                <div className="w-14 h-14 bg-[#FFFCF6] flex items-center justify-center icon-container">
                                    <BsArrowDownUp className="text-[25px] text-[#FFC93E]" > </BsArrowDownUp>
                                </div>
                                <h3 className="text-primary text-lg font-bold ">{item.name}</h3>
                            </div>
                            
                        ))}
                    </ReactSortable>
                </div>
                {/* tab content */}
                <div className="max-w-[904px]">

                </div>
           </div>
        </div>
    );
};

export default SingleConferenceDetails;
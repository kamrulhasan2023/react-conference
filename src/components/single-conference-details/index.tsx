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
                <div className="max-w-[365px] w-full" id="tabs">
                    <ReactSortable list={state} setList={setState}>
                        {state.map((item,idx) => (
                           <>
                             <a 
                                key={item.id}
                                href={`#tab-${idx + 1}`}  
                                className={`flex items-center border border-[#D9D9D9]/[0.5] rounded-lg mb-8 lg:gap-11 gap-[39px] p-2 ${styles['tab-control']} `}
                                data-te-toggle="pill"
                                data-te-target={`#tab-${idx +  1}`}
                                role="tab"
                                aria-controls={`tab-${idx +  1}`}
                                aria-selected={`${idx === 0 ? true : false}`}
                                onclick={tabFunc()}
                            >
                                <div className="w-14 h-14 bg-[#FFFCF6] flex items-center justify-center icon-container">
                                    <BsArrowDownUp className="text-[25px] text-[#FFC93E]" > </BsArrowDownUp>
                                </div>
                                <div className="text-primary text-lg font-bold tabpan-title">{item.name}</div>
                            </a>
                           </>
                            
                        ))}
                    </ReactSortable>
                </div>
                {/* tab content */}
                <div className="max-w-[904px]" id="tab-contents">
                    <div
                        className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-1"
                        role="tabpanel"
                        aria-labelledby="tab-1"
                        data-te-tab-active>
                        Tab 1 content
                    </div>
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tab-2"
                        role="tabpanel"
                        aria-labelledby="tab-2">
                        Tab 2 content
                    </div>
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tab-3"
                        role="tabpanel"
                        aria-labelledby="tab-3">
                        Tab 3 content
                    </div>
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tab-4"
                        role="tabpanel"
                        aria-labelledby="tab-4">
                        Tab 4 content
                    </div>
                </div>
           </div>
        </div>
    );
};

export default SingleConferenceDetails;
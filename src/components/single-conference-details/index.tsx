"use client";
import React, { FC, useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import {ItemType} from "./interface";
import { useSearchParams } from 'next/navigation'
import { gql, useQuery } from '@apollo/client';
import  {tabs} from "./mock-data";

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

           <div className="details-accordion-container">
                <ReactSortable list={state} setList={setState}>
                    {state.map((item) => (
                        <div key={item.id} className="border-[1px] border-[#FF00FF] py-5 mb-2">{item.name}</div>
                    ))}
                </ReactSortable>
                <div>
                    
                </div>
           </div>
        </div>
    );
};

export default SingleConferenceDetails;
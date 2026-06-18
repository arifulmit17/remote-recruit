import React from "react";
import Heading from "./Heading";
import Section_title from "./Section_title";
import Ellipsis from "./Ellipsis";

import Box from "./Box";

type SectionProps = {
  heading: string;
  title: string;
  description: string;
  sectionNo: string;
  img1: string;
  img2?: string;
  img3?: string;
};

const Section2 = (props: SectionProps) => {
  return (
    <>
     
      <div className="flex  gap-5 m-4">
         <div className="w-full relative">
        <div className="absolute -top-10">
          <Ellipsis sectionNo="" size="10"></Ellipsis>
        </div>
        <div className="rounded-2xl ml-20 w-100 h-120 shadow-2xl shadow-blue-400 flex flex-col gap-5">
          <div className="text-start mt-5">
           <h3>Your Membership Tier</h3>
           <h3>Premium</h3>
           <h3>Features</h3>
          </div>
          
          {props.sectionNo === "2" && (
            <div className="absolute bottom-60 -right-10">
              <Ellipsis sectionNo="2" size="20" image={props.img3}></Ellipsis>
            </div>
          )}
          

          <div className="absolute bottom-10 -left-5 ">
             <div className="w-90 h-20 rounded-full flex gap-5 shadow-lg bg-white" >
      <div className="w-18 h-18 m-2 flex items-center justify-center bg-linear-to-r from-[#EBEDFF] to-[#ADB8FF] rounded-full">
        <img src={props.img1} alt="" className="size-1/2 rounded-full bg-cover" />
      </div>

      <div className="flex flex-col items-start justify-center gap-1">
        <h4 className="text-[#0c2b80] font-semibold" >
          Upcoming Payment In…
        </h4>

        <p className="text-[#0c2b80] font-semibold">
          14 Days - $79.99
        </p>
      </div>
    </div>
          </div>
         
         
        </div>
      </div>
        <div className="w-10/12 flex flex-col text-start items-start justify-around gap-5">
          <Heading heading={props.heading}></Heading>
          <Section_title title={props.title}></Section_title>
          <p>{props.description}</p>
        </div>
     
    </div>
    </>
    
  );
};

export default Section2;

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

const Section = (props: SectionProps) => {
  return (
    <>
     
      <div className="flex  gap-5 m-4">
        <div className="w-10/12 flex flex-col text-start items-start justify-around gap-5">
          <Heading heading={props.heading}></Heading>
          <Section_title title={props.title}></Section_title>
          <p>{props.description}</p>
        </div>
      <div className="w-full relative">
        <div className="absolute -top-10">
          <Ellipsis sectionNo="" size="10"></Ellipsis>
        </div>
        <div className="rounded-2xl ml-20 w-100 h-120 shadow-2xl shadow-blue-400 flex flex-col gap-5">
          <div className="mx-auto mt-5">
            <img
              className="w-[315px] h-[176px] object-cover"
              src={props.img2}
              alt=""
            />
          </div>
          {props.sectionNo === "1" && (
            <div className="absolute bottom-60 -right-10">
              <Ellipsis sectionNo="1" size="20" image={props.img3}></Ellipsis>
            </div>
          )}
          {props.sectionNo === "2" && (
            <div className="absolute bottom-60 -right-10">
              <Ellipsis sectionNo="2" size="20" image={props.img3}></Ellipsis>
            </div>
          )}
          {props.sectionNo === "3" && (
            <div className="absolute bottom-60 -right-10">
              <Ellipsis sectionNo="3" size="20" image={props.img3}></Ellipsis>
            </div>
          )}

          <div className="absolute top-50 -left-5 ">
            <Box
              image={props.img1}
              designation="Python Developer"
              name="Felonious Gru"
              textColor1="text-[#1E3E85]"
              textColor2="text-[#11142D]"
            />
          </div>
          {props.sectionNo === "1" && (
            <div className="absolute top-80 -right-10 ">
              <Box
                image={props.img1}
                designation="Front End Wizard"
                name="Mel Muselphiem"
                textColor1="text-[#52B4DA]"
                textColor2="text-[#11142D]"
              />
            </div>
          )}
          {props.sectionNo === "3" && (
            <div className="grid grid-cols-6 mt-40 gap-5 p-2">
              <div className="bg-blue-50 p-2 rounded-lg col-span-2">
                <h3 className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent font-bold">
                  Python Dev
                </h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg col-span-2">
                <h3 className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent font-bold">
                 Javascript
                </h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg col-span-2">
                <h3 className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent font-bold">
                  Front End
                </h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg col-span-2">
                <h3 className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent font-bold">
                  Back End
                </h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg col-span-3">
                <h3 className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent font-bold">
                  IOS Development
                </h3>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg col-span-1">
                <h3 className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent font-bold">
                  +12
                </h3>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Section;

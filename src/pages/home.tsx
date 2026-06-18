import React from "react";

import Heading from "../components/Heading";
import Ellipsis from "../components/Ellipsis";
import Navbar from "../shared/Navbar";
import Box from "../components/Box";
import img1 from "../assets/image1.png";
import img2 from "../assets/Rectangle 104.png";
import img3 from "../assets/logo_rr.svg";
import Section_title from "../components/Section_title";

const home = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white font-poppins">
      <div className="bg-[url('/src/assets/background.svg')] bg-contain bg-no-repeat w-full h-[704px]">
        <Navbar></Navbar>
        <div className="w-260 h-54 flex flex-col items-center justify-center text-center m">
          <h1>RemoteRecruit’s Difference</h1>
          <div className="w-200 h-32">
            <p>
              RemoteRecruit is connecting the world with an easy-to-use platform
              that lets full-time, part-time, and freelance workers showcase
              their talents to businesses that need them. With no paywalls, no
              fees, and no barriers, there’s nothing but you, your talents, and
              the next step in your career.
            </p>
          </div>
        </div>
      </div>
      <section className="w-11/12 mx-auto">
        <div className="flex  gap-5 m-4">
          <div className="w-10/12 flex flex-col text-start items-start justify-around gap-5">
            <Heading heading="Global Reach"></Heading>
            <Section_title></Section_title>
            <p>
              RemoteRecruit connects candidates with opportunities around the
              world. With today’s remote-first workforce, you need to be able to
              find the best jobs and the best people for them, wherever they may
              be.
            </p>
          </div>
          <div className="w-full relative">
            <div className="absolute -top-10">
              <Ellipsis size="10"></Ellipsis>
            </div>
            <div className="rounded-2xl ml-20 w-100 h-120 shadow-2xl shadow-blue-400 flex flex-col gap-5">
              <div className="mx-auto mt-5">
                <img className="w-full" src={img2} alt="" />
              </div>
              <div className="absolute bottom-60 -right-10">
                <Ellipsis size="20" image={img3}></Ellipsis>
              </div>

              <div className="absolute top-50 -left-5 ">
                <Box
                  image={img1}
                  designation="Python Developer"
                  name="Felonious Gru"
                  textColor1="text-[#1E3E85]"
                  textColor2="text-[#11142D]"
                />
              </div>
              <div className="absolute top-80 -right-10 ">
                <Box
                  image={img1}
                  designation="Front End Wizard"
                  name="Mel Muselphiem"
                  textColor1="text-[#52B4DA]"
                  textColor2="text-[#11142D]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;

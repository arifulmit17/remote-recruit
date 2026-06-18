import React from "react";

import Heading from "../components/Heading";
import Ellipsis from "../components/Ellipsis";
import Navbar from "../shared/Navbar";
import Box from "../components/Box";
import img1 from "../assets/image1.png";

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
       <div className="flex items-center justify-center text-center m-4">
        <div>
            <Heading heading="Global Reach"></Heading>
        <h1 className="text-4xl font-bold text-[#08060D] m-4">
            The First Fully Global Job Board, Anywhere, Ever
        </h1>
        <p>
            RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
        </p>

        </div>
        <div className="w-full">
            <Ellipsis></Ellipsis>
            <div >
                <img src="" alt="" />

            </div>
            <Box image={img1} designation="Python Developer" name="Felonious Gru" textColor1="text-[#1E3E85]" textColor2="text-[#11142D]" />

        </div>
        

       </div>
            
        </section>
    </div>
  );
};

export default home;

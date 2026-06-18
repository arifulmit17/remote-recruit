import React from "react";

import Heading from "../components/Heading";
import Ellipsis from "../components/Ellipsis";
import Navbar from "../shared/Navbar";
import img1 from "../assets/image1.png";
import img2 from "../assets/Rectangle 104.png";
import img3 from "../assets/logo_rr.svg";
import img4 from "../assets/rec_2.png"
import img5 from "../assets/paypal.png"

import Section_title from "../components/Section_title";
import Section from "../components/section";
import Section2 from "../components/Section2";

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
     
      <section className="w-11/12 mx-auto mt-20">
       <Section sectionNo="1" img1={img1} img2={img2} img3={img3} heading="Global Reach" title="The First Fully Global Job Board, Anywhere, Ever" description="RemoteRecruit is the first fully global job board. We connect talent and businesses across the world, with no paywalls, no fees, and no barriers. With RemoteRecruit, you can find your next opportunity or your next hire, no matter where you are." ></Section>
      </section>
      <section className="w-11/12 mx-auto mt-20">
       <Section2 sectionNo="2" img1={img5} img2={img2} img3={img3} heading="Actually Fee Free" title="Fee-Free Forever" description="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved." ></Section2>
      </section>
      <section className="w-11/12 mx-auto mt-20">
       <Section sectionNo="3" img1={img1} img2={img4} img3={img1} heading="Custom Profile" title="Showcase Your Talent" description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates." ></Section>
      </section>
    </div>
  );
};

export default home;

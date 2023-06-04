import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-400" >
            About me.
          </p>
        </div>
        <p className="text-xl mt-12">
         I am amit. I am a Front-end-Developer with 1.5 years of experience. Like to explore new tools which keeps me focused and dedicated to my work.Currently studying in NIST,Berhampur. 
       
       
         </p>

        <br />

        <p className="text-xl">
        I am amit. I am a Front-end-Developer with 1.5 years of experience. Like to explore new tools which keeps me focused and dedicated to my work.Currently studying in NIST,Berhampur.
        </p>
      </div>
    </div>
  );
};

export default About;

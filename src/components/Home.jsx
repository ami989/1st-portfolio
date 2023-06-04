import React from 'react';
import HeroImage from '../assets/ami.jpg';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full
     bg-gradient-to-b
      from-black to-blue-900 via-black '>

       <div className='max-w-screen-lg mx-auto 
       flex flex-col items-center 
       justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
           <h2 className='text-4xl sm:text-7xl font-bold text-cyan-400'>
               I am a frontend developer
           </h2>
           <p className='text-gray-500 py-4 max-w-md '>
            I have 1.5 years of experience in Front-End Development for buliding and designing softwares.
            Currently I love to work on web applications using Technologies like 
            React,NextJs,TailWind.
           </p>

           <div>
            <Link
              to="portfolio"
              smooth
              duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex item-centre rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                portfolio
                <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} 
                className='ml-1'/>
                </span>
                
            </Link>
           </div>
           </div>
           <div>
            <img src={HeroImage} alt="my profile"
            className='rounded-2xl mx-auto w-2/3 md:w-100' />
        </div> 
        </div>
        
    </div>
  );
};

export default Home;
"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from 'next/image';
import img2 from "../app/assets/Casfis_P1.png";
import img3 from "../app/assets/pro-listing.png";
import img4 from "../app/assets/edutrack.png";

export function AnimatedPinDemo() {
  return (

<div className="relative pb-[3rem]  mt-[2rem] md:mt-[2rem] xl:mt-[4rem] lg:mt-[4rem]  ">

    <div className='bg-black'>
        <h1 className='text-cyan-300 xl:text-5xl text-[20px] font-bold text-center'>
            My Creations
        </h1>
        <p className='text-cyan-50 text-center font-lighter text-sm'>
           Here are my selected creations
        </p>
    </div>  
    
    <div className="grid xl:grid-cols-2 sm:grid xs:grid md:grid md:grid-cols-2 md:gap-28 md:m-20 xl:gap-y-[13rem] m-32 gap-y-[6rem] mt-[4rem] xl:mt-[7rem]  items-center justify-center ">
      <PinContainer
        title="casfis.onrender.com"
        href="https://casfis.onrender.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[23rem] xl:w-[35rem] xl:h-[30rem]">
          <Image 
            src={img2}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
           
          />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Casfis Restaurant
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300 ">
              Casfis Restaurant is a landing page site where customers can conveniently
              make reservations, browse menus, and securely purchase meals using payment vouchers.
            </span>
            <p className="text-white flex pt-3 font-light text-sm">
              <span className="text-cyan-300 font-semi-bold">Tech Stack:</span> Html, Css, Javascript
            </p>

             {/* source_code & livepreview */}
             
             {/* live_preview */}
             <div className="flex gap-2">
                <a href="">
                    <p className='text-white btnX  text-sm'>live preview</p>
                </a>
                
                {/* source_code */}
                <a href="">
                    <p className='text-blue-400 btnY  text-sm'>source code</p>
                </a>
             </div>
            

          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="pro-listing"
        href="  http://pro-listing.onrender.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[23rem] xl:w-[35rem] xl:h-[30rem]"> 
        <Image 
            src={img3}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
           
          />
             <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Pro-Listing 
             </h3>
           <span className="text-slate-300 ">
              Pro-listing is a landing page where we list your crypto coins
            </span>
            <p className="text-white flex pt-3 font-light text-sm">
              <span className="text-cyan-300 font-semi-bold">Tech Stack:</span> Html, Css, Javascript
            </p>

             {/* source_code & livepreview */}
             
             {/* live_preview */}
             <div className="flex gap-2">
                <a href="">
                    <p className=' btnX cursor-pointer text-sm'>live preview</p>
                </a>
                
                {/* source_code */}
                <a href="">
                    <p className=' btnY cursor-pointer text-sm'>source code</p>
                </a>
             
          </div>
        </div>
      </PinContainer>

     
      <PinContainer
        title="EduTrack"
        href="https://edutrack-z68j.onrender.com "
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[23rem] xl:w-[35rem] xl:h-[30rem]"> 
        <Image 
            src={img4}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
           
          />
             <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
               EduTrack
             </h3>
           <span className="text-slate-300 ">
              Your All-In-One-Platform with Endless Possibilities,simplify school operations enhance student success.
            </span>
            <p className="text-white flex pt-3 font-light text-sm">
              <span className="text-cyan-300 font-semi-bold">Tech Stack:</span> Html, Css, Javascript
            </p>

             {/* source_code & livepreview */}
             
             {/* live_preview */}
             <div className="flex gap-2">
                <a href="">
                    <p className=' btnX cursor-pointer pointer pb-[3px] text-sm'>live preview</p>
                </a>
                
                {/* source_code */}
                <a href="">
                    <p className=' btnY cursor-pointer pointer pb-[3px] text-sm'>source code</p>
                </a>
             
          </div>
        </div>
      </PinContainer>


    </div>
    </div>
  );
}








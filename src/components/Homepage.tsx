
"use client";
import React from 'react'
import { SparklesCore } from "../components/sparkles";

export  function SparklesPreview() {
  return (
    <div className="h-[50rem] w-full pt-20 bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
            <div>
               <h1 className=' focus-in-contract text-wrap stroke  text-[2.5rem] inset-20 font-extrabold  '>
                   Hey there, meet
               </h1>
            </div>
        
      <h1 className="md:text-7xl  xs:text:[10rem] text-[4.5rem] tracking-tighter leading-[4rem]  text-wrap sm:font-extrabold xs:font-extrabold md:font-extrabold lg:font-extrabold  lg:text-9xl font-extrabold text-center  bg-gradient-to-r from-[#00aeff] to-[#51e2ff]  inline-block  text-transparent bg-clip-text  focus-in-contract">
        KWADWO <br /> NYARKO
      </h1>
      <h1 className="md:text-3xl  sm:text-[10rem] font-light text-[19px] text-wrap text-center text-gray-300  relative z-20 focus-in-expand-fwd ">
           I'm  a   <span className='inset-x-40 text-cyan-300 font-medium '><em><b>software engineer</b>  </em></span> dedicated to bridging the gap between imagination and reality.<br />
           With code as my canvas, I paint vibrant<br /> solutions that transform visions into tangible results.
      </h1>

<button  className='mt-10 mb-5' >
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    ></path>
  </svg>
  <span>Get in touch</span>
</button>


      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>



      {/* ends */}
    </div>
  );
}



// /* From Uiverse.io by Gerente-S4V1T4R */ 
// <div class="container">
//   <div class="box">
//     <div class="content">
      
//     </div>
//   </div>
// </div>


export default SparklesPreview

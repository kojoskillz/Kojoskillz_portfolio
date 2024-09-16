
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

      {/* socials */}
      {/* From Uiverse.io by akshat-patel28  */}

      <div className='flex place-content-center gap-2 mt-5' >
      <div className="flex justify-center items-center">
  <button
    // href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-950 to-black text-white font-semibold duration-500 "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="0"
      fill="currentColor"
      stroke="currentColor"
      className='rotate-3'
    >
      <path
        d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
      ></path>
    </svg>
    <span
      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-5 duration-700"
    >
      {/* x */}
    </span>
  </button>
</div>

{/* From Uiverse.io by EcheverriaJesus  */}
<div className="flex justify-center items-center">
  <button
    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-950 to-black text-white font-semibold transition-all duration-500"
    // href="https://github.com/kojoskillz"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 15 15"
      className="w-5 rotate-3 "
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        fill="currentColor"
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
      ></path>
    </svg>
    <span
      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
    >
      {/* GitHub */}
    </span>
  </button>
</div>

      </div>


<button  className='mt-5 mb-5' >
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

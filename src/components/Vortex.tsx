import React from "react";
import { Vortex } from "../components/ui/vortex";

export default function VortexDemo() {
  return (
    <div className="w-[calc(100%)] mx-auto rounded-md h-[30rem] overflow-hidden" id='contact'>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-3xl md:text-6xl mt-16 font-bold text-center">
          Want to work together?
        </h2>
        <p className="text-white text-md md:text-3xl max-w-xl mt-6 text-center">
          Don&apos;t be shy shoot me a message
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a href="">
                 <button className="px-4 py-2 buttonX bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                     Shoot me
                 </button>
            </a>
         
        </div>

        <div>
         <h1 className="text-white text-sm mt-20 -mb-[16rem] text-center">
            Made with love by <span className="font-bold ">Kojoskillz </span> with  
            <span className="font-bold "> Next.js, </span>
            <span className="font-bold ">Tailwind CSS, </span>
            <span className="font-bold ">AceternityUI, </span>
            <span className="font-bold ">MagicUI </span>
             and deployed with
            <span className="font-bold "> Render</span>
         </h1>

         <div className="mt-[20rem]">
         <a href="#Home">
          <h1 className="text-white font-bold hover:text-cyan-200 transition-all     text-center">Back to top &uarr;</h1>
         </a>
      </div>
      </div>


      </Vortex>
    
    </div>
  );
}

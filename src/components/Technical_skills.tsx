import React from 'react'
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiRender } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

const Technical_skills = () => {
  return (
    <div className='bg-black xl:pb-[5rem] pb-[4rem] xl:mt-[37rem] lg:mt-[36rem] md:mt-[105rem] sm:mt[22rem] mt-[87rem] z-40'>
         <h1 className='text-cyan-300 md:text-2xl xl:text-5xl text-[20px] md:mt-[80rem] xl:mt-[88rem] mt-[72rem] font-bold text-center'>
            Technical Skills
         </h1>
         <div className='grid place-content-center mt-5 m-auto'>
            
                 <div>
                    <h1 className='text-white xl:text-2xl md:text-xl pb-2 text-center text-lg '>
                        Programming Languages
                    </h1>
                  </div>
         <div className='grid grid-cols-4  gap-2 place-content-center m-auto'>
                 
                  <h1 className='text-white '>  <IoLogoHtml5 size={45} /></h1>
                  <h1 className='text-white '>  <IoLogoCss3 size={45} /></h1>
                  <h1 className='text-white '>  <BiLogoJavascript size={45}  /></h1>
                  <h1 className='text-white '>  <SiCplusplus size={45} /></h1>
                  <h1 className='text-white '>  <SiTailwindcss size={45} /></h1>
                  <h1 className='text-white '>  <FaReact size={45} /> </h1>
                  <h1 className='text-white '>  <RiNextjsFill size={45} /> </h1>
        </div>
            

                 <div className='mt-10'>
                    <h1 className='text-white xl:text-2xl md:text-xl pb-2 text-center text-lg '>
                        Tools
                    </h1>
                  </div>
        <div className='grid grid-cols-4  gap-2 place-content-center m-auto'>
                  
                  <h1 className='text-white '>  <VscVscode size={45} /></h1>
                  <h1 className='text-white '>  <RiFirebaseFill size={45} /></h1>
                  <h1 className='text-white '>  <FaGithub  size={45}  /></h1>
                  <h1 className='text-white '>  <FaGitAlt  size={45} /></h1>
                  <h1 className='text-white '>  <SiRender  size={45} /></h1>
                 
        </div>
            
            
            
           
            
            
            
            
            

           
            
            
            
            
          
         </div>
    </div>
  )
}

export default Technical_skills

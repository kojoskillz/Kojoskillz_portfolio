"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title:"About", path: "#about" },
    { title:"Projects", path: "#projects" },
    { title:"Blog", path: "#blog" },
   
    
];


const Navbar = () => {
        const [nav, setNav]= useState(false)

        const toggleNav = () => {
            setNav (!nav)
        }

        const closeNav = () => {
            setNav (false)
        }

        const menuVariants = {
            open: { 
                x: 0,
                transition: {
                    stiffness: 20,
                    damping: 15
                }
            },
            closed: {
                x:'-100%',
                transition: {
                    stiffness: 20,
                    damping: 15
                }

            }
        }


    return (
            <div className='text-white/80 pt-6 bg-black '>
                  <div className='hidden md:flex items-center px-4 mx-auto max-w-[500px]'>
                      <ul className='flex flex-row p-3 space-x-8 '>
                          {navLinks.map((link, index) => (
                            <li key={index} >
                                <Link href={link.path}>
                                   {link.title}
                                </Link>
                            </li>
                          ))}

                          <li>
                            <a href="#contact" className='group'>
                               <h1>
                                    Contact Me
                               </h1>
                                 <div className='relative'>
                                    <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-300 rounded-full
                                                    group-hover:w-full '>
                                    </div>
                                 </div>
                            </a>
                          </li>
                      </ul>

                  </div>


                  {/* responsiveness */}
          <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border-2 rounded-lg border-white/70 p-2 z-50 text-white/60 '>
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

             <motion.div
               initial={false}
               animate={nav ? 'open' : 'closed'}
               variants={menuVariants}
               className="fixed left-0 top-0 w-full z-40 bg-black/90"
             >
                <ul className='text-4xl font-semibold my-24 text-center space-y-6 '>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}

                        <li>
                            <a href="#contact" className='group'>
                               <h1>
                                    Contact Me
                               </h1>
                                 <div className='relative'>
                                    <div className='absolute w-16 place-content-center flex ml-[6rem] h-1 transition-all duration-300 ease-out bg-orange-300 rounded-full
                                                    group-hover:w-[12rem] '>
                                    </div>
                                 </div>
                            </a>
                          </li>

                </ul>
                       
             </motion.div>



{/* ends */}
            </div>
  )
};

export default Navbar

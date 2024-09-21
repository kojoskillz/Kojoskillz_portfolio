import TextReveal from "./magicui/text-reveal";
import img1 from "../app/assets/img.png"
import Image from 'next/image';


export  default function TextRevealDemo() {
  return (
    <div className="-z-0 mt-[6rem] lg:mt-[20rem] md:-mt-[10rem] sm:-mt-[10rem] xs:-mt-[10rem] grid lg:flex md:grid sm:grid text-xs:grid">

    <div className='overflow-y-hidden  mb-[10rem] '>
    <div className="container">
    <div className="box">
        <div className="content">
          <Image 
            src={img1}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
            className="img1"
          />
        </div>
    </div>
    </div>

</div>

    <div className="z-10 text-left md:text-nowrap max-md:w-full m-x-4 grid xl:mt-[2rem] lg:-mt-[2rem] xl:tracking-tight-[12rem] lg:tracking-tighter md:tracking-tighter-[2rem] tracking-tighter min-h-[6rem] -mt-[10rem] lg:text-[10px] md:text-sm sm:text-sm items-center font-light justify-center font-sans bg-black dark:bg-black">
       
      <TextReveal  text="Hi, I'm Kwadwo Nyarko based in Ghana, a software engineer extraordinaire! Specialized in Frontend-Engineering. Websites are my jam I conjure up digital magic one line of code at a time
                        When I'm not geeking out over code, I'm crafting websites that makes you go WOW!
                         " />
    </div>

    {/* button for cv */}
      <button className="buttonDownload z-10 mt-[47rem] ml-[2rem] xl:mt-[23rem] xl:ml-[25rem] lg:mt-[20rem] md:mt-[80rem] sm:mt-[30rem] xs:mt-[20rem]  xl:grid lg:grid md:grid sm:grid xs:grid">Download CV</button>
            
</div>
  );
}

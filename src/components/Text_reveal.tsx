import TextReveal from "./magicui/text-reveal";
import img1 from "../app/assets/img.png"
import Image from 'next/image';


export  default function TextRevealDemo() {
  return (
    <div className="mt-[6rem] lg:mt-[20rem] md:-mt-[10rem] sm:-mt-[10rem] xs:-mt-[10rem] grid lg:flex md:grid sm:grid text-xs:grid">

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

    <div className="z-10 grid xl:tracking-tighter lg:tracking-tighter md:tracking-tigjter tracking-tighter min-h-[6rem] -mt-[10rem] lg:text-[10px] md:text-sm sm:text-base items-center font-light justify-center font-sans bg-black dark:bg-black">
       
      <TextReveal text="Hi, I'm Kwadwo Nyarko based in Ghana, a software engineer extraordinaire! 
                        Websites are my jam I conjure up digital magic one line of code at a time
                        When I'm not geeking out over code, I'm crafting websites that makes you go WOW!
                         " />
    </div>
            
</div>
  );
}

import BlurIn from "./magicui/blur-in";
import img1 from "../app/assets/img.png"
import Image from 'next/image';


const BlurInDemo = () => {
  return (

    <div className="grid mt-20 xl:flex lg:flex md:grid sm:grid xs:grid ">

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

    <BlurIn
      word=" Hi, I'm Kwadwo Nyarko based in Ghana, a software engineer extraordinaire! Specialized in Frontend-Engineering.
             Websites are my jam I conjure up digital magic one line of code at a time.
              When I'm not geeking out over code, I'm crafting websites that makes you go WOW!"
      className="font-semi-bold text-white mx-5 mt-5 dark:text-white"
    />
     {/* button for cv */}
     <button className="buttonDownload buttonX z-10 mt-[42rem] ml-[1rem] xl:mt-[20rem] xl:ml-[25rem] lg:mt-[20rem] md:mt-[80rem] sm:mt-[30rem] xs:mt-[20rem]  xl:grid lg:grid md:grid sm:grid xs:grid">Download CV</button>
      </div>
  );
};
export default BlurInDemo;

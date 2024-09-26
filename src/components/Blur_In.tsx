import BlurIn from "./magicui/blur-in";
// import img1 from "../app/assets/img.png"
// import Image from 'next/image';


const BlurInDemo = () => {
  return (

    <div className="grid gap-28 md:gap-3 sm:gap-3 place-content-center relative mt-20 xl:ml-[12rem] xl:mr-[1rem]  lg:mr-[10rem] xl:flex lg:flex md:flex sm:grid xs:grid ">

    {/* <div className="container mb-[-7rem] lg:ml-[10rem] xl:ml-[7rem] ">
    <div className="box">
        <div className="content">
          <Image 
            src={img1}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
            className="img1  "
          />
        </div>
    </div>
    </div> */}

     {/* button for cv */}
     <button className="buttonDownload z-10 mt-[42rem] ml-[1rem] md:ml-[40rem]  lg:m-auto xl:mt-[20rem] lg:mt-[20rem] md:mt-[80rem] sm:mt-[30rem] xs:mt-[20rem]">Download CV</button>
      </div>
  );
};
export default BlurInDemo;

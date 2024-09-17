import NumberTicker from "./magicui/number-ticker";

const  NumberTickerDemo = () => {
  return (
    <div className="mb-10 mt-16">
    <p className="whitespace-pre-wrap text-8xl m-auto  lg:flex md:grid sm:grid xs:grid grid place-content-center overflow-x-hidden overflow-y-hidden gap-10 font-medium tracking-tighter bg-black   text-white dark:text-white">
     <div className="border-2 border-white md:w-[20rem] lg:w-[20rem]  grid place-content-center p-5 rounded-3xl  border-solid ">
         <NumberTicker value={165} />
         <h1 className="text-white/80 font-sans text-[16px]  text-center tracking-wide font-light" >Projects Completed</h1>
     </div>

     <div className="border-2 border-white  md:w-[20rem] lg:w-[20rem]  grid place-content-center p-5 rounded-3xl  border-solid ">
         <NumberTicker value={230} />
         <h1 className="text-white/80 font-sans text-[16px]  text-center tracking-wide font-light" >Awards</h1>
     </div>

     <div className="border-2 border-white md:w-[20rem] lg:w-[20rem]  grid place-content-center   p-5 rounded-3xl  border-solid ">
         <NumberTicker value={4253} />
         <h1 className="text-white/80 font-sans text-[16px] text-center tracking-wide font-light" >Codes Committed and  <br /> still counting...</h1>
     </div>
    </p>
    
    </div>
   
  );
};

export default NumberTickerDemo;

import Navbar from "../components/Navbar";
import SparklesPreview from "../components/Homepage";
import NumberTickerDemo from "../components/Number_ticker";
import BlurInDemo from "../components/Blur_In";
import TimelineDemo  from "../components/Timeline";
import Technical_skills  from "../components/Technical_skills";
import VortexDemo  from "../components/Vortex";
import { AnimatedPinDemo } from "../components/Project_card";
import '../app/globals.css';
import { BentoGridSecondDemo } from "../components/Bento_Grid";
import { GlobeDemo } from "../components/Globe";




export default function Home() {
  return (
    <>
        <Navbar />
        <SparklesPreview />
        <NumberTickerDemo />
        <GlobeDemo />
        <BentoGridSecondDemo />
        <BlurInDemo />
        <TimelineDemo />
        <Technical_skills />
        <AnimatedPinDemo />
        <VortexDemo />
       
    </>

  );
}

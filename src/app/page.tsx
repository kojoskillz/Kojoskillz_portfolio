import '../app/globals.css';
import Navbar from "../components/Navbar";
import SparklesPreview from "../components/Homepage";
// import NumberTickerDemo  from "../components/Number_ticker";
import BlurInDemo from "../components/Blur_In";
import TimelineDemo  from "../components/Timeline";
import Technical_skills  from "../components/Technical_skills";
import VortexDemo  from "../components/Vortex";
import { AnimatedPinDemo } from "../components/Project_card";
import { BentoGridSecondDemo } from "../components/Bento_Grid";
import { GlobeDemo } from "../components/Globe";
import GridPatternDashed from "../components/Dashedbg";
import { MarqueeDemo } from "../components/Marquee";
import BackgroundGradientAnimationDemo from '../components/Bg-Gradient';




export default function Home() {
  return (
    <>
        <Navbar />
        <SparklesPreview />
        {/* <NumberTickerDemo /> */}
        <GlobeDemo />
        <GridPatternDashed />
        <BentoGridSecondDemo />
        <BackgroundGradientAnimationDemo />
        <BlurInDemo />
        <TimelineDemo />
        <Technical_skills />
        <AnimatedPinDemo />
        <MarqueeDemo />
        <VortexDemo />
       
    </>

  );
}

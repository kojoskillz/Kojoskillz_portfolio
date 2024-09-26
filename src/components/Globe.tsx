"use client";
import Globe from "@/components/magicui/globe";

export function GlobeDemo() {
  return (
    <div className="hidden relative  h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      
      {/* <Globe className="top-16" /> */}
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}

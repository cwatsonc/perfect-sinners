import { StaticImageData } from "next/image";
import Image from "next/image";
import React from 'react';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};


const Hero: React.FC<React.PropsWithChildren<HeroProps>> = (props: React.PropsWithChildren<HeroProps>) => {
  return (<div className="relative h-screen">
    <div className="filter absolute -z-10 inset-0 bg-black/30 backdrop-brightness-50 backdrop-saturate-50">
      {/* <Image
        className="filter backdrop-brightness-50 bg-white/30"
        src={props.imgData}
        alt={props.imgAlt}
        fill
        style={{ objectFit: 'cover' }}
      /> */}
      <div className="absolute inset-0" />
    </div>
    <div className="pt-48 flex justify-center">
      <h1 className="text-white text-6xl">{props.title}</h1>
    </div>
    <div className="flex justify-center items-center justify-items-stretch">{props.children}</div>
  </div>)
}

export default Hero;


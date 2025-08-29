"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import logoIBM from "../../../../public/logo/ibm.png";
import logomicrosoft from "../../../../public/logo/microsoft.png";

// Dynamically import Marquee
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const Cursor = () => {
  const imageLogo = [
    { id: 1, src: logoIBM, alt: "IBM Logo" },
    { id: 2, src: logomicrosoft, alt: "Microsoft Logo" },
    { id: 3, src: logoIBM, alt: "IBM Logo" },
    { id: 4, src: logomicrosoft, alt: "Microsoft Logo" },
    { id: 5, src: logoIBM, alt: "IBM Logo" },
    { id: 6, src: logomicrosoft, alt: "Microsoft Logo" },
    { id: 7, src: logoIBM, alt: "IBM Logo" },
    { id: 8, src: logomicrosoft, alt: "Microsoft Logo" },
  ];

  // Repeat logos for a longer marquee track
  const repeatedLogos = Array(3).fill(imageLogo).flat();

  return (
    <div className="h-28 flex items-center w-full">
      <Marquee pauseOnHover={true} autoFill={true} speed={50}>
        <div className="flex items-center gap-5 md:gap-10 lg:gap-32">
          {repeatedLogos.map((logo, id) => (
            <div key={id}>
              <Image src={logo.src} alt={logo.alt} width={150} height={150} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Cursor;

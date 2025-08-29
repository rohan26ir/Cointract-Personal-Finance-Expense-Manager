"use client";

import Lottie from "lottie-react";
import notFound from "../../public/lottie/404ErrorBg.json";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-1">
      <div className="   ">
        <div className=" border-rose-500">
          <Lottie
            animationData={notFound}
            loop
            autoplay
            // style={{ width: "100%", height: '100%',  }}
            className="w-[100%] md:w-[80%] lg:w-[60%] h-[300px] md:h-[600px] lg:h-[800px] mx-auto"
          />
        </div>
      </div>

      <div className="">
        {/* <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p> */}
        <a
          href="/"
          className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 md:text-3xl lg:px-10 lg:py-4 rounded text-xl lg:text-3xl"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
"use client";

import React from "react";
// import Lottie from "lottie-react";
// import contactus from "/lottie/contactusLottie.json";
// import contactus from "../../../../../public/lottie/contactusLottie.json";
import FormFooter from "./components/FormFooter";
import FormMain from "./components/FormMain";

const Page = () => {
  return (
    <div>
      <div className="w-[100%] lg:w-[80%] mx-auto ">

        <section className="border mb-3 rounded-lg  p-5 md:p-10">
          <FormMain></FormMain>
        </section>


        <section>
            <FormFooter></FormFooter>
        </section>

      </div>
    </div>
  );
};

export default Page;

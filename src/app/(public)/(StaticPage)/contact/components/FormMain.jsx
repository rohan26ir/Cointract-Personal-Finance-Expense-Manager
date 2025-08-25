"use client";

import React from "react";
import Lottie from "lottie-react";
// import contactus from "/lottie/contactusLottie.json";
import contactus from "../../../../../../public/lottie/contactusLottie.json";
import { Phone, Send } from "lucide-react";

const FormMain = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full ">
          {/* left side text/image*/}
          <div className="w-full ">
            <h2 className="text-4xl font-bold">Get in touch today</h2>
            <p className="text-lg w-[80%]">
              Have a question or need assistance? Our team is ready to help you
              with inquiries, support, or collaboration opportunities.
            </p>

            <div className="bg-black text-white rounded-lg mt-5">
              <Lottie
                animationData={contactus}
                loop
                autoplay
                style={{ width: "100%", height: 400 }}
              />

              <div className="flex flex-col md:flex-row gap-2 p-5 border-t">
                <div className="flex gap-2 justify-center items-center p-2 border w-full md:w-1/2 cursor-pointe bg-white/20 cursor-pointer ">
                  <Phone />
                  <p>(414) 687 - 5892</p>
                </div>
                <div className="flex gap-2 justify-center items-center p-2 border w-full md:w-1/2 cursor-pointe bg-white/20 cursor-pointer ">
                  <Send />
                  <p>contact@company.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* right side form */}
          <div className="w-[100%] bg-white text-black rounded-lg shadow p-5 md:p-10 border ">
            <form className="flex flex-col gap-5">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded"
              />

              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded"
              />
              <label htmlFor="">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="border p-3 rounded"
              />
              <label htmlFor="">Message</label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="border p-3 rounded"
              ></textarea>
              <button className="bg-black text-white p-3 rounded hover:bg-black/80 transition cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMain;

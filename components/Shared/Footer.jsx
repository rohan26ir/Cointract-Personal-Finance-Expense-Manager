"use client";

import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerPages = [
    { id: 1, name: "Privacy Policy", href: "/privacy" },
    { id: 2, name: "Terms & Conditions", href: "/terms" },
    { id: 4, name: "Cookie Policy", href: "/cookies" },
  ];

  const social = [
    {
      id: 1,
      name: "Facebook",
      icon: <Facebook />,
      href: "https://facebook.com",
    },
    { id: 2, name: "Twitter", icon: <Twitter />, href: "https://twitter.com" },
    { id: 3, name: "YouTube", icon: <Youtube />, href: "https://youtube.com" },
    {
      id: 4,
      name: "LinkedIn",
      icon: <Linkedin />,
      href: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Instagram",
      icon: <Instagram />,
      href: "https://instagram.com",
    },
  ];

  const Pages = [
    { id: 1, name: "Dashboard", href: "/dashboard" },
    { id: 2, name: "Transactions", href: "/transactions" },
    { id: 3, name: "Budgets", href: "/budgets" },
    { id: 4, name: "Reports", href: "/reports" },
    { id: 5, name: "Goals", href: "/goals" },
  ];

  const Infos = [
    { id: 1, name: "About Cointract", href: "/about" },
    { id: 2, name: "Blog & Insights", href: "/blog" },
    { id: 3, name: "How It Works", href: "/how-it-works" },
    { id: 4, name: "Pricing", href: "/pricing" },
    { id: 5, name: "Careers", href: "/careers" },
  ];

  const Supports = [
    { id: 1, name: "Help Center", href: "/help" },
    { id: 2, name: "FAQs", href: "/faqs" },
    { id: 3, name: "Contact Support", href: "/support" },
    { id: 4, name: "Community Forum", href: "/community" },
    { id: 5, name: "Feedback", href: "/feedback" },
  ];

  // https://footers-elements-brixtemplates.webflow.io/

  return (
    <div className="">
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-20 ">

          <div className="w-full">
            {/* logo with des */}
            <div className="flex flex-col gap-3  w-auto ">
              <Image
                src="https://assets.website-files.com/63d3ffd80311750772776aa4/63d3ffd8031175dd7b776afe_placeholder-logo-webflow-template-brix-templates.svg"
                width={150}
                height={150}
                alt="Picture of the author"
              />

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
              </p>

              {/* logo social */}
              <div className="flex justify-between items-center w-60 gap-2">
                {social.map((itemIcon) => (
                  <Link key={itemIcon.id} href={itemIcon.href}>
                    <div className="bg-gray-300 hover:bg-sky-200 w-16 h-16 mx-auto flex justify-center items-center rounded-2xl">
                       <div className="text-shadow-blue-950">{itemIcon.icon}</div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-20 ">
            {/* pages */}
            <div className="flex flex-col gap-1 w-[85%] ">
              <h2 className="text-3xl font-bold">Pages</h2>
              {Pages.map((page) => (
                <Link key={page.id} href={page.href}>
                  {page.name}
                </Link>
              ))}
            </div>

            {/* Contact us */}
            <div className="flex flex-col gap-1 w-[85%]  ">
              <h2 className="text-3xl font-bold">Contact</h2>
              {Pages.map((page) => (
                <Link key={page.id} href={page.href}>
                  {page.name}
                </Link>
              ))}
            </div>

            {/* Contact us */}
            <div className="flex flex-col gap-1 w-[85%] ">
              <h2 className="text-3xl font-bold">Support</h2>
              {Supports.map((Support) => (
                <Link key={Support.id} href={Support.href}>
                  {Support.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* go to top */}
        <div className="flex justify-end items-center  py-5">
          <Link href={"/"}>
            <div className="flex items-center justify-center h-10 w-10 bg-blue-300 rounded-full overflow-hidden relative"
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ArrowUp />

              {/* animation */}
              <div className="absolute h-20 w-20 rounded-full bg-fuchsia-500/60 animate-pulse "></div>


            </div>
          </Link>
        </div>


        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 mb-10  pt-14">
          <div>Copyright © 2025 | All Rights Reserved</div>
          <div className="flex gap-3">
            {footerPages.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

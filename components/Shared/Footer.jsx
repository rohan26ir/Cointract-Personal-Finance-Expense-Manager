import { Facebook, icons, Youtube,Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerPages = [
  { id: 1, name: "Privacy Policy", href: "/privacy" },
  { id: 2, name: "Terms & Conditions", href: "/terms" },
  { id: 3, name: "Security Policy", href: "/security" },
  { id: 4, name: "Cookie Policy", href: "/cookies" },
];

const social = [
  { id: 1, name: "Facebook", icon: <Facebook />, href: "https://facebook.com" },
  { id: 2, name: "Twitter", icon: <Twitter />, href: "https://twitter.com" },
  { id: 3, name: "YouTube", icon: <Youtube />, href: "https://youtube.com" },
  { id: 4, name: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com" },
  { id: 5, name: "Instagram", icon: <Instagram />, href: "https://instagram.com" },
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
      <Youtube />
      <div className="container mx-auto ">

        <div className="flex justify-between  gap-20 ">
          {/* logo with des */}
          <div className="flex flex-col gap-3  w-full">
            <Image
              src="https://assets.website-files.com/63d3ffd80311750772776aa4/63d3ffd8031175dd7b776afe_placeholder-logo-webflow-template-brix-templates.svg"
              width={150}
              height={150}
              alt="Picture of the author"
            />

            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>

            {/* logo social */}
              <div className="flex justify-between items-center">
                {
                  social.map((itemIcon) => (
                    <Link key={itemIcon.id} href={itemIcon.href}>{itemIcon.icon}</Link>
                  )
                )
                }

                
              </div>

          </div>
          {/* pages */}
          <div className="flex flex-col gap-1 w-[85%] ">
            <h2 className="text-3xl font-bold">Pages</h2>
            {
              Pages.map((page) => (
                <Link key={page.id} href={page.href}>{page.name}</Link>
              ))
            }
          </div>
          {/* Contact us */}
          <div className="flex flex-col gap-1 w-[85%]  ">
            <h2 className="text-3xl font-bold">Contact us</h2>
            {
              Pages.map((page) => (
                <Link key={page.id} href={page.href}>{page.name}</Link>
              ))
            }
          </div>
          {/* Contact us */}
          <div className="flex flex-col gap-1 w-[85%] ">
            <h2 className="text-3xl font-bold">Contact us</h2>
            {
              Supports.map((Support) => (
                <Link key={Support.id} href={Support.href}>{Support.name}</Link>
              ))
            }
          </div>
          

        </div>

        {/* go to top */}
          <div className="flex justify-end items-center  py-5">
            <Link href={"/"}>
              <div className="flex items-center justify-center h-10 w-10 bg-amber-600 rounded-full">
                <ArrowUp />
              </div>
            </Link>
          </div>

        <div className="flex justify-between items-center py-2  pt-14">
          <div>Copyright © 2025 | All Rights Reserved</div>
          <div className="flex gap-3">
            {footerPages.map((item) => (
              <Link key={item.id} href={item.href}>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

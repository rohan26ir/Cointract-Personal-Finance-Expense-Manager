import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerPAge = [
    { id: 1, name: "Privacy Policy", href: "/" },
    { id: 2, name: "Terms and Conditions", href: "/" },
  ];

  const social =[
    {id: 1, name:"Facebook",   icon: "", href:"" },
    {id: 2, name:"Twtter",     icon: "", href:"" },
    {id: 3, name:"Website",     icon: "", href:"" },
    {id: 4, name:"Whatsapp",     icon: "", href:"" },
    {id: 5, name:"Instragram", icon: "", href:"" }
  ]


  // https://footers-elements-brixtemplates.webflow.io/

  return (
    <div className="">
      <div className="container mx-auto ">

        <div className="flex justify-between">
          {/* logo with des */}
          <div>
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
                    <Link key={itemIcon.id} href={itemIcon.href}>{itemIcon.name}</Link>
                  )
                )
                }
              </div>

          </div>
          {/* pages */}
          <div></div>
          {/* social */}
          <div></div>
          {/* go to top */}
          <div>
            <Link href={"/"}>
              <div className="flex items-center justify-center h-10 w-10 bg-amber-600 rounded-full">
                Top
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center py-2  pt-14">
          <div>Copyright © 2025 | All Rights Reserved</div>
          <div className="flex gap-3">
            {footerPAge.map((item) => (
              <Link key={item.id} href={item.href}>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

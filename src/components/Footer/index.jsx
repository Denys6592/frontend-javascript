import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const MenuList = [
    {
      title: "Why Choose Us",
    },
    {
      title: "Core Features",
    },
    {
      title: "Explore Plans",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex justify-center w-full py-10 border-y-[1px]">
        <div className="flex justify-between items-center w-[1440px]">
          <Link
            href="/"
            className="flex items-center justify-start gap-3 cursor-pointer w-[112px]">
            <Image src="/image/logo.svg" alt="logo" width={50} height={50} />
          </Link>
          <ul className="flex list-none gap-10 font-jost text-base capitalize">
            {MenuList.map((item, index) => (
              <li key={index} className="hover:underline">
                <Link href={"#"}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Link href="https://linkedin.com" target="_blank">
              <PiLinkedinLogo size={24} color="#171718" />
            </Link>
            <Link href="https://instragram.com" target="_blank">
              <FaInstagram size={24} color="#171718" />
            </Link>
            <Link href="https://x.com" target="_blank">
              <FaXTwitter size={24} color="#171718" />
            </Link>
          </div>
        </div>
      </div>
      <p className="py-8 font-jost text-base text-center">
        © 2024 TheFreelanceWebsite, All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;

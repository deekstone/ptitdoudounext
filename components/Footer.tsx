"use client";

import React from "react";
import Image from "next/image";
import { telephoneNumber, whatsappLink } from "@utils/constants";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row  self-center border-t border-blue-gray-100 py-10 mt-10 gap-20 justify-center">
        <div className=" px-5 w-full sm:w-[500px]   self-center">
          <h5 className="mb-5 text-2xl font-MontserratMedium">About us</h5>
          <p className="text-xl leading-8 font-MontserratThin">
            Welcome to PtitDoudou, the premier online destination for trendy and
            stylish kids clothing in Lebanon. With a passion for fashion and a
            commitment to quality, we bring you an extensive collection of
            adorable outfits designed to make your little ones stand out.
          </p>
        </div>
        <div>
          <div>
            <p className=" self-center text-center  mb-5 text-2xl font-MontserratMedium">
              Contact Us
            </p>
            <p
              className=" self-center text-center text-l font-MontserratMedium text-primary cursor-pointer"
              onClick={() => {
                window.open(whatsappLink);
              }}
            >
              Whatsapp: {telephoneNumber}
            </p>
          </div>
          <div className=" flex flex-row align-middle justify-center mt-5">
            <a
              href="https://www.instagram.com/ptitdoudou.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/InstagramIcon.svg"}
                width={50}
                height={50}
                alt={""} //TODO: add alt text
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.facebook.com/people/Ptitdoudoume/100077701394852"
              target="_blank"
              rel="noopener noreferrer"
              className="flex  justify-center align-middle "
            >
              <Image
                src={"/facebookIcon.svg"}
                width={30}
                height={30}
                alt={""} //TODO: add alt text
                className="cursor-pointer self-center"
              />
            </a>
          </div>
        </div>
      </div>
      <div className=" self-center border-t border-blue-gray-100 py-10">
        <p className=" self-center text-center">© 2023, Ptit Doudou</p>
      </div>
    </footer>
  );
}

export default Footer;

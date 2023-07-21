import React from "react";
import { RiLinkedinFill, RiWhatsappFill, RiTiktokFill } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-screen bg-zinc-900 h-full flex justify-center self-end items-center">
      <div className="md:h-44 h-[213px] flex flex-wrap w-[1200px] justify-center md:items-center py-[40px]">
        <div className="mx-[5%] w-full h-14 flex flex-wrap gap-[40px] items-center justify-between">
          <span className="h-[56px] w-[300px] flex flex-col gap-[10px]">
            <p className="text-white text-xs font-normal">Follow Us</p>
            <div className="flex gap-[15px]">
              <div className="h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full hover:bg-[#0077b5] bg-slate-800">
                <div className="text-white text-[20px] ">
                  <RiLinkedinFill />
                </div>
              </div>
              <div className="hover:bg-black h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full  bg-slate-800">
                <div className="text-white  text-[20px] ">
                  <AiOutlineInstagram />
                </div>
              </div>
              <div className="hover:bg-[#1877F2] h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full  bg-slate-800">
                <div className="text-white  text-[20px] ">
                  <FaFacebookF />
                </div>
              </div>
              <div className="hover:bg-[#1877F2] h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full  bg-slate-800">
                <div className="text-white  text-[20px] ">
                  <AiOutlineTwitter />
                </div>
              </div>
              <div className="hover:bg-[#25D366] h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full  bg-slate-800">
                <div className="text-white  text-[20px] ">
                  <RiWhatsappFill />
                </div>
              </div>
              <div className="hover:bg-[black] h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full  bg-slate-800">
                <div className="text-white  text-[20px] ">
                  <RiTiktokFill />
                </div>
              </div>
              <div className="hover:bg-[#c4302b] h-[30px] grid place-items-center w-[30px] cursor-pointer rounded-full  bg-slate-800">
                <div className="text-white  text-[20px] ">
                  <BsFillPlayFill />
                </div>
              </div>
            </div>
          </span>
          <span className="text-white w-[300px] flex gap-[10px] h-[56px]">
            <p className="opacity-40 text-white text-xs font-normal leading-none">
              Privacy Policy
            </p>
            <p className="opacity-40 text-white text-xs font-normal leading-none">
              ·
            </p>
            <p className="opacity-40 text-white text-xs font-normal leading-none">
              Terms of Use
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

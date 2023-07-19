import React from "react";
import { PostImage } from "../PostImage";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function PostingImage({ addImageSuccessful }) {
  return (
    <main className="h-full w-screen flex justify-center">
      <div className="w-[1200px] h-full mb-[60px] mx-[5%]">
        <div className="flex  flex-col gap-[40px]">
          <NavLink
            to="/"
            className="text-blue-600 text-base font-normal leading-normal">
            <p className="w-[55px] h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="py-[3px] justify-start items-start gap-2.5 flex">
                <AiOutlineArrowLeft />
              </div>
              Blog
            </p>
          </NavLink>
          <h2 className=" text-zinc-900 text-4xl font-bold leading-[46.80px]">
            New post
          </h2>
        </div>

        <section className="flex max-w-[100%]  md:gap-[60px] justify-center md:mt-[60px]  mt-[20px] flex-wrap-reverse ">
          <div className="flex h-full grow gap-[40px] flex-col">
            <div className="flex flex-col flex-grow gap-[20px]   ">
              <p className="text-zinc-900 text-2xl font-semibold leading-[31.20px]">
                Add title*
              </p>
              <textarea
                placeholder="Our First Concert in the U.S.!"
                className="w-[100%] px-5   overflow-auto rounded-md py-[10px] border-solid border-neutral-300 border-2  resize-none  text-4xl font-semibold leading-[46.80px] h-[100px]"></textarea>
            </div>
            <div className="flex h-full grow flex-col">
              <di className="flex flex-col flex-grow gap-[20px] ">
                <p className="text-zinc-900 text-2xl font-semibold leading-[31.20px]">
                  Add text*
                </p>
                <textarea
                  placeholder="It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🇺🇸🎤"
                  className="w-[100%] px-5  overflow-auto rounded-md py-[10px] border-solid border-neutral-300 border-2  resize-none  text-base font-semibold leading-snug h-[200px]"></textarea>
              </di>
            </div>
          </div>
          <div className="justify-self-center">
            <PostImage addImageSuccessful={addImageSuccessful} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default PostingImage;

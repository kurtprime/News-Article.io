import React from "react";
import { PostImage } from "../PostImage";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

function PostingImage({ addImageSuccessful, url, setPosts, setUrl }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [btnDesign, setBtnDesign] = useState(false);

  const btnInteractions = `${
    btnDesign
      ? "bg-blue-600 cursor-pointer"
      : "cursor-not-allowed bg-neutral-300"
  } 
    w-[100%] md:w-[140px]  grow h-[50px] text-white text-base font-normal px-9 py-[13px]  rounded-md`;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = () => {
    if (title && text && url) {
      setPosts((current) => [
        {
          id: current.length + 1,
          title: title,
          text: text,
          author: "Anonymous (You)",
          image: url,
          date: `${months[month]} ${day}, ${year}`,
          likes: 0,
          isLiked: false,
          comments: [],
        },
        ...current,
      ]);
      setTitle("");
      setText("");
      setUrl("");
      alert("Blog has been posted in the main page");
    }
  };

  return (
    <main
      onMouseOver={() => {
        if (title && text && url) {
          setBtnDesign(true);
        } else {
          setBtnDesign(false);
        }
        console.log(url);
      }}
      className="min-h-screen w-screen flex justify-center">
      <div className="w-[1200px] h-full  mb-[60px] mx-[5%]">
        <div className="flex  mb-[60px] flex-col gap-[40px]">
          <NavLink
            to="/"
            className="text-blue-600 text-base font-normal leading-normal">
            <div className="w-[55px] h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="py-[3px] justify-start items-start gap-2.5 flex">
                <AiOutlineArrowLeft />
              </div>
              Blog
            </div>
          </NavLink>
          <h2 className=" text-zinc-900 text-4xl font-bold leading-[46.80px]">
            New post
          </h2>
        </div>

        <section className="flex max-w-[100%]  md:gap-[60px] justify-center md:mt-[60px]  gap-[20px] flex-wrap-reverse ">
          <div className="flex h-full grow gap-[40px] flex-col">
            <div className="flex flex-col flex-grow gap-[20px]   ">
              <p className="text-zinc-900 text-2xl font-semibold leading-[31.20px]">
                Add title*
              </p>
              <textarea
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (title && text && url) {
                    setBtnDesign(true);
                  } else {
                    setBtnDesign(false);
                  }
                }}
                placeholder="Our First Concert in the U.S.!"
                className="w-[100%] px-5   overflow-auto rounded-md py-[10px] border-solid border-neutral-300 border-2  resize-none  text-4xl font-semibold leading-[46.80px] h-[100px]"></textarea>
            </div>
            <div className="flex h-full grow flex-col">
              <div className="flex flex-col flex-grow gap-[20px] ">
                <p className="text-zinc-900 text-2xl font-semibold leading-[31.20px]">
                  Add text*
                </p>
                <textarea
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    if (title && text && url) {
                      setBtnDesign(true);
                    } else {
                      setBtnDesign(false);
                    }
                  }}
                  placeholder="It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🇺🇸🎤"
                  className="w-[100%] px-5  overflow-auto rounded-md py-[10px] border-solid border-neutral-300 border-2  resize-none  text-base font-semibold leading-snug h-[200px]"></textarea>
              </div>
            </div>
            <button onClick={handleSubmit} className={btnInteractions}>
              Post
            </button>
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

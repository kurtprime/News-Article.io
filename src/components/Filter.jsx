import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function Filter() {
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(true);

  const POSTS = `${
    toggle
      ? "bg-blue-600 text-white "
      : "bg-white text-gray-400 hover:text-blue-600"
  } text-[16px] font-normal leading-normal whitespace-nowrap w-[102px] h-[50px] px-5 py-[13px]   rounded-[40px] border  border-gray-400 hover:border-blue-600 justify-center items-center gap-[5px]  inline-flex`;
  const Favo = `${
    toggle
      ? "bg-white text-blue-600 hover:text-blue-600"
      : "bg-blue-600  text-white"
  } Favo  text-blue-600 text-[16px] font-normal leading-normal whitespace-nowrap w-[107px] h-[50px] px-5 py-[13px] rounded-[40px] text-gray-400  border border-gray-400 hover:border-blue-600 justify-center items-center gap-[5px] inline-flex`;
  const Add = `${
    open
      ? "bg-white text-gray-400 border-gray-400 hover:border-blue-600 hover:text-blue-600"
      : "bg-blue-600 text-white border-blue-600"
  } text-blue-600 text-[16px] font-normal leading-normal whitespace-nowrap w-[136px] h-[50px] px-5 py-[13px] rounded-lg border justify-center items-center gap-[5px] inline-flex`;

  return (
    <div className="filter">
      <div className="flex h-full w-screen justify-center">
        <div className="flex px-[5%] gap-[10px] w-[1200px] justify-between">
          <div className="flex  gap-[10px]">
            <button onClick={() => setToggle(true)} className={POSTS}>
              All posts
            </button>
            <button onClick={() => setToggle(false)} className={Favo}>
              Favorites
            </button>
          </div>
          <div className="">
            <button
              className={Add}
              onClick={() => {
                setOpen(!open);
              }}>
              <HiOutlinePlus size={70} /> Add post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsChatLeft, BsHeartFill, BsHeart } from "react-icons/bs";
import { useState } from "react";

function CardList({ post, setPosts }) {
  const [ID, setID] = useState("");

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  const handleLike = () =>
    setPosts((current) =>
      current.map((elem) => {
        if (elem.id === post.id) {
          return {
            ...elem,
            isLiked: !post.isLiked,
            likes: !post.isLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return elem;
      })
    );
  return (
    <section className="h-auto w-auto rounded-md place-self-auto">
      <div className="w-80  h-[165px]">
        <LazyLoadImage
          className="object-cover w-80 h-[165px] aspect-video rounded-t-md"
          src={post.image}
          height={165}
          width={320}
          alt={"https://via.placeholder.com/320x165"}
        />
      </div>
      <article className="w-80 h-[135px]    px-5 py-2.5 bg-slate-50 rounded-bl-md rounded-br-md flex-col justify-start  inline-flex">
        <div className="">
          <h3 className=" text-ellipsis  overflow-hidden whitespace-nowrap w-[280px] h-[26px] text-zinc-900 text-xl font-bold ">
            {post.title}
          </h3>
          <div className="border-b pb-[10px] border-grey-400">
            <p className=" pt-1 pb-[0px] mt-1 text-start text-ellipsis line-clamp-2 w-[280px] h-10 text-slate-500 text-sm font-normal leading-tight">
              {post.text}
            </p>
          </div>
        </div>
        <footer className="flex h-full mt-[10px] justify-between">
          <div className="flex gap-[5px] items-center h-full">
            <p className="text-center whitespace-nowrap  text-gray-400 text-[9px] font-normal leading-3">
              {post.date}
            </p>
            <p className="text-center text-gray-400 text-[8px] font-normal leading-[10.40px]">
              ·
            </p>
            <p className="text-center max-w-[110px] line-clamp-1 text-gray-400 text-[9px] font-normal leading-3">
              {post.author}
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="hover:text-blue-600 transition-all cursor-pointer text-gray-400 gap-[5px] flex justify-center items-center">
              <div className="hover:text-blue-600 transition-all text-gray-400 ">
                <BsChatLeft />
              </div>

              <p className="text-[9px] font-normal leading-3">
                {post.comments.length}
              </p>
            </div>
            <button className="cursor-pointer" onClick={handleLike}>
              {post.isLiked ? (
                <div className="flex hover:text-blue-600  flex-row justify-center items-center">
                  <div className="text-blue-600 flex flex-row gap-[5px] justify-center items-center">
                    <BsHeartFill />
                    <p className="text-gray-400 text-[9px] font-normal leading-3">
                      {kFormatter(post.likes)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex hover:text-blue-600  flex-row justify-center items-center">
                  <div className="hover:text-blue-600 text-gray-400 flex flex-row gap-[5px] justify-center items-center">
                    <BsHeart />
                    <p className="text-gray-400 text-[9px] font-normal leading-3">
                      {kFormatter(post.likes)}
                    </p>
                  </div>
                </div>
              )}
            </button>
          </div>
        </footer>
      </article>
    </section>
  );
}

export default CardList;

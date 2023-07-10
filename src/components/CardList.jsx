import { LazyLoadImage } from "react-lazy-load-image-component";

function CardList({ post }) {
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
        <footer className="flex h-full justify-between">
          <div className="flex gap-[5px] items-center h-full">
            <p className="text-center text-gray-400 text-[9px] font-normal leading-3">
              {post.date}
            </p>
            <p className="text-center text-gray-400 text-[8px] font-normal leading-[10.40px]">
              ·
            </p>
            <p className="text-center text-gray-400 text-[9px] font-normal leading-3">
              {post.author}
            </p>
          </div>
          <div className="flex items-center">start</div>
        </footer>
      </article>
    </section>
  );
}

export default CardList;

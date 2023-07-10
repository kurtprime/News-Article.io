import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function CardList({ post }) {
  return (
    <section className="h-auto w-auto rounded-md">
      <div className="w-80  h-[165px]">
        <LazyLoadImage
          className="object-cover w-80 h-[165px] rounded-t-md"
          src={post.image}
          height={165}
          width={320}
          alt={post.title}
        />
        {/* <img
          className="object-cover w-80 h-[165px] rounded-t-md"
          src={post.image}
          alt={post.title}
          loading="lazy"
        /> */}
      </div>
      <div className="w-80 h-[135px] aspect-video px-5 py-2.5 bg-slate-50 rounded-bl-md rounded-br-md flex-col justify-start items-start gap-5 inline-flex">
        HEllo WOrld {post.id}
        <div>{post.image}</div>
      </div>
    </section>
  );
}

export default CardList;

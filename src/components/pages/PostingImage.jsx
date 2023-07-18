import React from "react";
import { PostImage } from "../PostImage";
import { NavLink } from "react-router-dom";

function PostingImage({ addImageSuccessful }) {
  return (
    <main className="h-full w-full">
      <div className="h-[50%] w-[50%] flex items-center justify-center">
        <NavLink to="/">Goback</NavLink>
        <PostImage addImageSuccessful={addImageSuccessful} />
      </div>
    </main>
  );
}

export default PostingImage;

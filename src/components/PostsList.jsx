import { useState } from "react";
import CardList from "./CardList";
import Filter from "./Filter";

export const PostsList = ({ posts, setPosts }) => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.
  const [filter, setFilter] = useState(false);

  const mapCard = posts
    .filter((elem) => {
      if (filter) return elem.isLiked === true;
      return elem;
    })
    .map((post) => <CardList setPosts={setPosts} key={post.id} post={post} />);

  return (
    <>
      <Filter setFilter={setFilter} />
      <main className="w-full h-full flex justify-center mb-[60px] ">
        <div className=" flex  justify-center items-center w-[1200px] gap-[40px] flex-wrap mx-[5%]">
          {mapCard}
          {/* <CardList key={posts[0].id} post={posts[0]} /> */}
        </div>
      </main>

      {/* <h1>List of Post titles</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol> */}
    </>
  );
};

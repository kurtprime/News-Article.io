import CardList from "./CardList";
import Filter from "./Filter";

export const PostsList = ({ posts }) => {
  // TODO: the code below is just for demo,
  // so feel free to delete it and write your own.
  // document.getElementsByClassName("Post").style.backgroundColor = "blue";

  return (
    <>
      <Filter />
      <CardList key={posts[0].id} posts={posts[0]} />
      {/* <h1>List of Post titles</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol> */}
    </>
  );
};

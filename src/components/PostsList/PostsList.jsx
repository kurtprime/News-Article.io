export const PostsList = ({posts}) => {
  
  // TODO: the code below is just for demo, 
  // so feel free to delete it and write your own.
  return (
    <>
      <h1>List of Post titles</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
};

import { useState } from "react";
import postsData from "./posts.json";
import "./App.css";
import { PostsList } from "./components/pages/PostsList";
import PostingImage from "./components/pages/PostingImage";
import ErrorPage from "./components/pages/ErrorPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import PostID from "./components/pages/PostID";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [url, setUrl] = useState("");
  {
    /* <PostsList posts={posts} setPosts={setPosts} />
      <PostImage addImageSuccessful={handleImageSuccess} /> */
  }

  /*
    TODO:
    1. Install React router 
    2. Create several routes (and their corresponding React components): 
       main page (posts list), post page (/post/:id), new post page (/post/create)
    3. All the posts data will be stored in the state (hook above). 
       In order to manipulate this data (create new posts, etc), you need to 
       pass the setPosts function down the components tree.
       You can do it using React Context to avoid props drilling
       Note: this approach of storing all the data in the top-level component is not optimal,
       but for now (until we learn state management tools (Redux, etc.)) it's ok to use it like that. 
    4. For styling you can plain css files, or you can install and use SASS/SCSS - it's up to you.
    5. Additional (optional) task: in order to persist the posts data between page reloads, try to use 
       browser's localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
       Note: It's generally not a good idea (usually data comes from backend API and is stored on the server), 
       but until we learn how to interact with the API, for learning purposes - it's fine.

    Notes:
    1. PostImage is a pre-built component that uploads and returns an image URL. {addImageSuccessful} is a 
    prop from the component that is used to get the image file URL that you can attach to the post. No need
     to change any of the code of the component just use the function to get the image URL.
  */

  // Example usage of the addImageSuccessful prop

  //   <Route
  //   path="post/:id"
  //   element={
  //     <>
  //       <img src={posts[0].image} alt="asdsad" />
  //       <h2>HELLO</h2>
  //       <PostID setPosts={setPosts} posts={posts} />
  //     </>
  //   }
  // />

  const handleImageSuccess = (imageUrl) => {
    setUrl(imageUrl);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Layout />
          </>
        }>
        <Route
          index
          element={<PostsList posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="create"
          element={
            <>
              <PostingImage
                url={url}
                setUrl={setUrl}
                setPosts={setPosts}
                addImageSuccessful={handleImageSuccess}
              />
            </>
          }
        />
        <Route
          path="post/:id"
          element={<PostID setPosts={setPosts} posts={posts} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

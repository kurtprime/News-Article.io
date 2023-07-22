import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsChatLeft, BsHeartFill, BsHeart } from "react-icons/bs";

function PostID({ setPosts, posts }) {
  const { id } = useParams();
  const [cardID, setCardID] = useState(0);
  const [loading, setLoading] = useState(false);

  const indexOfID = () => {
    setCardID(posts.findIndex((element) => element.id === Number(id)));
    setLoading(true);
  };

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  const handleLike = () =>
    setPosts((current) =>
      current.map((elem) => {
        if (elem.id === posts[cardID].id) {
          return {
            ...elem,
            isLiked: !posts[cardID].isLiked,
            likes: !posts[cardID].isLiked
              ? posts[cardID].likes + 1
              : posts[cardID].likes - 1,
          };
        }
        return elem;
      })
    );

  const loveBtn = (
    <button className="cursor-pointer" onClick={handleLike}>
      {posts[cardID].isLiked ? (
        <div className="flex hover:text-blue-600  flex-row justify-center items-center">
          <div className="text-blue-600 flex flex-row gap-[5px] justify-center items-center">
            <BsHeartFill />
            <p className="text-gray-400 text-[9px] font-normal leading-3">
              {kFormatter(posts[cardID].likes)}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex hover:text-blue-600  flex-row justify-center items-center">
          <div className="hover:text-blue-600 text-gray-400 flex flex-row gap-[5px] justify-center items-center">
            <BsHeart />
            <p className="text-gray-400 text-[9px] font-normal leading-3">
              {kFormatter(posts[cardID].likes)}
            </p>
          </div>
        </div>
      )}
    </button>
  );

  setTimeout(indexOfID, 1000);

  const reveal = (
    <main className="min-h-[80vh] w-screen flex justify-center">
      <div className="flex flex-col gap-[40px] w-[1200px] mb-[60px] mx-[5%] h-full">
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
        <div className="flex justify-center gap-[40px] flex-wrap-reverse ">
          <div className="flex flex-col flex-grow">
            <h1 className="text-zinc-900 text-4xl font-bold leading-[46.80px]">
              {posts[cardID].title}
            </h1>
            <h6 className="flex items-center gap-[20px] mb-[45px] mt-[25px] text-gray-400 text-xs font-normal leading-none">
              <p className="flex items-center gap-[5px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a00b/0065/abedc297de3d90bdc126ee2c3243614c?Expires=1690761600&Signature=WLRxysMm2N1T1AwvvkT6XDkmudB22MXtHkiOxHzdMgl~bSc~ah2sCiDLVz3YcfObm5-zsMbIm~1wmrKKX65NJQq-eMRlXBx1RqHP5ON1HlrXiGKqOaPuZapU7-bgsP6sKHWJBrMxpFauvrVUVTq-I~0OeK925LeJG7ZNva5nqEWYDSmdf4YFtvcAFplxFHcZcpl3teds1jpjT3WAX3ENlubOicqfQlhwfVvli7ISGZHc6zR0se8n86bWQT5bV8nc5wLEe3eX0YNZlL4kpiIXOB2qsvH9HRClQDJbu58zjsiRCP1E2EbMLj9aCSv1KdYIPzPTfP7qrvrWUpL0meVH9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="profile"
                  className="rounded-full w-6 h-6 bg-contain object-cover"
                />

                {posts[cardID].author}
              </p>
              <div>{posts[cardID].date}</div>
            </h6>
            <h3 className="max-w-[590px] mb-[65px] text-zinc-900 text-base font-normal leading-normal">
              {posts[cardID].text}
              <div className="flex gap-[10px]  ">
                <div className="hover:text-blue-600 transition-all cursor-pointer text-gray-400 gap-[5px] flex mt-[20px] items-center">
                  <div className="hover:text-blue-600 transition-all text-gray-400 ">
                    <BsChatLeft />
                  </div>
                  <p className="text-[9px] font-normal leading-3">
                    {posts[cardID].comments.length}
                  </p>
                </div>
                <div className="grid place-items-center mt-[20px]">
                  {loveBtn}
                </div>
              </div>
            </h3>
            <label className="flex flex-col mb-[45px] flex-grow gap-[20px]">
              <h3 className="text-zinc-900 text-2xl font-semibold leading-[31.20px]">
                Leave a comment:
              </h3>
              <textarea
                placeholder="Love seeing you guys having fun together! Can't wait to hang out with you guys again! 🤗"
                className=" py-[15px] resize-none h-[100px] px-5 rounded-md border grow border-neutral-300 justify-start items-center gap-2.5 inline-flex text-zinc-900 text-base font-normal leading-tight"></textarea>
              <div className="flex justify-end">
                <button className=" h-[50px] px-9 py-[13px] md:w-[210px] w-[100%] bg-blue-600 text-white text-base font-normal rounded-md justify-center items-center gap-[5px] inline-flex">
                  send
                </button>
              </div>
            </label>
            <section className=" border-solid border-t-2 pt-[40px] border-[#EBEFF8]">
              <label className="">
                <h2 className="leading-[31.20px] text-zinc-900 text-2xl font-semibold ">
                  Comments:
                </h2>
                <div className="flex flex-col gap-[10px]">
                  {posts[cardID].comments.map((element, i) => (
                    <div
                      key={i}
                      className="flex flex-row border-slate-100 border-solid border-b-2 py-[20px]  gap-[10px]">
                      <div>
                        <img src="/images/icon.jpg" alt="" />
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <h6 className="text-slate-500 text-sm font-bold leading-[14px]">
                          {element.author}
                        </h6>
                        <p className="text-zinc-900 text-sm font-normal leading-tight">
                          {element.text}
                        </p>

                        <div className="flex flex-row gap-[15px] items-center">
                          <p className="text-gray-400 text-xs font-normal leading-none">
                            {element.date}
                          </p>
                          <button className="cursor-pointer">
                            {element.isLiked ? (
                              <div
                                onClick={() =>
                                  setPosts((current) =>
                                    current.map((elem) => {
                                      const updateComments = elem.comments.map(
                                        (comment) => {
                                          if (
                                            comment.author === element.author
                                          ) {
                                            return {
                                              ...comment,
                                              isLiked: !comment.isLiked,
                                            };
                                          }
                                          return comment;
                                        }
                                      );

                                      return {
                                        ...elem,
                                        comments: updateComments,
                                      };
                                    })
                                  )
                                }
                                className="flex hover:text-blue-600  flex-row justify-center items-center">
                                <div className="text-blue-600 flex flex-row gap-[5px] justify-center items-center">
                                  <div>
                                    <BsHeartFill />
                                  </div>

                                  <p className="text-gray-400 text-[9px] font-normal leading-3">
                                    {kFormatter(element.likes)}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div
                                onClick={() =>
                                  setPosts((current) =>
                                    current.map((elem) => {
                                      const updateComments = elem.comments.map(
                                        (comment) => {
                                          if (
                                            comment.author === element.author
                                          ) {
                                            return {
                                              ...comment,
                                              isLiked: !comment.isLiked,
                                            };
                                          }
                                          return comment;
                                        }
                                      );

                                      return {
                                        ...elem,
                                        comments: updateComments,
                                      };
                                    })
                                  )
                                }
                                className="flex hover:text-blue-600  flex-row justify-center items-center">
                                <div className="hover:text-blue-600 text-gray-400 flex flex-row gap-[5px] justify-center items-center">
                                  <div>
                                    <BsHeart />
                                  </div>
                                  <p className="text-gray-400 text-[9px] font-normal leading-3">
                                    {kFormatter(element.likes)}
                                  </p>
                                </div>
                              </div>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </label>
            </section>
          </div>
          <div>
            <LazyLoadImage
              height={320}
              width={410}
              className="rounded-[10px]"
              src={
                `${posts[cardID].image.includes("https:") ? "" : "/"}` +
                posts[cardID].image
              }
            />
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <>
      {loading ? (
        reveal
      ) : (
        <div className="min-h-[80vh] w-screen flex justify-center items-center">
          <div className="lds-hourglass"></div>
        </div>
      )}
    </>
  );
}

export default PostID;

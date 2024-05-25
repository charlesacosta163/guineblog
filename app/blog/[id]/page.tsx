"use client";

// Components
import Navbar from "@/app/ui/navbar";
import Buttons from "@/app/ui/blog-article/buttons";
import Comments from "@/app/ui/blog-article/comments";

// Data
import { getSpecificPost } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "./loading";

// React Markdown
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default async function Page({ params }: { params: { id: string } }) {
  const findBlog = await getSpecificPost(params.id);
  return (
    <>
      <Navbar />

      <section className="max-w-[1000px] w-full flex flex-col">
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col pb-6">
            <h1
              className="text-[2.5rem] font-title pt-8 pb-2 font-[800] 
             bg-gradient-to-r from-[#DB6885]  to-[#972239] bg-clip-text text-transparent
            "
            >
              {findBlog?.title}
            </h1>
            <span className="text-lg font-[500] text-red-800">
              Written by {findBlog?.name}
            </span>
          </div>

          <hr className="border-red-200" />

          <div className="flex flex-col gap-8">
            {findBlog?.imageLink && (
              <figure className="w-full flex flex-col items-center gap-1">
                <img
                  src={findBlog?.imageLink}
                  className="w-full h-auto rounded"
                />
                <figcaption className="text-subtitle opacity-80 text-sm">
                  {findBlog?.imageCaption}
                </figcaption>
              </figure>
            )}

            <p className="leading-8 py-8">
              <ReactMarkdown
                remarkPlugins={[remarkBreaks, remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                children={findBlog?.content}
              />
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="px-4 py-2 bg-red-300 self-start text-white rounded-[25px] shadow text-sm">
              {findBlog.category}
            </div>
          </div>

          <Buttons postID={findBlog._id} />

          <div className="flex flex-col gap-4 w-full mt-4">
            <Comments comments={findBlog.comments} />
          </div>
        </Suspense>
      </section>
    </>
  );
}

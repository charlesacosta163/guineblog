import Navbar from "@/app/ui/navbar";
import Body from "@/app/ui/body";
import Blogs from "@/app/ui/items/blogs";
import Categories from "./ui/categories";

import { IoAddOutline } from "react-icons/io5";
import { FaQuestion, FaRegKeyboard, FaPencil } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { Suspense } from "react";
import Link from "next/link";
import PrevBlogSkeleton from "./ui/skeletons/prev-blog-skeleton";

export default function Page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const { category } = searchParams;

  return (
    <>
      <Navbar />
      <Body>
        <section className="max-w-[1000px] w-full">
          <Categories />

          <div id="container" className="flex md:flex-col gap-4 py-8 relative">
            <div id="left" className="flex-[3] flex-col flex">
              <h1
                className="font-title font-[800] text-[2.5rem] pb-4
                bg-gradient-to-r from-[#DB6885]  to-[#cc4762] bg-clip-text text-transparent
              "
              >
                Blogs
              </h1>
              <div id="blog-container" className="w-full flex flex-col gap-4">
                <Suspense fallback={<PrevBlogSkeleton />}>
                  <Blogs thread={category} />
                </Suspense>
              </div>
            </div>

            <div id="right" className="flex flex-col gap-4 flex-1 self-start sticky md:static top-24 md:top-0">
              <div className="bg-[#ffd6ba] p-4 rounded-[20px]">
                <h2 className="font-[600] flex gap-2 items-center">
                  <FaRegKeyboard className="p-1 rounded-full bg-red-500 text-[#ffd6ba] text-[1.5rem]" />{" "}
                  <span className="text-red-500">
                    Using <b>GuineBlog</b>
                  </span>
                </h2>

                <div className="flex flex-col text-sm font-[500] gap-2 mt-4 text-red-400">
                  <span>
                    1. Use the <IoAddOutline className="inline" /> button to
                    create a new blog (must be{" "}
                    <span className="font-[600] underline">signed in</span>).
                  </span>
                  <span>
                    2. Use the <FiSearch className="inline" /> button to search
                    for blogs.
                  </span>
                  <span>
                    3. You can click specific threads to filter post categories.
                  </span>

                  <Link
                    href="/create"
                    className="px-3 py-2 hover:shadow-lg duration-200 font-[400] rounded-full self-start bg-red-400 text-white mt-2"
                  >
                    <FaPencil className="inline mr-1" /> Start writing
                  </Link>
                </div>
              </div>

              <div className="bg-[#ffd6ba] p-4 rounded-[20px]">
                <h2 className="font-[600] flex gap-2 items-center">
                  <FaQuestion className="p-1 rounded-full bg-red-500 text-[#ffd6ba] text-[1.5rem]" />{" "}
                  <span className="text-red-500">About</span>
                </h2>

                <p className="text-sm font-[500] text-red-400 mt-4">
                  My First Next.js Project!<br/>
                  <span className="text-[.75rem] text-gray-400">2024 - Charles Acosta </span>
                  <Link
                    href={"https://github.com/charlesacosta163"}
                    target="_blank"
                  >
                    <FaGithub className="text-[1.5rem] mt-4" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Body>
    </>
  );
}

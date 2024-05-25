import Navbar from "../ui/navbar";
import InputBar from "../ui/search/inputbar";
import { getPostsBySearch } from "../lib/data";
import BlogPreview from "../ui/items/blog-prev";
import { Suspense } from "react";

type BlogPrevID = {
  _id: string;
  name: string;
  category: string;
  title: string;
  content: string;
  imageLink: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: { title: string };
}) {
  const { title } = searchParams;
  let postsBySearch;

  if (title && title.length >= 3) {
    postsBySearch = await getPostsBySearch(title);
  } else postsBySearch = [];

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-8 max-w-[1000px] w-full">
        <div className="flex flex-col">
          <h1 className="font-title font-[800] text-[2.5rem] py-4
            bg-gradient-to-r from-[#DB6885]  to-[#972239] bg-clip-text text-transparent
          ">Search</h1>
          <InputBar placeholder="Search for a blog..." />
        </div>

        <div className="flex flex-col gap-4">
          {postsBySearch.length > 0 ? (
            postsBySearch?.map((e: BlogPrevID) => {
              return (
                <BlogPreview
                  id={e._id.toString()}
                  name={e.name}
                  category={e.category}
                  title={e.title}
                  content={e.content}
                  imageLink={e.imageLink}
                />
              );
            })
          ) : `${title || ""}`.length < 2 ? (
            <span>Minimum of 3 characters</span>
          ) : (
            <span>No results found</span>
          )}
        </div>
      </div>
    </>
  );
}

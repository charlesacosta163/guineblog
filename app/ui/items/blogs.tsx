import BlogPreview from "@/app/ui/items/blog-prev";
import { getAllPosts, getPostsByThread } from "../../lib/data";
import Image from "next/image";

type PrevBlog = {
  _id: string;
  name: string;
  category: string;
  title: string;
  content: string;
  imageLink: string;
};

export default async function Blogs({thread}: {thread: string}) {
  let allBlogs

  if (!thread)
     allBlogs = await getAllPosts();

  else
    allBlogs = await getPostsByThread(thread)

  return (
    <>
      {allBlogs.length > 0 ? allBlogs.map((e: PrevBlog) => {

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
      }) : 
      <div className="flex flex-col gap-4 items-center">
        <Image 
          src="/emptyblogs.svg"
          width={250}
          height={250}
          alt="No Blogs Displayed"
        />
        <span className="text-red-500 font-[500]">Blogs are empty. Come back later!</span>
      </div>
      }
    </>
  );
}

import Link from "next/link";
import { FaUser } from "react-icons/fa";

// React Markdown
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type BlogPrev = {
  id: string;
  name: string;
  category: string;
  title: string;
  content: string;
  imageLink: string;
};
export default function BlogPreview({
  id,
  name,
  category,
  title,
  content,
  imageLink,
}: BlogPrev) {
  function capitalize(str: string) {
    if (!str) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className="w-full bg-[#fff5ee] flex justify-between items-center gap-4 rounded-[20px] py-6 px-8 transition-all hover:shadow-xl">
      <div id="left" className="flex flex-col gap-3 flex-[3] items-start">
        <div className="font-[500] text-[#ff6961] flex gap-2 items-center text-sm">
          <FaUser />
          <span>{name}</span>
        </div>

        <div className="font-bold text-[1.1rem] line-clamp-1 bg-gradient-to-r from-[#DB6885]  to-[#972239] bg-clip-text text-transparent">{title}</div>
        <ReactMarkdown
          remarkPlugins={[remarkBreaks, remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="line-clamp-2 text-[.9rem] text-subtitle"
          children={content}
        />
        <div className="flex gap-4 items-center">
          <Link
            href={{
              pathname: `/blog/${id}`,
            }}
            className="bg-secondary hover:bg-ternary font-[500] px-4 py-2 rounded text-subtitle text-[.9rem]"
          >
            Read More
          </Link>
          <div className=" bg-category px-3 py-1 text-sm rounded-full text-subtitle opacity-80 shadow">
            {capitalize(category)}
          </div>
        </div>
      </div>

      {imageLink && (
        <div className="image flex-1">
          <img
            src={imageLink}
            alt="Article image"
            className="w-full h-full rounded"
          />
        </div>
      )}
    </div>
  );
}

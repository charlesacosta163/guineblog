import { getSpecificPost } from "@/app/lib/data";
import { Comment } from "@/app/lib/types";
import { FaUser } from "react-icons/fa6";

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <>
      {comments.map((e: Comment) => {
        return (
          <div
            key={e.id}
            className="flex flex-col gap-2 bg-red-200 rounded-[20px] p-6"
          >
            <h3 className="font-[500] text-[1.1rem] flex items-center gap-2 text-red-500"><FaUser className="text-sm" /> {e.name}</h3>
            <p>{e.comment}</p>
          </div>
        );
      })}
    </>
  );
}

"use client"
import { FaPaperPlane } from "react-icons/fa";
import { CommentState } from "@/app/lib/types";

import { postComment } from "@/app/lib/actions";
import { useUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function Prompt({ isShown, setIsShown, postID }: CommentState) {
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()
  const { pending } = useFormStatus()

  async function handlePostComment(event: React.FormEvent) {
    event.preventDefault(); // Prevent the default form submission
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const name = user?.fullName;
      const comment = formData.get("comment");

      if (!name) {
        throw new Error("User name is missing");
      }

      if (!comment) {
        throw new Error("Comment is missing");
      }

      await postComment(postID, name, comment.toString());
      router.refresh()
      setIsShown(false);

    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <>
      {isShown && (
        <form onSubmit={handlePostComment} className={`flex flex-col gap-2 w-full`}>
          <textarea name="comment" className="w-full p-8 rounded-[25px] min-h-[100px] resize-none opacity-90 outline-none" placeholder="Your response..."/>
          <div className="flex gap-4 items-center">
            
          <button type="submit" className={`rounded-full flex items-center gap-2 p-2 bg-blue-400 text-white self-start duration-200 hover:px-4 group`} disabled={pending}>
            <FaPaperPlane />
            <span className="hidden duration-200 group-hover:block text-sm">Submit</span>
          </button>
          <button className="hover:underline text-gray-700" onClick={() => setIsShown(prev => !prev)}>Cancel</button>
          </div>
        </form>
      )}
    </>
  );
}

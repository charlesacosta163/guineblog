"use client";

import Navbar from "../ui/navbar";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaDesktop, FaHtml5, FaMarkdown } from "react-icons/fa6";

import PreviewMD from "../ui/create-post/previewmd";

export default function Page() {

  const [content, setContent] = useState<string>("")

  const [showImagePrompt, setShowImagePrompt] = useState<Boolean>(false);
  const [showOutput, setShowOutput] = useState<Boolean>(false);

  const { isSignedIn, user } = useUser(); // Clerk User Object

  const router = useRouter();

  if (!isSignedIn) {
    router.replace('/sign-in')
  }

  async function createNewPost(formData: FormData) {
    try {
      const name = user?.fullName
      const category = formData.get("category")
      const title = formData.get("title")
      const content = formData.get("content")
      const imageLink = formData.get("imageLink")
      const imageCaption = formData.get("imageCaption")

      if (category && title && content) {
        const rawFormData = {
          name: name,
          category: category,
          title: title,
          content: content,
          imageLink: imageLink || "",
          imageCaption: imageCaption || "" ,
        };

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rawFormData),
        };
        
        const response = await fetch("http://localhost:5000/api/posts", options)

        if (response.ok){
          console.log("Blog Created!")
          setTimeout(() => {
            router.replace("/");
          }, 1000);
        }

        setShowImagePrompt(false);
        setContent("")

      } else {
        console.log("Please fill all the required forms!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-4 max-w-[1000px] w-full p-4">
        <h1 className="font-title font-[900] text-[2.5rem] self-start mt-4
        bg-gradient-to-r from-[#DB6885]  to-[#cc4762] bg-clip-text text-transparent
        ">
          Create New Post
        </h1>

        <form
          action={createNewPost}
          method="POST"
          name="form-create"
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-1 self-start">
              <label htmlFor="category" className="text-xs font-[500]">
                Category
              </label>
              <select
                name="category"
                id=""
                className="p-2 rounded text-xs"
              >
                <option value="">Select a Category</option>
                <option value="Technology">Technology</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div className="flex gap-2 items-center px-4 py-2 text-white bg-red-400 rounded-[10px] self-end">
              Supports <FaHtml5 className="text-[1.5rem]" />
              <FaMarkdown className="text-[1.5rem]" />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full bg-white rounded-[25px] p-4">
            <input
              name="title"
              type="text"
              className="w-full px-4 py-2 outline-none font-[500] text-[2rem]"
              placeholder="Title"
            />

            <textarea
              name="content"
              value={content}
              className="w-full h-[400px] resize-none px-4 py-2 outline-none"
              placeholder="content here..."
              onChange={e => setContent(e.target.value)}
            />

            <div
              className={`flex-col gap-4 ${
                showImagePrompt ? "flex" : "hidden"
              }`}
            >
              <input
                name="imageLink"
                type="text"
                className="w-full px-4 py-2 outline-none"
                placeholder="image link (optional)"
              />
              <input
                name="imageCaption"
                type="text"
                className="w-full px-4 py-2 outline-none text-sm"
                placeholder="image caption here... (optional)"
              />
            </div>

            <div className="flex justify-between sm:text-sm">
              <div className="flex gap-4 items-center">
                <button
                  type="button"
                  className="bg-yellow-100 px-4 py-2 rounded font-[500]"
                  onClick={() => setShowImagePrompt((prev) => !prev)}
                >
                  {showImagePrompt ? "Hide" : "Add image"}
                </button>

                <FaDesktop
                  className="text-[1.5rem] cursor-pointer"
                  onClick={() => setShowOutput((prev) => !prev)}
                />
              </div>

              <div className="flex gap-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded font-[500] bg-transparent hover:underline self-end text-gray-400"
                >
                  Cancel
                </Link>
                <button
                  className="px-4 py-2 rounded font-[500] bg-blue-100 duration-200 hover:bg-blue-300"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>

        <PreviewMD 
          content={content}
          showOutput={showOutput}
        />

      </div>
    </>
  );
}

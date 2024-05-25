"use client";

// Components 
import Prompt from "./comment-prompt";

import { HiOutlineStar, HiStar } from "react-icons/hi";
import { BiCommentAdd } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";

import { useState } from "react";
import { CommentState, StarState } from "@/app/lib/types";

export default function Buttons({postID}: {postID: string}) {
    const [isStarred, setIsStarred] = useState(false);
    const [isShown, setIsShown] = useState(false)

    return (
        <div className="flex flex-col gap-4 mt-4">

            <div className="flex gap-4 items-center text-[1.5rem]">
                <StarButton isStarred={isStarred} setIsStarred={setIsStarred} />
                <CommentButton isShown={isShown} setIsShown={setIsShown} postID={postID}/>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-[1.5rem] font-bold font-title"><FaRegMessage className="inline"/> <span className="pl-2">Comments</span></h2>
                <Prompt isShown={isShown} setIsShown={setIsShown} postID={postID}/>
            </div>
        </div>
    );
}

function StarButton({ isStarred, setIsStarred } : StarState) {
    return (
        <button
            onClick={() => setIsStarred(prev => !prev)}
        >   
            {isStarred ? <HiStar /> : <HiOutlineStar />}
        </button>
    );
}

function CommentButton({ isShown, setIsShown, postID } : CommentState) {
    return (
        <>
        <button
            onClick={() => setIsShown(prev => !prev)}
        >   
            <BiCommentAdd />
        </button>
        </>
    )
}
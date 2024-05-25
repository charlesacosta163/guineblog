"use client"

import { FaCode } from "react-icons/fa6";
import { LuMusic } from "react-icons/lu";
import { MdOutlineSportsFootball } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";

import { getPostsByThread } from "../lib/data";

import Link from "next/link";

export default function Categories() {

  return (
    <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-4 flex-wrap items-center">
            <Link href = '/' className="bg-white hover:bg-gray-100 px-4 py-2 font-[500] flex gap-2 items-center duration-200 rounded-full"><TbBooks /> All</Link>
            <Link href ={{
              pathname: "/",
              query: {category: 'Technology'}
            }} className="bg-yellow-200 hover:bg-yellow-300 px-4 py-2 font-[500] flex gap-2 items-center duration-200 rounded-full"><FaCode /> Technology</Link>
            <Link href ={{
              pathname: "/",
              query: {category: 'Music'}
            }} className="bg-green-200 hover:bg-green-300 px-4 py-2 font-[500] flex gap-2 items-center duration-200 rounded-full"><LuMusic /> Music</Link>
            <Link href ={{
              pathname: "/",
              query: {category: 'Sports'}
            }} className="bg-red-200 hover:bg-red-300 px-4 py-2 font-[500] flex gap-2 items-center duration-200 rounded-full"><MdOutlineSportsFootball /> Sports</Link>
        </div>

        <Link href={'/create'} className="rounded-full p-2 bg-red-400 text-white text-[2rem] duration-200 self-start hover:rotate-90 hover:shadow"><IoAddOutline /></Link>
    </div>
  )
}


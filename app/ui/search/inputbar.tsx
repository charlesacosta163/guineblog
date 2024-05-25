"use client"

import { FormEvent, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function InputBar({placeholder} : {placeholder: string}) {
    const pathname = usePathname()
    const router = useRouter()

    function handleSearch(e: FormEvent<HTMLInputElement>) {

        if (e.currentTarget.value.length > 3){
        const queryParam = `title=${e.currentTarget.value}`
        const usp = new URLSearchParams(queryParam)
        
        const url = `${pathname}?${usp.toString()}`

        router.replace(url)
    }
        else {
            router.replace(pathname)
            console.log("Minimum of 3 characters")
        }
    }

  return (
    <div>
        <input type="text" placeholder={placeholder} className="w-full px-4 py-2 outline-none rounded-[30px]" onChange={handleSearch}/>
    </div>
  )
}


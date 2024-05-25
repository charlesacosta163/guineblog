import BlogSkeleton from "@/app/ui/skeletons/blog-skeleton"
import Navbar from "@/app/ui/navbar"

export default function Loading() {
    return (
        <div className="max-w-[1000px] w-full">
            <Navbar />
            <BlogSkeleton />
        </div>
    )
}
export default function BlogSkeleton() {
    return (
        <div className="flex flex-col gap-4 w-full pt-4">
            <div className="h-[48px] rounded-[25px] bg-red-200 w-full animate-pulse"></div>
            <div className="bg-red-200 h-[300px] w-full rounded-[20px] animate-pulse"></div>

            <div className="flex flex-col gap-4 [&>div]:animate-pulse">
                <div className="h-[24px] rounded-[25px] bg-red-200 w-full"></div>
                <div className="h-[24px] rounded-[25px] bg-red-200 w-full"></div>
                <div className="h-[24px] rounded-[25px] bg-red-200 w-full"></div>
                <div className="h-[24px] rounded-[25px] bg-red-200 w-[50%]"></div>
                <div className="h-[24px] rounded-[25px] bg-red-200 w-[25%]"></div>
            </div>

        </div>
    )
}

export default function PrevBlogSkeleton() {
  return (
  <div className="flex flex-col gap-4">
    <PreviewBlog />
    <PreviewBlog />
    <PreviewBlog />
    <PreviewBlog />
  </div>)
}

function PreviewBlog() {
  return (
    <div className="bg-[#FECBAA] w-full h-[250px] rounded-[20px] animate-pulse"></div>
  );
}

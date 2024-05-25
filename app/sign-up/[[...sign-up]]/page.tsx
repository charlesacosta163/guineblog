import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-[#FF928B] to-[#FFAC81] w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center max-w-[400px] w-full text-white rounded-[20px] p-8">
        <span className="text-yellow-100 font-[900] text-[1.5rem] italic underline font-title">
          <span className="text-yellow-200 underline">guine</span>blog
        </span>
        <SignUp 
            signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
            forceRedirectUrl="/"
        />
      </div>
    </div>
  )
}
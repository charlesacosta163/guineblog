"use client";

import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { SiClerk } from "react-icons/si";


export default function Navbar() {

  return (
    <header className="w-full flex flex-col gap-4 items-center pb-4 sticky top-4 z-10 px-4">
      <nav className="flex justify-between items-center max-w-[1000px] w-full bg-gradient-to-r from-[#FFB4A2] to-[#FFCDB2] rounded-full px-8 sm:px-6 py-3 shadow relative">
        <Link
          href={"/"}
          className="text-yellow-100 font-[900] text-[1.5rem] sm:text-[1.25rem] italic underline font-title"
        >
          <span className="text-yellow-200 underline">guine</span>blog
        </Link>

        <div className="flex items-center gap-4 text-2xl">
          <Link href="/search">
            <FiSearch />
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
              <SignInButton>
                <div className="flex gap-2 text-sm items-center bg-red-400 hover:bg-red-600 font-[500] duration-200 text-white py-2 px-4 rounded-full cursor-pointer">
                  <SiClerk />
                  <span>Sign In</span>
                </div>
              </SignInButton>
          </SignedOut>
        </div>

      </nav>
    </header>
  );
}

// function NavPopUp({ state }: { state: boolean }) {
//   const router = useRouter();

//   // async function handleLogout() {
//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/users/logout")
//   //     setUser(emptyUser)

//   //     setTimeout(function() { // 2 second delay for logging out
//   //       router.replace("/login")
//   //     }, 2000)

//   //   } catch(err) {
//   //     console.log(err);
//   //   }
//   // }

//   return (
//     <AnimatePresence>
//       {state && (
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           transition={{ ease: "easeInOut" }}
//           id="nav-pop"
//           className={`flex flex-col gap-2 w-[200px] h-auto p-4 rounded-[20px] bg-white absolute top-[72px] shadow right-0`}
//         >
//           <Link
//             href="/profile"
//             className="flex gap-2 items-center hover:bg-gray-100 px-4 py-2 duration-300 rounded-[10px] font-[500]"
//           >
//             <FiUser />
//             <span>Profile</span>
//           </Link>

//           <button className="flex gap-2 items-center hover:bg-red-400 hover:text-white px-4 py-2 duration-300 rounded-[10px] font-[500]">
//             <TbLogout2 />
//             <span>WIP</span>
//           </button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

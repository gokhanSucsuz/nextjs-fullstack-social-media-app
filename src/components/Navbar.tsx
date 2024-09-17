import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton
} from "@clerk/nextjs";

const Navbar = () => {
	return <div className="h-24 flex items-center justify-between">
			<div className="hidden sm:flex pe-8">
				<Link href="/">
					<Image src={"/dk-high-resolution-logo-transparent.svg"} alt="logo" width={100} height={100} />
				</Link>
			</div>
			<div className="hidden md:flex text-sm space-x-12 w-full">
				<div className="flex space-x-8 items-center justify-center font-medium text-lg ">
					<Link href={"/"} className="flex space-x-2 items-center jutify-center">
						<Image src="/home.png" alt="alt" width={16} height={16} className="w-4 h-4" />
						<span>Home</span>
					</Link>
					<Link href={"/friends"} className="flex space-x-2 items-center jutify-center">
						<Image src="/friends.png" alt="alt" width={16} height={16} className="w-4 h-4" />
						<span>Friends</span>
					</Link>
					<Link href={"/stories"} className="flex space-x-2 items-center jutify-center">
						<Image src="/stories.png" alt="alt" width={16} height={16} className="w-4 h-4" />
						<span>Stories</span>
					</Link>
				</div>
				<div className="hidden xl:flex items-center justify-center space-x-10 px-4 bg-slate-100 rounded-md">
					<input type="text" placeholder="Search..." className="bg-transparent outline-none cursor-pointer " />
					<Image src="/search.png" alt="alt" width={14} height={14} className="w-4 h-4 cursor-pointer" />
				</div>
			</div>
			<div className="flex space-x-16">
				<div className="w-[30%] flex items-center justify-center gap-4 xl:gap-8 z-10000">
					<MobileMenu />
				</div>
				{/* login / register menu */}
				<div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
					<div className=" items-center gap-4 flex">
						<ClerkLoading>
							<div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
						</ClerkLoading>
						<ClerkLoaded>
							<SignedIn>
								<div className="flex space-x-4">
									<div className="cursor-pointer w-6">
										<Image src="/people.png" className="w-full" alt="alt" width={20} height={20} />
									</div>
									<div className="cursor-pointer w-6">
										<Image src="/messages.png" className="w-full" alt="alt" width={20} height={20} />
									</div>
									<div className="cursor-pointer w-6">
										<Image src="/notifications.png" className="w-full" alt="alt" width={20} height={20} />
									</div>
								</div>
								<UserButton />
							</SignedIn>
							<SignedOut>
								<div className="flex items-center gap-2 pe-5 cursor-pointer">
									<Image src="/login.png" alt="alt" width={20} height={20} />
									<SignInButton>SignIn </SignInButton>
								</div>
							</SignedOut>
						</ClerkLoaded>
					</div>
				</div>
			</div>
		</div>;
};

export default Navbar;

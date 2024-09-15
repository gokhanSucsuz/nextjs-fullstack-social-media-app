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
	return (
		<div className="h-24 flex items-center justify-between">
			<div className=" md:hidden xl:flex">
				<Link href="/">
					<Image
						src={"/dk-high-resolution-logo-transparent.svg"}
						alt="logo"
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<div className="hidden md:flex w-[50%] text-sm">
				<div className="flex space-x-2 items-center justify-center font-medium text-lg">
					<Link
						href={"/"}
						className="flex space-x-2 items-center jutify-center"
					>
						<Image
							src="/home.png"
							alt="alt"
							width={16}
							height={16}
							className="w-4 h-4"
						/>
						<span>Home</span>
					</Link>
					<Link
						href={"/friends"}
						className="flex space-x-2 items-center jutify-center"
					>
						<Image
							src="/friends.png"
							alt="alt"
							width={16}
							height={16}
							className="w-4 h-4"
						/>
						<span>Friends</span>
					</Link>
					<Link
						href={"/stories"}
						className="flex space-x-2 items-center jutify-center"
					>
						<Image
							src="/stories.png"
							alt="alt"
							width={16}
							height={16}
							className="w-4 h-4"
						/>
						<span>Stories</span>
					</Link>
				</div>
			</div>
			<div className="w-[30%] flex items-center justify-center gap-4 xl:gap-8 ">
				<MobileMenu />
			</div>
			<div className="w-[30%] flex  items-center justify-end gap-4 xl:gap-8">
				<div className="flex items-center gap-4 lg:hidden">
					<ClerkLoading>
						<div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
					</ClerkLoading>
					<ClerkLoaded>
						<SignedIn>
							<UserButton />
							<div className="cursor-pointer">
								<Image src="/people.png" alt="alt" width={20} height={20} />
							</div>
							<div className="cursor-pointer">
								<Image src="/messages.png" alt="alt" width={20} height={20} />
							</div>
							<div className="cursor-pointer">
								<Image
									src="/notifications.png"
									alt="alt"
									width={20}
									height={20}
								/>
							</div>
						</SignedIn>
						<SignedOut>
							<div className="flex items-center gap-2 cursor-pointer">
								<Link href="/sign-in">
									<Image src="/login.png" alt="alt" width={20} height={20} />
								</Link>
								<SignInButton> </SignInButton>
							</div>
						</SignedOut>
					</ClerkLoaded>
				</div>
				<div className="hidden items-center gap-4 lg:flex">
					<ClerkLoading>
						<div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
					</ClerkLoading>
					<ClerkLoaded>
						<SignedIn>
							<UserButton />
							<div className="cursor-pointer">
								<Image src="/people.png" alt="alt" width={20} height={20} />
							</div>
							<div className="cursor-pointer">
								<Image src="/messages.png" alt="alt" width={20} height={20} />
							</div>
							<div className="cursor-pointer">
								<Image
									src="/notifications.png"
									alt="alt"
									width={20}
									height={20}
								/>
							</div>
						</SignedIn>
						<SignedOut>
							<div className="flex items-center gap-2 cursor-pointer">
								<Image src="/login.png" alt="alt" width={20} height={20} />
								<SignInButton>Login/Register </SignInButton>
							</div>
						</SignedOut>
					</ClerkLoaded>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

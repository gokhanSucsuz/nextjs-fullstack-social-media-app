import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

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
			<div className="hidden md:flex w-[50%]">
				<div className="flex space-x-2 items-center justify-center font-medium text-lg">
					<Link
						href={"/"}
						className="flex space-x-2 items-center jutify-center"
					>
						<Image src="/home.png" alt="alt" width={16} height={16} />
						<span>Home</span>
					</Link>
					<Link
						href={"/friends"}
						className="flex space-x-2 items-center jutify-center"
					>
						<Image src="/friends.png" alt="alt" width={16} height={16} />
						<span>Friends</span>
					</Link>
					<Link
						href={"/stories"}
						className="flex space-x-2 items-center jutify-center"
					>
						<Image src="/stories.png" alt="alt" width={16} height={16} />
						<span>Stories</span>
					</Link>
				</div>
			</div>
			<div className="w-[30%">
				<MobileMenu />
			</div>
		</div>
	);
};

export default Navbar;

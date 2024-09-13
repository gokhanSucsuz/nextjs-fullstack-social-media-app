"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return <div className="md:hidden">
			<div className="flex flex-col gap-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
				<div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in duration-500`} />
				<div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""}  ease-in duration-500`} />
				<div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in duration-500`} />
			</div>
			{isOpen && <div className="absolute top-24 left-0 w-full h-[calc(100vh-96px)] flex flex-col space-y-10 items-center justify-center bg-white font-medium text-3xl z-10">
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>About</Link>
					<Link href={"/"}>Contact</Link>
					<Link href={"/"}>Blog</Link>
					<Link href={"/"}>Careers</Link>
				</div>}
		</div>;
};

export default MobileMenu;

import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
	return (
		<div className="flex flex-col gap-4">
			{type === "home" && <ProfileCard />}
			<div className="flex flex-col p-4 rounded-lg shadow-md text-sm bg-white text-gray-500 gap-2">
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 hover:rounded-lg"
				>
					<Image
						src="/posts.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>My Posts</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 hover:rounded-lg"
				>
					<Image
						src="/activity.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Activity</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 hover:rounded-lg"
				>
					<Image
						src="/market.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Marketplace</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 hover:rounded-lg"
				>
					<Image
						src="/events.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Events</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 hover:rounded-lg"
				>
					<Image
						src="/albums.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Albums</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 rounded-lg"
				>
					<Image
						src="/videos.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Videos</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 rounded-lg"
				>
					<Image
						src="/courses.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Courses</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 rounded-lg"
				>
					<Image
						src="/lists.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Lists</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
				<Link
					href={"/"}
					className="flex gap-2 p-2 items-center hover:bg-slate-100 rounded-lg"
				>
					<Image
						src="/settings.png"
						alt="alt"
						width={20}
						height={20}
						className="w-5 h-5"
					/>
					<span>Settings</span>
				</Link>
				<hr className="border-t-1 border-slate-50 w-36 self-center" />
			</div>
			<Ad size="sm" />
		</div>
	);
};

export default LeftMenu;

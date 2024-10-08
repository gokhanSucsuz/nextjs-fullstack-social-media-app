import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";

type FeedPostType = PostType & { user: User } & {
		likes: [{ userId: string }];
	} & {
		_count: { comments: number };
	};

const Post = ({ post }: { post: FeedPostType }) => {
	return (
		<div className="p-4 rounded-lg flex flex-col w-full">
			{/* USER */}
			<div className="flex items-center justify-between gap-2 w-full">
				{/* AVATAR */}
				<div className="flex items-center justify-start gap-2 w-full cursor-pointer">
					<Image
						src={post.user.avatar || "/noAvatar.png"}
						alt="avatar"
						width={32}
						height={32}
						className="w-8 h-8 rounded-full"
					/>
					<span className="font-bold text-md">
						{post.user.name && post.user.surname
							? post.user.name + " " + post.user.surname
							: post.user.username}
					</span>
				</div>
				<Image
					className="cursor-pointer"
					src={"/more.png"}
					alt="ellipsis"
					width={16}
					height={16}
				/>
			</div>
			{/* DESCRIPTION */}
			<div className="flex w-full p-2 flex-col relative">
				{post.img &&
					<Image
						alt={post.desc}
						src={post.img}
						width={1000}
						height={192}
						className="w-full h-80 object-cover cursor-pointer rounded-lg m-2"
					/>}
				<div>
					<h3 className="text-md font-bold p-2 indent-10">
						<span className=" cursor-pointer hover:underline-offset-2 hover:underline">
							{post.title}
						</span>
					</h3>
					<p className="text-md flex p-2 indent-10">
						{post.desc}
					</p>
				</div>
			</div>
			{/* INTERACTION */}
			<div className="flex flex-wrap gap-4 items-center justify-between p-2 text-slate-400 font-semibold text-sm my-4">
				<div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-4">
					<div className="flex items-center justify-between cursor-pointer gap-1 bg-slate-50 p-3 rounded-xl">
						<Image
							src={"/like.png"}
							alt="alt"
							width={20}
							height={20}
							className=""
						/>
						<span className="text-sm text-slate-300">|</span>
						<span>
							123 <span className="hidden md:inline">Likes</span>
						</span>
					</div>
					<div className="flex items-center justify-center gap-1 bg-slate-50 p-3 rounded-xl">
						<Image
							src={"/comment.png"}
							alt="alt"
							width={20}
							height={20}
							className="cursor-pointer"
						/>
						<span className="text-sm text-slate-300">|</span>
						<span>
							123 <span className="hidden md:inline">Comments</span>
						</span>
					</div>
				</div>
				<div className="flex items-center justify-center gap-1 bg-slate-50 p-3 rounded-xl">
					<Image
						src={"/share.png"}
						alt="alt"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<span className="text-sm text-slate-300">|</span>
					<span>
						<span className="hidden md:inline">Share</span>
					</span>
				</div>
			</div>
			{/* COMMENTS */}
			<div>
				<Comments />
			</div>
		</div>
	);
};

export default Post;
Post;

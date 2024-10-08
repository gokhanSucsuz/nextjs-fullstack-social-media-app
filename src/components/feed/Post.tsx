import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";

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
			<PostInteraction
				postId={post.id}
				likes={post.likes.map(like => like.userId)}
				commentNumber={post._count.comments}
			/>
			{/* COMMENTS */}
			<div>
				<Comments />
			</div>
		</div>
	);
};

export default Post;
Post;

import Image from "next/image";
import React, { Suspense } from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & { user: User } & {
		likes: [{ userId: string }];
	} & {
		_count: { comments: number };
	};

const Post = ({ post }: { post: FeedPostType }) => {
	const { userId } = auth();
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
				{userId === post.user.id && <PostInfo postId={post.id} />}
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
					<p className="text-md flex p-2 indent-4">
						{post.desc}
					</p>
				</div>
			</div>
			{/* INTERACTION */}
			<Suspense fallback={<div>Loading...</div>}>
				<PostInteraction
					postId={post.id}
					likes={post.likes.map(like => like.userId)}
					commentNumber={post._count.comments}
				/>
			</Suspense>

			{/* COMMENTS */}
			<Suspense fallback={<div>Loading...</div>}>
				<div>
					<Comments postId={post.id} />
				</div>
			</Suspense>
		</div>
	);
};

export default Post;
Post;

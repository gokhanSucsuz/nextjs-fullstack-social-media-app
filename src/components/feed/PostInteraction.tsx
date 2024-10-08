"use client";
import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

const PostInteraction = ({
	postId,
	likes,
	commentNumber
}: {
	postId: number;
	likes: string[];
	commentNumber: number;
}) => {
	const { isLoaded, userId } = useAuth();
	const [likeState, setLikeState] = useState({
		likeCount: likes.length,
		isLiked: userId ? likes.includes(userId) : false
	});

	const [
		optimisticLike,
		switchOptimisticLike
	] = useOptimistic(likeState, (state, value) => {
		return {
			likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
			isLiked: !state.isLiked
		};
	});
	const likeAction = async () => {
		switchOptimisticLike("");
		try {
			switchLike(postId);
			setLikeState(state => ({
				likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
				isLiked: !state.isLiked
			}));
		} catch (error) {}
	};
	return (
		<div className="flex flex-wrap gap-4 items-center justify-between p-2 text-slate-400 font-semibold text-sm my-4">
			<div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-4">
				<div className="flex items-center justify-between cursor-pointer gap-1 bg-slate-50 p-3 rounded-xl">
					<form action={likeAction}>
						<button>
							<Image
								src={optimisticLike.isLiked ? "/liked.png" : "/like.png"}
								alt="alt"
								width={20}
								height={20}
								className=""
							/>
						</button>
					</form>
					<span className="text-sm text-slate-300">|</span>
					<span>
						{optimisticLike.likeCount}{" "}
						<span className="hidden md:inline">Likes</span>
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
	);
};

export default PostInteraction;

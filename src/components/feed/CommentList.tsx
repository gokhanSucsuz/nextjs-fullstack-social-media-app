"use client";
import { addComment } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };
const CommentList = ({
	comments,
	postId
}: {
	comments: CommentWithUser[];
	postId: number;
}) => {
	const { user } = useUser();
	const [commentState, setCommentState] = useState(comments);
    const [desc, setDesc] = useState("");
    const [optimisticComment, addOptimisticComment] = useOptimistic(commentState, (state, value: CommentWithUser) => 
        [
            value,
            ...state
        ])
    
    const add = async () => {
        if (!user || !desc) return;
        addOptimisticComment({
            id: Math.random(),
            desc,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            userId: user.id,
            postId,
            user: {
                id: user.id,
                username: "Sending... Please wait...",
                avatar: user.imageUrl,
                cover: "",
                description: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                createdAd: new Date(Date.now()),
            }
        })
        try {
      const createdComment = await addComment(postId, desc);
      setCommentState((prev) => [createdComment, ...prev]);
    } catch (err) {}
    }
	return (
		<div>
			<div className="flex flex-col items-center justify-start gap-2 w-full">
				{user &&<div className="flex w-full items-center justify-center gap-2">
					<Image
						src={user?.imageUrl || "/noAvatar.png"}
						alt="avatar"
						width={28}
						height={28}
						className="w-7 h-7 rounded-full"
					/>
					<form action={add} className="flex-1 flex w-full items-center justify-between gap-2 bg-slate-100 pe-2 rounded-xl">
						<input
							className="w-full rounded-xl p-3 bg-transparent flex-1 outline-none border-none"
							placeholder="Write a comment..."
							onChange={e => setDesc(e.target.value)}
						/>
						<Image
							src={"/emoji.png"}
							alt="emoji"
							width={28}
							height={28}
							className="w-7 h-7 rounded-full cursor-pointer"
						/>
					</form>
				</div>}
			</div>
			{/* COMMENTS */}
			{/* DESCRIPTION */}
			{optimisticComment.map(comment =><div className="flex w-full  flex-col relative py-2" key={comment.id}>
				<div>
					<div className="flex items-center justify-between gap-2 w-full py-2">
						<div className="flex items-center justify-start gap-2 w-full cursor-pointer">
							<Image
								src={comment.user.avatar || "/noAvatar.png"}
								alt="avatar"
								width={36}
								height={36}
								className="w-8 h-8 rounded-full"
							/>
                            <span className="font-bold text-sm">{comment.user.name && comment.user.surname ? comment.user.name + " " + comment.user.surname : comment.user.username}</span>
						</div>
						<Image
							className="cursor-pointer"
							src={"/more.png"}
							alt="ellipsis"
							width={16}
							height={16}
						/>
					</div>
					<p className="text-sm flex p-1 indent-10 text-slate-500">
						{comment.desc}
					</p>
				</div>
			{/* INTERACTION */}
			<div className="flex flex-wrap gap-4 items-center justify-between p-2 text-slate-400 font-semibold text-[10px]">
				<div className="flex items-center justify-between gap-1 p-1 rounded-xl">
					<Image
						src={"/like.png"}
						alt="alt"
						width={14}
						height={14}
						className="cursor-pointer "
					/>
					<span className="text-sm text-slate-300">|</span>
					<span className="cursor-pointer ">
						0 <span className="hidden md:inline cursor-pointer ">Likes</span>
					</span>
					<span className="flex ms-8 cursor-pointer ">Reply</span>
				</div>
			</div>
            </div>)}
			
		</div>
	);
};

export default CommentList;

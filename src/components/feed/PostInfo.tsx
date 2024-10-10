"use client";
import { deletePost } from "@/lib/actions";
import Image from "next/image";
import React, { useState } from "react";

const PostInfo = ({ postId }: { postId: number }) => {
	const [open, setOpen] = useState(false);
	const deletePostWithId = deletePost.bind(null, postId);
	return (
		<div className="relative">
			<Image
				className="cursor-pointer"
				src={"/more.png"}
				alt="ellipsis"
				width={16}
				height={16}
				onClick={() => setOpen(prev => !prev)}
			/>
			{open &&
				<div className="absolute  top-4 w-32 right-0 p-4 bg-white rounded-lg shadow-lg flex flex-col gap-2 text-xs z-30">
					<span className="cursor-pointer p-2 rounded-lg hover:bg-slate-100">
						View
					</span>
					<span className="cursor-pointer p-2 rounded-lg hover:bg-slate-100">
						Re-post
					</span>
					<form
						action={deletePostWithId}
						className="p-2 rounded-lg hover:bg-slate-100"
					>
						<button className="text-red-500">Delete</button>
					</form>
				</div>}
		</div>
	);
};

export default PostInfo;

"use client";
import prisma from "@/lib/client";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";

const AddPost = () => {
	const { user, isLoaded } = useUser();
	const [desc, setDesc] = useState("")
	const [img, setImg]=useState<any>("")
	if (!isLoaded) return "Loading...";

	return (
		<div className="p-4 bg-white rounded-lg flex gap-4 justify-between shadow-md text-x">
			<div className="flex gap-8 w-full">
				{/* Avatar */}
				<div className="flex items-center gap-2 ">
					<Image
						src={user?.imageUrl || "/noAvatar.png"}
						alt=""
						width={48}
						height={48}
						className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-full object-cover"
					/>
				</div>
				{/* POST */}
				<div className="flex-1 items-center">
					{/* TEXT INPUT */}
					<form action={(formData)=>addPost(formData,img?.secure_url || "")} className="flex gap-4">
						<textarea
							className="border-none outline-none bg-slate-100 text-sm p-2 rounded-lg flex-1 flex w-[10%]"
							name="desc"
							cols={30}
							rows={3}
							placeholder="What's on your mind?"
							onChange={e=> setDesc(e.target.value)}
						/>
						<Image
							src="/emoji.png"
							alt="emoji"
							width={20}
							height={20}
							className="w-5 h-5 cursor-pointer self-end"
						/>
						<AddPostButton/>
					</form>
					{/* POST OPTIONS */}

					<div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
						<CldUploadWidget
							uploadPreset="social"
							onSuccess={(result, { widget }) => { setImg(result.info); widget.close()}}
						>
							{({ open }) => {
								return (
									<div className="flex gap-2 items-center cursor-pointer flex-shrink-0"
										onClick={() => open()}>
							<Image src="/addimage.png" alt="alt" width={16} height={16} />
							<span className="text-sm">Photo</span>
						</div>
								);
							}}
						</CldUploadWidget>
						<div className="flex gap-2  items-center cursor-pointer flex-shrink-0">
							<Image src="/addVideo.png" alt="alt" width={16} height={16} />
							<span className="text-sm">Video</span>
						</div>
						<div className="flex gap-2  items-center cursor-pointer flex-shrink-0">
							<Image src="/poll.png" alt="alt" width={16} height={16} />
							<span className="text-sm">Poll</span>
						</div>
						<div className="flex gap-2  items-center cursor-pointer flex-shrink-0">
							<Image src="/events.png" alt="alt" width={16} height={16} />
							<span className="text-sm">Events</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddPost;

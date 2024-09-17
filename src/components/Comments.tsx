import Image from "next/image";
import React from "react";

const Comments = () => {
	return (
		<div className="flex flex-col">
			{/* WRITE" */}
			<div className="flex flex-col items-center justify-start gap-2 w-full">
				<div className="flex w-full items-center justify-center gap-2">
					<Image
						src={
							"https://images.pexels.com/photos/9969239/pexels-photo-9969239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						}
						alt="avatar"
						width={28}
						height={28}
						className="w-7 h-7 rounded-full"
					/>
					<div className="flex-1 flex w-full items-center justify-between gap-2 bg-slate-100 pe-2 rounded-xl">
						<input
							className="w-full rounded-xl p-3 bg-transparent flex-1 outline-none border-none"
							placeholder="Write a comment..."
						/>
						<Image
							src={"/emoji.png"}
							alt="emoji"
							width={28}
							height={28}
							className="w-7 h-7 rounded-full cursor-pointer"
						/>
					</div>
				</div>
			</div>
			{/* COMMENTS */}
			{/* DESCRIPTION */}
			<div className="flex w-full  flex-col relative py-2">
				<div>
					<div className="flex items-center justify-between gap-2 w-full py-2">
						<div className="flex items-center justify-start gap-2 w-full cursor-pointer">
							<Image
								src={
									"https://images.pexels.com/photos/9969239/pexels-photo-9969239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
								}
								alt="avatar"
								width={36}
								height={36}
								className="w-8 h-8 rounded-full"
							/>
							<span className="font-bold text-sm">Cristina Leonard</span>
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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
						aspernatur suscipit tenetur accusantium inventore porro magni,
						voluptates quae quibusdam, vel excepturi unde sit temporibus ipsum
						error?
					</p>
				</div>
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
						123 <span className="hidden md:inline cursor-pointer ">Likes</span>
					</span>
					<span className="flex ms-8 cursor-pointer ">Reply</span>
				</div>
			</div>
		</div>
	);
};

export default Comments;

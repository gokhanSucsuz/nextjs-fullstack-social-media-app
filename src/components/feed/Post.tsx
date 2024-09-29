import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
	return (
		<div className="p-4 rounded-lg flex flex-col w-full">
			{/* USER */}
			<div className="flex items-center justify-between gap-2 w-full">
				{/* AVATAR */}
				<div className="flex items-center justify-start gap-2 w-full cursor-pointer">
					<Image
						src={
							"https://images.pexels.com/photos/9969239/pexels-photo-9969239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						}
						alt="avatar"
						width={32}
						height={32}
						className="w-8 h-8 rounded-full"
					/>
					<span className="font-bold text-md">Cristina Leonard</span>
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
				<Image
					src="https://images.pexels.com/photos/28436954/pexels-photo-28436954/free-photo-of-avrupa-eski-kentinde-manzarali-nehir-kenari-manzarasi.jpeg"
					alt="alt"
					width={1000}
					height={192}
					className="w-full h-80 object-cover cursor-pointer rounded-lg m-2"
				/>
				<div>
					<h3 className="text-md font-bold p-2 indent-10">
						<span className=" cursor-pointer hover:underline-offset-2 hover:underline">
							Title of the post
						</span>
					</h3>
					<p className="text-md flex p-2 indent-10">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
						aspernatur suscipit tenetur accusantium inventore porro magni,
						voluptates quae quibusdam, vel excepturi unde sit temporibus ipsum
						error? Impedit vitae culpa, aliquam atque dolorum nostrum vero quam
						nobis, quod sapiente quos esse, expedita natus explicabo ipsa aut
						quisquam facilis fugit molestiae adipisci sunt. Sint laudantium ab
						numquam veritatis voluptates eligendi nihil necessitatibus.
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
						123 <span className="hidden md:inline">Shares</span>
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

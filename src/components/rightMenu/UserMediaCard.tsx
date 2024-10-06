import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = async ({ user }: { user: User }) => {
	const postWithMedia = await prisma.post.findMany({
		where: {
			userId: user.id,
			img: {
				not: null
			}
		},
		take: 9,
		orderBy: {
			createdAt: "desc"
		}
	});
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
			<div className="flex items-center w-full justify-between p-4 text-sm">
				<span className="font-bold text-slate-500">User Media</span>
				<Link href="/" className="text-blue-400 text-xs">
					See all
				</Link>
			</div>
			<div className="flex flex-wrap justify-center items-center w-full gap-3 p-2">
				{postWithMedia.length
					? postWithMedia.map(post =>
							<Link key={post.id} href={`${post.img}`}>
								<Image
									src="https://images.pexels.com/photos/28248795/pexels-photo-28248795/free-photo-of-elma-kurutma.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
									alt="alt"
									width={80}
									height={80}
									className="rounded-lg w-20 h-20 object-cover"
								/>
							</Link>
						)
					: "No Media found!"}
			</div>
		</div>
	);
};

export default UserMediaCard;

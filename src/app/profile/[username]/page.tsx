
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
	const username = params.username;
	const user = await prisma.user.findFirst({
		where: {
			username
		},
		include: {
			_count: {
				select: {
					followers: true,
					followings: true,
					posts: true
				}
			}
		}
	});
	
	const { userId: currentUserId } = auth()
	let isBlocked;

	if (currentUserId) {
		const res = await prisma.block.findFirst({
			where: {
				blockerId: user?.id,
				blockedId: currentUserId
			}
		})
		if(res) isBlocked = true 
	}else {isBlocked = false}
	if (isBlocked) return notFound()


	
	return (
		<div className="flex gap-6 pt-6">
			<div className="hidden xl:block w-[20%]">
				<LeftMenu type="profile" />
			</div>
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-6 w-full p-4 bg-white shadow-md rounded-lg">
						<div className="h-40 relative">
							<Image
								src={user?.cover ? user.cover :"/noCover.png"}
								alt="profile"
								fill
								className="rounded-md object-cover"
							/>
							<Image
								alt="profile"
								src={user?.avatar ? user.avatar: "/noAvatar.png"}
								width={1000}
								height={1000}
								className="absolute object-cover w-24 h-24 rounded-full right-0 left-0 m-auto -bottom-12 ring-1 ring-white z-10"
							/>
						</div>
						<div className="flex justify-center flex-col items-center pt-6">
							<span className="font-bold text-lg p-2 text-center">
								{(user?.name && user?.surname) ? `${user?.name} ${user?.surname}` : user?.username}
							</span>
							<div className="flex justify-evenly items-center w-full p-2">
								<div className="flex gap-5 font-bold flex-wrap">
									<span className="text-xs text-slate-500 flex flex-col">
										<span>{user?._count.posts}</span>
										<span className="font-medium">Posts</span>
									</span>
									<span className="text-xs text-slate-500 flex flex-col">
										<span>{user?._count.followers} K</span>
										<span className="font-medium">Followers</span>
									</span>
									<span className="text-xs text-slate-500 flex flex-col">
										<span>{user?._count.followings} K</span>
										<span className="font-medium">Following</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<Feed />
				</div>
			</div>
			<div className="hidden lg:block w-[30%]">
				<RightMenu user={user || undefined} />
			</div>
		</div>
	);
};

export default ProfilePage;

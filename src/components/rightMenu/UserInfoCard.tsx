import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "../UpdateUser";


const UserInfoCard = async({ user }: { user: User }) => {
	const createdDate = new Date(user?.createdAd)
	const formattedDate = createdDate.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
	let isUserBlocked = false;
	let isFollowing = false;
	let isFollowingSent = false;

	const { userId: currentUserId } = auth()
	if(currentUserId) {
		const blockRes = await prisma.block.findFirst({
			where: {
				blockerId: currentUserId,
				blockedId: user?.id
			}
		})
		blockRes ? isUserBlocked = true : isUserBlocked = false

		const followRes = await prisma.follower.findFirst({
			where: {
				followerId: currentUserId,
				followingId: user?.id
			}
		})
		followRes ? isFollowing = true : isFollowing = false

		const followReqRes = await prisma.followRequest.findFirst({
			where: {
				senderId: currentUserId,
				receiverId: user?.id
			}
		})
		followReqRes ? isFollowingSent= true : isFollowingSent = false
	}
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
			<div className="flex items-center w-full justify-between p-4 text-sm">
				<span className="font-bold text-slate-500">User Information</span>
				
				{currentUserId === user?.id ? <UpdateUser /> : <Link href="/" className="text-blue-400 text-xs">
					See all
				</Link>}
			</div>
			<div className="flex flex-col gap-4 text-sm">
				<div className="flex items-center px-2">
					<span className="font-bold text-lg text-slate-800 mx-2">
						{(user?.name && user?.surname) ? `${user?.name} ${user?.surname}` : user?.username}
					</span>
					<span className="text-slate-500">@{user?.username}</span>
				</div>
				{user?.description &&<p className="px-4 text-slate-500">
					{user.description}
				</p>}
				{user?.city && <div className="px-4 text-slate-500 flex gap-2">
					<Image src="/map.png" alt="location" width={20} height={20} />
					<p>
						Living in <span className="font-bold text-slate-700">{user.city}</span>
					</p>
				</div>}
				{user?.school &&<div className="px-4 text-slate-500 flex gap-2">
					<Image src="/school.png" alt="location" width={20} height={20} />
					<p>
						Went to <span className="font-bold text-slate-700">{user.school}</span>
					</p>
				</div>}
				{user?.work &&<div className="px-4 text-slate-500 flex gap-2">
					<Image src="/work.png" alt="location" width={20} height={20} />
					<p>
						Work at <span className="font-bold text-slate-700">{user.work}</span>
					</p>
				</div>}
				{user?.website &&
					<div className="px-4 text-blue-500 font-medium flex justify-between gap-2 mb-2 flex-col">
					<div className="flex">
						<Image src="/map.png" alt="location" width={20} height={20} />
						<Link href={user.website}>  {user.website}</Link>
					</div>
						<span className="font-semibold flex text-slate-400 gap-2 py-2">
							<Image src="/date.png" alt="alt" width={20} height={20} />
							<p>Joined {formattedDate}</p>
						</span>
				</div>}
				{currentUserId && currentUserId !== user.id &&
					<UserInfoCardInteraction
					userId={user?.id}
					isUserBlocked={isUserBlocked}
					isFollowing={isFollowing}
					isFollowingSent={isFollowingSent}
				/>}
			</div>
		</div>
	);
};

export default UserInfoCard;

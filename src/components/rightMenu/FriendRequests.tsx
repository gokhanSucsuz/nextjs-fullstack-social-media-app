import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
	const { userId } = auth();
	if (!userId) {
		return null;
	}

	const requests = await prisma.followRequest.findMany({
		where: {
			receiverId: userId
		},
		include: {
			sender: true
		}
	});
	if (requests.length === 0) return null;
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
			<div className="flex items-center w-full justify-between p-4 text-sm">
				<span className="font-bold text-slate-500">Friend Requests</span>
				<Link href="/" className="text-blue-400 text-xs">
					See all
				</Link>
			</div>
			<FriendRequestList requests={requests} />
		</div>
	);
};

export default FriendRequests;

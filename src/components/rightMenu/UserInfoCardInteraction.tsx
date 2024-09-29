"use client";
import { switchBlock, switchFollow } from "@/lib/actions";
import Link from "next/link";
import React, { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
	userId,
	isUserBlocked,
	isFollowing,
	isFollowingSent
}: {
	userId: string;
	isUserBlocked: boolean;
	isFollowing: boolean;
	isFollowingSent: boolean;
}) => {
	const [userState, setUserState] = useState({
		following: isFollowing,
		blocked: isUserBlocked,
		followingRequestSent: isFollowingSent
	});

	const follow = async () => {
		switchOptimisticState("follow");
		try {
			await switchFollow(userId);
			setUserState(prev => ({
				...prev,
				following: prev.following && false,
				followingRequestSent:
					!prev.following && !prev.followingRequestSent ? true : false
			}));
		} catch (error) {}
	};

	const block = async () => {
		switchOptimisticState("block");
		try {
			await switchBlock(userId);
			setUserState(prev => ({
				...prev,
				blocked: !prev.blocked
			}));
		} catch (error) {}
	};

	const [optimisticState, switchOptimisticState] = useOptimistic(
		userState,
		(state, value: "follow" | "block") =>
			value === "follow"
				? {
						...state,
						following: !state.following && false,
						followingRequestSent:
							!state.following && !state.followingRequestSent ? true : false
					}
				: {
						...state,
						blocked: !state.blocked
					}
	);
	return (
		<div>
			<div className="w-full flex justify-center ">
				<form
					action={follow}
					className="w-full mx-4 rounded-lg text-sm bg-blue-500 text-white "
				>
					<button className="w-full p-2 rounded-lg ">
						{optimisticState.following
							? "Following"
							: optimisticState.followingRequestSent
								? "Friend Request Sent"
								: "Follow"}
					</button>
				</form>
			</div>
			<div className="flex w-full justify-end mb-2">
				<form action={block}>
					<button className="p-2 me-4 text-red-500 text-xs">
						{optimisticState.blocked ? "Unblock" : "Block"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default UserInfoCardInteraction;

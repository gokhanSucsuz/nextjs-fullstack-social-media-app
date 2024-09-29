import React, { Suspense } from "react";
import Ad from "../Ad";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({user}:{user?: User}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			{
				user ? (
					<>
						<Suspense fallback={<div>Loading...</div>}> <UserInfoCard user={user} /></Suspense>
						<Suspense fallback={<div>Loading...</div>}> <UserMediaCard user={user} /></Suspense>
						
						
					</>
				) : null
			}
			{/* FRIEND REQUESTS */}
			<FriendRequests />
			{/* BIRTHDAYS */}
			<Birthdays />
			{/* SPONSORED ADS */}
			<Ad size="md" />
		</div>
	);
};

export default RightMenu;

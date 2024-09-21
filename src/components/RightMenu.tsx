import React from "react";
import Ad from "./Ad";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({userId}:{userId:string}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			{
				userId ? (
					<>
						<UserInfoCard userId={userId} />
						<UserMediaCard userId={userId} />
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

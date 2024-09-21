import Image from "next/image";
import React from "react";

const ProfileCard = () => {
	return (
		<div className="flex flex-col gap-6 w-full p-4 bg-white shadow-md rounded-lg">
			<div className="h-20 relative">
				<Image
					src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="profile"
					fill
					className="rounded-md object-cover"
				/>
				<Image
					src="https://images.pexels.com/photos/3034903/pexels-photo-3034903.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="profile"
					width={1000}
					height={1000}
					className="absolute object-cover w-12 h-12 rounded-full right-0 left-0 m-auto -bottom-6 ring-1 ring-white z-10"
				/>
			</div>
			<div className="flex justify-center flex-col items-center">
				<span className="font-bold text-lg p-2 text-center">
					Jennifer Eve Sponge
				</span>
				<div className="flex justify-evenly items-center w-full p-2">
					<div className="flex gap-1">
						<Image
							src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="verified"
							width={1000}
							height={1000}
							className="w-4 h-4 rounded-full"
						/>
						<Image
							src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="verified"
							width={1000}
							height={1000}
							className="w-4 h-4 rounded-full"
						/>
						<Image
							src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="verified"
							width={1000}
							height={1000}
							className="w-4 h-4 rounded-full"
						/>
					</div>
					<span className="text-xs text-slate-500">500 followers</span>
				</div>
				<button className="py-2 px-4 mt-2 bg-blue-500 rounded-lg text-white">
					My Profile
				</button>
			</div>
		</div>
	);
};

export default ProfileCard;

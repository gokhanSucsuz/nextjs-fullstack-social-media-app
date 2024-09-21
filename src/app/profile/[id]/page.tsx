import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
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
								src="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="profile"
								fill
								className="rounded-md object-cover"
							/>
							<Image
								alt="profile"
								src="https://images.pexels.com/photos/3034903/pexels-photo-3034903.jpeg?auto=compress&cs=tinysrgb&w=600"
								width={1000}
								height={1000}
								className="absolute object-cover w-24 h-24 rounded-full right-0 left-0 m-auto -bottom-12 ring-1 ring-white z-10"
							/>
						</div>
						<div className="flex justify-center flex-col items-center pt-6">
							<span className="font-bold text-lg p-2 text-center">
								Jennifer Eve Sponge
							</span>
							<div className="flex justify-evenly items-center w-full p-2">
								<div className="flex gap-5 font-bold flex-wrap">
									<span className="text-xs text-slate-500 flex flex-col">
										<span>155</span>
										<span className="font-medium">Posts</span>
									</span>
									<span className="text-xs text-slate-500 flex flex-col">
										<span>1.2K</span>
										<span className="font-medium">Followers</span>
									</span>
									<span className="text-xs text-slate-500 flex flex-col">
										<span>1.5K</span>
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
				<RightMenu userId="test" />
			</div>
		</div>
	);
};

export default ProfilePage;

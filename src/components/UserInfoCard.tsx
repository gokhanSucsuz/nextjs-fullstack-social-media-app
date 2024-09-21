import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
			<div className="flex items-center w-full justify-between p-4 text-sm">
				<span className="font-bold text-slate-500">User Information</span>
				<Link href="/" className="text-blue-400 text-xs">
					See all
				</Link>
			</div>
			<div className="flex flex-col gap-4 text-sm">
				<div className="flex items-center px-2">
					<span className="font-bold text-lg text-slate-800 mx-2">
						Cristina Leonard
					</span>
					<span className="text-slate-500">@cLeonard</span>
				</div>
				<p className="px-4 text-slate-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus laborum reprehenderit, voluptate hic voluptatum
					laboriosam ab dolorem accusamus libero laudantium.
				</p>
				<div className="px-4 text-slate-500 flex gap-2">
					<Image src="/map.png" alt="location" width={20} height={20} />
					<p>
						Living in <span className="font-bold text-slate-700">Denver</span>
					</p>
				</div>
				<div className="px-4 text-slate-500 flex gap-2">
					<Image src="/school.png" alt="location" width={20} height={20} />
					<p>
						Went to{" "}
						<span className="font-bold text-slate-700">Glory High School</span>
					</p>
				</div>
				<div className="px-4 text-slate-500 flex gap-2">
					<Image src="/work.png" alt="location" width={20} height={20} />
					<p>
						Work at <span className="font-bold text-slate-700">Microsoft</span>
					</p>
				</div>
				<div className="px-4 text-blue-500 font-medium flex justify-between gap-2 mb-2">
					<div className="flex">
						<Image src="/map.png" alt="location" width={20} height={20} />
						<Link href="/">test.com</Link>
					</div>
					<div>
						<span className="font-semibold flex text-slate-400 gap-2">
							<Image src="/date.png" alt="alt" width={20} height={20} />
							<p>Joined November 2024</p>
						</span>
					</div>
				</div>
				<div className="w-full flex justify-center ">
					<button className="w-full p-2 rounded-lg mx-4 text-sm bg-blue-500 text-white ">
						Following
					</button>
				</div>
				<div className="flex w-full justify-end mb-2">
					<Link className="p-2 me-4 text-red-500 text-xs" href="/">
						Block User
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserInfoCard;

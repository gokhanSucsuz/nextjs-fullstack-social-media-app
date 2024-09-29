import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
			<div className="flex items-center w-full justify-between p-4 text-sm">
				<span className="font-bold text-slate-500">Friend Requests</span>
				<Link href="/" className="text-blue-400 text-xs">
					See all
				</Link>
			</div>
			<div className="flex w-full">
				<div className="flex flex-2 items-center gap-4 p-4">
					<Image
						src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="alt"
						width={400}
						height={400}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-semibold text-slate-800">Freddy Keuger</span>
				</div>
				<div className="flex flex-1 items-center justify-end w-full gap-4 p-4">
					<Image src={"/accept.png"} alt="alt" width={16} height={16} />
					<Image src={"/reject.png"} alt="alt" width={16} height={16} />
				</div>
			</div>
			<div className="flex w-full">
				<div className="flex flex-2 items-center gap-4 p-4">
					<Image
						src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="alt"
						width={400}
						height={400}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-semibold text-slate-800">Freddy Keuger</span>
				</div>
				<div className="flex flex-1 items-center justify-end w-full gap-4 p-4">
					<Image src={"/accept.png"} alt="alt" width={16} height={16} />
					<Image src={"/reject.png"} alt="alt" width={16} height={16} />
				</div>
			</div>
			<div className="flex w-full">
				<div className="flex flex-2 items-center gap-4 p-4">
					<Image
						src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="alt"
						width={400}
						height={400}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-semibold text-slate-800">Freddy Keuger</span>
				</div>
				<div className="flex flex-1 items-center justify-end w-full gap-4 p-4">
					<Image src={"/accept.png"} alt="alt" width={16} height={16} />
					<Image src={"/reject.png"} alt="alt" width={16} height={16} />
				</div>
			</div>
		</div>
	);
};

export default FriendRequests;

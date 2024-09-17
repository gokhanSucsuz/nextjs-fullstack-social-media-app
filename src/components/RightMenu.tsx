import Image from "next/image";
import React from "react";

const RightMenu = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			{/* FRIEND REQUESTS */}
			<div className="bg-white w-full flex flex-col rounded-lg">
				<div className="flex items-center w-full justify-between p-4 text-sm">
					<span className="font-bold text-slate-500">Friend Requests</span>
					<span className="text-blue-400">See all</span>
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
			{/* BIRTHDAYS */}
			<div className="bg-white w-full flex flex-col rounded-lg">
				<div className="flex items-center w-full justify-between p-4 text-sm">
					<span className="font-bold text-slate-500">Birthdays</span>
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
						<div className="p-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer">
							Celebrate
						</div>
					</div>
				</div>
				<div className="p-4 bg-slate-100 m-4 rounded-lg">
					<div className="flex w-full items-center justify-start">
						<Image src="/gift.png" alt="alt" width={24} height={24} />
						<div className="flex flex-col items-start justify-center p-2">
							<h3 className="text-sm font-bold text-slate-500">
								Upcoming Birthdays
							</h3>
							<p className="text-sm font-semibold text-slate-400">
								See other 16 have upcoming birthdays
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* SPONSORED ADS */}
			<div className="bg-white w-full flex flex-col rounded-lg px-4">
				<div className="flex p-2 text-sm">
					<h4>Sponsored Area</h4>
				</div>
				<div className="p-4">
					<Image
						src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg"
						alt="ads"
						width={400}
						height={400}
						className="w-full rounded-xl"
					/>
				</div>
				<div className="flex justify-start items-center gap-4 mx-2">
					<Image
						src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg"
						alt="ads"
						width={20}
						height={20}
						className="rounded-full w-10 h-10 "
					/>
					<h3 className="text-sm font-bold text-blue-400">BigChef Lounge</h3>
				</div>
				<p className="text-sm font-medium text-slate-500 p-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum,
					sed facere ipsa ratione non, fugit architecto, doloribus labore autem
					sint sit nam voluptate corrupti? Perferendis iusto assumenda at totam!{" "}
				</p>
				<div className="w-full flex justify-center items-center bg-slate-200 text-slate-600 p-2 rounded-lg my-3 cursor-pointer font-bold text-sm">
					Learn More
				</div>
			</div>
		</div>
	);
};

export default RightMenu;

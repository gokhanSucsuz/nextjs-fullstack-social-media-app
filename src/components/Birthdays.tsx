import Image from "next/image";
import React from "react";

const Birthdays = () => {
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
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
	);
};

export default Birthdays;

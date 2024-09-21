import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
	return (
		<div className="bg-white shadow-md w-full flex flex-col rounded-lg">
			<div className="flex items-center w-full justify-between p-4 text-sm">
				<span className="font-bold text-slate-500">User Media</span>
				<Link href="/" className="text-blue-400 text-xs">
					See all
				</Link>
			</div>
			<div className="flex flex-wrap justify-center items-center w-full gap-3 p-2">
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/28248795/pexels-photo-28248795/free-photo-of-elma-kurutma.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/28056731/pexels-photo-28056731/free-photo-of-gida-yemek-yiyecek-plaka.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/28381510/pexels-photo-28381510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/20227899/pexels-photo-20227899/free-photo-of-kent-sehir-tekneler-gemiler.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/27206011/pexels-photo-27206011/free-photo-of-trafik-sanayi-endustri-tirabzanlar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/28410262/pexels-photo-28410262/free-photo-of-varsayilan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/28451901/pexels-photo-28451901/free-photo-of-montmartre-daki-canli-paris-kafe-sahnesi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/14987621/pexels-photo-14987621/free-photo-of-aljubail-suudi-arabistan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
				<Link href="/">
					<Image
						src="https://images.pexels.com/photos/9560280/pexels-photo-9560280.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="alt"
						width={80}
						height={80}
						className="rounded-lg w-20 h-20 object-cover"
					/>
				</Link>
			</div>
		</div>
	);
};

export default UserMediaCard;

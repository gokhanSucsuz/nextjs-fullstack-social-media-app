import Image from "next/image";
import React from "react";
import Post from "./Post";

const Feed = () => {
	return (
		<div className="flex flex-col items-center bg-white shadow-lg  rounded-lg gap-6 p-4">
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
};

export default Feed;

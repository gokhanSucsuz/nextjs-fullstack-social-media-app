import React from "react";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const Feed = async ({ username }: { username?: string }) => {
	const { userId } = auth();

	let posts:any[]=[];
	if (posts) {
		posts = await prisma.post.findMany({
			where: {
				user: {
					username: username
				}
			},
			include: {
				user: true,
				likes: {
					select: {
						userId: true
					}
				},
				_count: {
					select: {
						comments: true
					}
				}
			},
			orderBy: {
				createdAt: "desc"
			}
		});

		if (!username && userId) {
			const following = await prisma.follower.findMany({
				where: {
					followerId: userId
				},
				select: {
					followingId: true
				}
			});
			const followingIds = following.map(f => f.followingId);
			posts = await prisma.post.findMany({
				where: {
					userId: {
						in: followingIds
					}
				},
				include: {
					user: true,
					likes: {
						select: {
							userId: true
						}
					},
					_count: {
						select: {
							comments: true
						}
					}
				},
				orderBy: {
					createdAt: "desc"
				}
			});
		}
	}
	return (
		<div className="flex flex-col items-center bg-white shadow-lg  rounded-lg gap-6 p-4">
			{posts?.length ? (
			posts.map((post)=><Post key={post.id} post={post} />)
			): "No posts found!"}
		</div>
	);
};

export default Feed;

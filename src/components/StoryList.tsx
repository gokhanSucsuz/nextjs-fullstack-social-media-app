"use client";

import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import prisma from '@/lib/client';
import { addStory } from '../lib/actions';

type StoryWithUser = Story & {
	user: User;
};
const StoryList = ({ stories, userId }: { stories: StoryWithUser[], userId:string }) => {
	const [storyList, setStoryList] = useState(stories);
	const [img, setImg] = useState<any>("");

	
    const { user, isLoaded } = useUser()
    
    const add = async () => {
        if (!img?.secure_url) return;
        addOptimisticStory({
            id: Math.random(),
            img:img.secure_url,
            createdAt: new Date(Date.now()),
            expiresAt: new Date(Date.now()+24*60*60*1000),
            userId: userId,
            user: {
                id: userId,
                username: "Sending...",
                avatar: user?.imageUrl|| "/noAvatar.png",
                cover: "",
                description: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                createdAd: new Date(Date.now()),
            }
        })
       try {
           const createdStory = await addStory(img.secure_url)
           setStoryList(prev => [createdStory!, ...prev])
           setImg(null)
       } catch (error) {
        
        }
        
    }
    const [
		optimisticStories,
		addOptimisticStory
	] = useOptimistic(storyList, (state, value: StoryWithUser) => [
		value,
		...state
    ]);
	return (
		<div className="flex flex-row gap-4">
			<CldUploadWidget
				uploadPreset="social"
				onSuccess={(result, { widget }) => {
					setImg(result.info);
					widget.close();
				}}
			>
				{({ open }) => {
					return (
                        <div
                            className="flex flex-col items-center gap-2 cursor-pointer relative">
                            <Image
                                onClick={()=>open()}
                                src={img?.secure_url || user?.imageUrl ||"/noAvatar.png"}
                                alt="story"
                                className="w-20 h-20 rounded-full ring-2 object-cover" width={80} height={80} />
                            {img ? (<form action={add}>
                                <button className="text-xs bg-blue-500 p-1 rounded-md text-white">Send</button>
                            </form>):<span className="font-medium">Add Story</span>}
                            <div onClick={()=>open()} className="absolute text-6xl text-gray-200  rounded-full">+</div>
                        </div>
					);
				}}
			</CldUploadWidget>
			{optimisticStories.map(story =>
				<div className="flex flex-col items-center gap-2" key={story.id}>
					{story.user.avatar &&
						<Image
							src={story.img || "/noAvatar.png"}
							alt="story"
							className="w-20 h-20 rounded-full ring-2"
							width={80}
							height={80}
						/>}
					<span className="font-medium">
						{story.user.name || story.user.username}
					</span>
				</div>
			)}
		</div>
	);
};

export default StoryList;

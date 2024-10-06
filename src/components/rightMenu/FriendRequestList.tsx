"use client";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & { sender: User };

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests)

    const accept = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId)
        try {
            await acceptFollowRequest(userId)
            setRequestState(prev=>prev.filter(req=>req.id!==requestId))
        } catch (error) {
            
        }
    }

        const decline = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId)
        try {
            await declineFollowRequest(userId)
            setRequestState(prev=>prev.filter(req=>req.id!==requestId))
        } catch (error) {
            
        }
    }

    const [optimisticRequests, removeOptimisticRequest] = useOptimistic(requestState,
        (state, value: number) => 
        state.filter(req=>req.id !== value)
    )
	return (
        <>
        {optimisticRequests.map((request) => <div className="flex w-full" key={request.id}>
			<div className="flex flex-2 items-center gap-4 p-4">
				<Image
					src={request.sender.avatar || "noAvatar.png"}
					alt="alt"
					width={400}
					height={400}
					className="w-10 h-10 rounded-full object-cover"
				/>
				<span className="font-semibold text-slate-800">{request.sender.name && request.sender.surname ? request.sender.name + " " + request.sender.surname: request.sender.username}</span>
			</div>
            <div className="flex flex-1 items-center justify-end w-full gap-4 p-4">
                <form action={() => accept(request.id, request.sender.id)}>
                    <button>
                        <Image src={"/accept.png"} alt="alt" width={16} height={16} />
                    </button>
                </form>
				<form action={() => decline(request.id, request.sender.id)}>
                    <button>
                        <Image src={"/reject.png"} alt="alt" width={16} height={16} />
                    </button>
                </form>
				
			</div>
		</div>)}
        </>
	);
};

export default FriendRequestList;

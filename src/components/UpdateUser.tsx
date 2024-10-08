"use client";
import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import UpdateButton from "./rightMenu/UpdateButton";

const UpdateUser = ({ user }: { user: User }) => {
	const [open, setOpen] = useState(false);
	const [cover, setCover] = useState<any>("");
	const router = useRouter()
	
		const [state, formAction] = useActionState(updateProfile, { success: false, error: false })
	const handleClose = () => {
		setOpen(false);
		state.success && router.refresh()
	
	};



	
	
	return (
		<div>
			<span
				className="text-blue-500 text-xs cursor-pointer"
				onClick={() => setOpen(true)}
			>
				Update
			</span>
			{open &&
				<div
					className="absolute w-screen h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50 "
					onClick={handleClose}
				>
					<form
						onClick={e => e.stopPropagation()}
						action={formData => formAction({formData, cover:cover?.secure_url || ""})}
						className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
					>
						<h1>Update Profile</h1>
						<div className="mt-4 text-xs text-gray-500">
							Use the navbar profile to change the avatar or username.
						</div>

						<CldUploadWidget
							uploadPreset="social"
							onSuccess={result => setCover(result.info)}
						>
							{({ open }) => {
								return (
									<div
										className="flex flex-col gap-4 my-4"
										onClick={() => open()}
									>
										<label htmlFor="">Cover Picture</label>
										<div className="flex items-center gap-2 cursor-pointer">
											<Image
												src={user.cover || "/noCover.png"}
												alt=""
												width={48}
												height={32}
												className="w-12 h-8 rounded-md object-cover"
											/>
											<span className="text-xs underline text-gray-600">
												Change
											</span>
										</div>
									</div>
								);
							}}
						</CldUploadWidget>

						<div className="flex flex-wrap justify-between gap-2 xl:gap-4 text-xs">
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									First Name:{" "}
								</label>
								<input
									type="text"
									name="name"
									placeholder={user.name || "First Name"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Last Name:{" "}
								</label>
								<input
									type="text"
									name="surname"
									placeholder={user.surname || "Last Name"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Description:{" "}
								</label>
								<input
									type="text"
									name="description"
									placeholder={user.description || "Description"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									City:{" "}
								</label>
								<input
									type="text"
									name="city"
									placeholder={user.city || "Frankfurt"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									School:{" "}
								</label>
								<input
									type="text"
									name="school"
									placeholder={user.school || "School"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Work:{" "}
								</label>
								<input
									type="text"
									name="work"
									placeholder={user.work || "Work"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Website:{" "}
								</label>
								<input
									type="text"
									name="website"
									placeholder={user.website || "Website"}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
								/>
							</div>
						</div>
						<UpdateButton />
						{state?.success && <span className="text-green-500">Profile has been updated!</span>}
						{state?.error && <span className="text-red-500">Something went wrong!</span>}
						<div
							className="cursor-pointer w-2 h-2 flex absolute top-3 right-6"
							onClick={handleClose}
						>
							X
						</div>
					</form>
				</div>}
		</div>
	);
};

export default UpdateUser;

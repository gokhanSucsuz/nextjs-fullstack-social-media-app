import React from "react";
import { useFormStatus } from "react-dom";

const UpdateButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg disabled:cursor-not-allowed"
		>
			{pending ? "Updating..." : "Update"}
		</button>
	);
};

export default UpdateButton;

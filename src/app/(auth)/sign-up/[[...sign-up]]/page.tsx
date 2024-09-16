import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return <div className="flex h-[calc(100vh-96px)] justify-center items-center z-0 relative">
			<SignUp />
		</div>;
}

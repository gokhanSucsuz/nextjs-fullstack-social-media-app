import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return <div className="flex h-[calc(100vh-96px)] justify-center items-center relative z-0">
			<SignIn />
		</div>;
}

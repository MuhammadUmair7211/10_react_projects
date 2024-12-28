import React from "react";

const Login = () => {
	return (
		<div className="md:w-[500px] md:h-[500px] bg-white rounded-md px-2 py-2 flex flex-col items-center mx-10">
			<div className="mt-4">
				<img src="/images/twitter.png" alt="twitter" className="w-10" />
			</div>
			<h1 className="text-center text-2xl font-extrabold mt-4">
				Sign in to Twitter
			</h1>
			<div className="w-full mt-6 px-8">
				<button className="flex items-center justify-center border border-gray-300 rounded-3xl py-2 w-full">
					<img src="/images/google.png" alt="google" className="w-6 mr-2" />
					Sign in with Google
				</button>
				<button className="flex items-center justify-center border border-gray-300 rounded-3xl w-full py-2 mt-6">
					<img src="/images/apple-logo.png" alt="google" className="w-6 mr-2" />
					Sign in with Apple
				</button>
				<button className="border border-gray-300  w-full py-2 mt-6">
					Phone email or username
				</button>
				<button className="border border-gray-300 bg-black text-white rounded-3xl w-full py-2 mt-6 hover:bg-white hover:text-black transition-all">
					Next
				</button>
				<button className="border border-gray-300 rounded-3xl w-full py-2 mt-6 ">
					Forgot Password
				</button>
				<p className="text-center mt-4 text-gray-500">
					Don&apos;t have an account?
					<a
						href="/"
						className="px-2 py-1 hover:text-black transition-all rounded-lg"
					>
						Sign Up
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;

import React, { useState } from "react";
// import illustration from "./illustration.png"; // Import your illustrator image
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { BsMicrosoft } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Logic for handling login form submission
		const { data } = await axios.post("http://localhost:5000/api/auth/login", {
			username: email,
			password,
		});

		console.log(data);
		if (data.success == true) {
			localStorage.setItem("username", data.data.username);
			localStorage.setItem("_id", data.data._id);

			navigate("/chat");
		}
	};

	return (
		<>
			<div className="flex h-screen w-3/5 mx-auto sm:py-12 justify-center mb-4">
				<div
					className="w-1/2 lg:flex items-center justify-center relative hidden"
					style={{ backgroundSize: "cover", backgroundPosition: "center" }}
				>
					{/* <img src="../images/login.png" className="absolute -left-1 top-4" /> */}
					<img src="../images/screenshot4.png" className="z-50" />
				</div>
				<div className="flex flex-col space-y-4">
					<div className="sm:border flex flex-col items-center border-gray-300 shadow-sm shadow-gray-300 rounded-xl">
						<img src="../images/insta.png" className="w-64 my-8" />
						<div className="sm:w-[90%] p-6 rounded-lg">
							<form onSubmit={handleSubmit}>
								<div className="mb-2">
									<input
										type=""
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder={"phone number, username or email"}
										className="text-black w-full border-b-2 border-l-1 border-r-2 border-t-1 border-gray-400 rounded bg-gray-50 dark:text-white dark:bg-[#262626] py-1.5 px-3 outline-none"
									/>
								</div>
								<div className="mb-4">
									<input
										type="password"
										id="password"
										value={password}
										placeholder={"password"}
										onChange={(e) => setPassword(e.target.value)}
										className="text-black w-full border-b-2 border-l-1 border-r-2 border-t-1 border-gray-400 rounded bg-gray-50 dark:text-white dark:bg-[#262626] py-1.5 px-3 outline-none"
									/>
								</div>
								<button
									type="submit"
									className="bg-blue-500 w-full text-white py-2 px-2 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-colors duration-300"
								>
									Log In
								</button>
							</form>
							<div className="my-6 relative">
								<h6 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium bg-white z-50 w-12 text-center">
									OR
								</h6>
								<div className="h-px -z-50 bg-gray-500"></div>
							</div>
							<div className="flex justify-center items-center space-x-2 text-indigo-700 rounded-xl">
								{/* <span className="bg-white"><AiFillFacebook /></span>
								<h6 className="bg-[#4267B2] text-white py-2">Log in with Facebook</h6> */}
								<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded flex items-center">
									<AiFillFacebook  className="mr-2 text-3xl"/>
									<span className="ml-2">Login with Facebook</span>
								</button>

							</div>
							<h6 className="text-center text-xs my-4 text-indigo-700 cursor-pointer">Forgot password?</h6>
						</div>
					</div>
					<div className="sm:border p-6 rounded-xl border-gray-300">
						<h1 className="text-center">
							<span className="dark:text-white">Don't have an account?{" "}</span>
							<span className="text-indigo-700 cursor-pointer">Sign up</span>
						</h1>
					</div>
					<div className="">
						<h1 className="text-center dark:text-white">Get the app.</h1>
						<div className="flex justify-center space-x-2 sm:space-x-4 mt-2 text-white">
							<div className="flex space-x-4 items-center bg-black py-1 sm:py-2 sm:px-4 px-2 rounded-lg cursor-pointer dark:bg-[#262626]">
								<IoLogoGooglePlaystore className="text-2xl" />
								<div className="text-sm sm:text-base">
									<h1>Get it on</h1>
									<h1>GooglePlay</h1>
								</div>
							</div>
							<div className="flex space-x-4 items-center bg-black py-1 px-2 sm:py-2 sm:px-4 rounded-lg cursor-pointer dark:bg-[#262626]">
								<BsMicrosoft className="text-2xl" />
								<div>
									<h1>Get it on</h1>
									<h1>GooglePlay</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};


const Footer = () => {
	return (
		<>
			<div className="text-gray-500 text-xs flex space-x-4 sm:w-3/5 justify-center mx-auto flex-wrap mt-10">
				<h1>Meta</h1>
				<h1>About</h1>
				<h1>Blog</h1>
				<h1>Jobs</h1>
				<h1>Help</h1>
				<h1>API</h1>
				<h1>Privacy</h1>
				<h1>Terms</h1>
				<h1>Top Accounts</h1>
				<h1>Locations</h1>
				<h1>Instagram Lite</h1>
				<h1>Contact Uploading & Non-Users</h1>
				<h1>Meta Verified</h1>
			</div>
			<div className="flex space-x-4 text-xs text-gray-600 sm:w-3/5 justify-center mx-auto mt-4 mb-8">
				<h4>English</h4>
				<div>
					<h4>&#169; 2023 Instagram from Meta</h4>
				</div>
			</div>
		</>
	)
}
export default Login;

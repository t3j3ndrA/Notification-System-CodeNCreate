import React, { useState } from "react";
// import illustration from "./illustration.png"; // Import your illustrator image
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

			navigate("/");
		}
	};

	return (
		<div className="flex h-screen">
			<div
				className="w-1/2 bg-purple-500 flex items-center justify-center"
				style={{ backgroundSize: "cover", backgroundPosition: "center" }}
			>
				{/* Add your illustrator image here */}
			</div>
			<div className="w-1/2 flex items-center justify-center bg-blue-500">
				<div className="w-96 p-6 rounded-lg bg-pink-500 text-white">
					<h2 className="text-2xl font-bold mb-6">Log In</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="email" className="block mb-2">
								Username:
							</label>
							<input
								type=""
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="text-black w-full rounded border-none py-2 px-3"
							/>
						</div>
						<div className="mb-6">
							<label htmlFor="password" className="block mb-2">
								Password:
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="text-black w-full rounded border-none py-2 px-3"
							/>
						</div>
						<button
							type="submit"
							className="bg-white text-blue-500 py-2 px-4 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300"
						>
							Log In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

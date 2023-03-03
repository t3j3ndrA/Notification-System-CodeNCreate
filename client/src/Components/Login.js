import React, { useState } from "react";
// import illustration from "./illustration.png"; // Import your illustrator image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling login form submission
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-purple-500 flex items-center justify-center"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Add your illustrator image here */}
      </div>
      <div className="w-1/2 flex items-center justify-center bg-blue-500">
        <div className="w-96 p-6 rounded-lg bg-pink-500 text-white">
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border-none py-2 px-3"
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
                className="w-full rounded border-none py-2 px-3"
              />
            </div>
            <button type="submit" className="bg-white text-blue-500 py-2 px-4 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
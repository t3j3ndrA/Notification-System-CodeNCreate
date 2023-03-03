import { useEffect, useState } from "react";

function App() {
	useEffect(() => {
		return () => {};
	}, []);

	return <div className="text-red-500">App.js</div>;
}

export default App;

const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./utils/connectDB");
const app = express();

// enviorment varibale configuration before using them in the code
env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get("/api", (req, res) => {
	res.json({ msg: "server is up and running!" });
});

// db connections
connectDB();

// starting server
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("listening on port  : " + port);
});

//we import express and cors to use them in this file
import express, { response } from "express";
import cors from "cors";

//import dotenv to use our .env file
import dotenv from "dotenv";

//configure dotenv
dotenv.config();

//import pg to connect our database to the server
import pg from "pg";

//import our connection string
const dbConnectionString = process.env.DATABASE_URL;

//importing API
const UploadAPI = process.env.UPLOAD_API_KEY;

//initialise our express app
const app = express();

//setting up new endpoint for api
app.post("/api", async (req, res) => {
  const API = `${UploadAPI}`;
  const response = await fetch(API);
  const uploadAPIData = await response.json();
  response.json(uploadAPIData.results);
});

//intialise our database
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//set my app to read json data
app.use(express.json());

// initialise cors policies
app.use(cors());

//set up a PORT for my server (number is irrelevnat, unless it's a reserved port)
const PORT = 7272;

// We have to listen to the PORT, so our server has a location to use.
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

//create an endpoint for our root route to READ data
app.get("/", (request, response) => {
  response.json({ message: "This is the root route. How roude!" });
});

//to store my secrets, I creates a .env file to keep them safe

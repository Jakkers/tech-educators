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

// //importing API
// const UploadAPI = process.env.UPLOAD_API_KEY;

//initialise our express app
const app = express();

// //setting up new endpoint for api
// app.post("/api", async (req, res) => {
//   const API = `${UploadAPI}`;
//   const response = await fetch(API);
//   const uploadAPIData = await response.json();
//   response.json(uploadAPIData.results);
// });

//intialise our database (Iused export, so my db is available in the seed.js)
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//set my app to read json data
app.use(express.json());

// initialise cors policies
app.use(cors());

//set up a PORT for my server (number is irrelevnat, unless it's a reserved port)
const PORT = 8383;

// We have to listen to the PORT, so our server has a location to use.
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

//create an endpoint for our root route to READ data
app.get("/", (request, response) => {
  response.json({ message: "This is the root route. How roude!" });
});

//create an endpoint to READ data from the biscuits table
//I need to add async and await because Supabase is an API and we don't know how long it will take to respond.
app.get("/biscuits", async (request, response) => {
  //write a sql query that selects data from the database
  const dbData = await db.query(`
        SELECT * FROM biscuits`);
  console.log(dbData);
  //parse the result into json and wrangle the data from the result object
  response.json(dbData.rows);
});

//create an endpoint to READ specific data from the database
app.get("/somebiscuits", async (request, response) => {
  //Write a SQL query that SELECTS specific data from the database
  //we are using parameter values $1, $2, $3... for security purposes
  //we can concatenate conditions using AND
  const result = await db.query(
    `SELECT * FROM biscuits WHERE name = $1 AND id = $2`,
    ["Oreo"]
  );
  //parse th eresult into json and wranlge data from the result object
  response.json(result.rows);
});

//to store my secrets, I creates a .env file to keep them safe

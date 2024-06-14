// A seed file is used for testing our database with sql queries
// Creating our tables
// Inserting test data

//import db from server.js --> I have destructured the db element. so onl part of the server file that we need is available.
import { db } from "./server.js";

// A SQL in the seed file --> We need to write our SQL in backticks and inside the query method. The query method is in the database (db).
db.query(`CREATE TABLE IF NOT EXISTS biscuits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price MONEY,
    calories INTEGER,
    flavour TEXT,
    crunchiness INTEGER
)`);

//a sql query to insert data into my biscuites table
db.query(`INSERT INTO biscuits (name,price,calories,flavour,crunchiness)
    VALUES ('Mannys', 2, 0, 'chocolate',7)`);

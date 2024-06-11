import express from "express";
import cors from "cors";

const app = express();

app.use(express.json()); //ensure this is present so the server can understand JSON data

app.use(cors());

const PORT = 7373;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", function (request, response) {
  response.json({ status: "This is the root route, how roude!" });
});

app.post("/messages", function (request, response) {
  console.log("request.body", request.body);
  response.json({ status: "message received!" });
});

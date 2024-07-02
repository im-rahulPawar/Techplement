import express from "express";
import bodyParser from "body-parser";
import { connectToMongoose } from "./src/config/mongooseConfig.js";
import router from "./src/quotes/quotes.routes.js";
import { QuoteModel } from "./src/quotes/quotes.schema.js";

const server = express();

server.use(bodyParser.json());

// Default request handler
server.get("/", async (req, res) => {
  try {
    const count = await QuoteModel.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await QuoteModel.findOne().skip(randomIndex);
    res.send("Quote of the Day : " + randomQuote.quote);
  } catch (error) {
    res.status(500).send("OPS!! Quote not found");
  }
});

server.use("/quotes", router);

// Specify port.
server.listen(3500, () => {
  console.log("Server is listening on port 3500");
  connectToMongoose();
});

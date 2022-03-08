import express, { Request, Response } from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("hello!");
});

app.listen(3333, () => {
  console.log("running app...");
});

import { render } from "preact-render-to-string";
import express from "express";
import { renderStylesToString } from "emotion-server";
import { IndexPage } from "./page";

const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();

server.get("/", function(req, res) {
  res.send(renderStylesToString(render(IndexPage())));
});

server.listen(port, err => {
  if (err) throw err;
  console.log(`Ready on http://localhost:${port}`);
});

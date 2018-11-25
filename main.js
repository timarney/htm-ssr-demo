import { render } from "preact-render-to-string";
import express from "express";
import { renderStylesToString } from "emotion-server";
import { IndexPage, AboutPage } from "./pages";

const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();

const renderPage = page => {
  return renderStylesToString(render(page));
};

server.get("/", function(req, res) {
  res.send(renderPage(IndexPage()));
});

server.get("/about", function(req, res) {
  res.send(renderPage(AboutPage()));
});

server.listen(port, err => {
  if (err) throw err;
  console.log(`Ready on http://localhost:${port}`);
});

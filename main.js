import { render } from "preact-render-to-string";
import express from "express";
import { renderStylesToString } from "emotion-server";
import { IndexPage, AboutPage } from "./pages";
import { HtmlPage } from "./pages/document";

const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();

const renderPage = (title, page) => {
  return HtmlPage({ title, content: renderStylesToString(render(page)) });
};

server.get("/", function(req, res) {
  res.send(renderPage("Home", IndexPage()));
});

server.get("/about", function(req, res) {
  res.send(renderPage("About", AboutPage()));
});

server.listen(port, err => {
  if (err) throw err;
  console.log(`Ready on http://localhost:${port}`);
});

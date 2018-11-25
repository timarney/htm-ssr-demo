import htm from "../htm";
import { h } from "preact";
const html = htm.bind(h);

export const HtmlPage = ({ title, content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <meta name="description" content="SSR Demo" />
        <meta name="author" content="Tim Arney" />
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};

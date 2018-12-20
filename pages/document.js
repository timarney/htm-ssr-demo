export const HtmlPage = ({ title, content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <meta name="description" content="SSR Demo" />
        <meta name="author" content="Tim Arney" />
        <style>
        body {
          font-family: Helvetica, Arial, Sans-Serif;
        }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};

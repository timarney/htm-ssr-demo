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
        a{
          color:#000;
          display:inline-block;
          margin-right:20px;
        }
        a:hover{
          color:#888;
        }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};

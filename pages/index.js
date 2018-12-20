import htm from "htm";
import { h } from "preact";
import { css } from "emotion";

const html = htm.bind(h);

const pink = css`
  color: #ff69b4;
`;

const link = css`
  color: #000;
  margin: 5px;
  &:visited {
    color: #000;
  }
  &:hover {
    color: #888;
  }
`;

const main = css`
  margin-top: 20px;
`;

const items = ["@rauchg", "@timarney", "@TejasKumar_", "@aaronshaf"];

export const IndexPage = () => {
  return html`
    <div>
      <h1 class="${pink}">People who have been waiting for HTM 2 !</h1>
      <a class="${link}" title="about" href="/about">About Page</a>
      <div class="${main}">
        ${
          items.map(item => {
            const href = `https://twitter.com/${item}`;
            return html`
              <div><a class="${link}" href=${href}>${item}</a></div>
            `;
          })
        }
      </div>
      <p>
        <strong>Source:</strong>
        <a class="${link}" href="https://github.com/timarney/htm-ssr-demo"
          >htm-ssr-demo</a
        >
      </p>
    </div>
  `;
};

export const AboutPage = () => {
  return html`
    <div>
      <h1 class="${pink}">About</h1>
      <p>Nice</p>
    </div>
  `;
};

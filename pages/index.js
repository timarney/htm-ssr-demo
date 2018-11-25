import htm from "../htm";
import { h } from "preact";
import { css } from "emotion";

const html = htm.bind(h);
const pink = css`
  background-color: hotpink;
  &:hover {
    color: #fff;
  }
`;

const items = ["Hey", "Thanks @_developit!"];

export const IndexPage = () => {
  return html`
    <div>
      <h1 class="${pink}">Hello world!</h1>
      <a title="about" href="/about">About Page</a>
      <div>
        ${
          items.map(item => {
            return html`
              <div>${item}</div>
            `;
          })
        }
      </div>

      <p>
        <strong>Source:</strong>
        <a href="https://github.com/timarney/htm-ssr-demo">htm-ssr-demo</a>
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

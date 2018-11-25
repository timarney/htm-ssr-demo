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
      <div>
        ${
          items.map(item => {
            return html`
              <div>${item}</div>
            `;
          })
        }
      </div>
      <a href="/about">About</a>
    </div>
  `;
};

export const AboutPage = () => {
  return html`
    <h1 class="${pink}">About</h1>
  `;
};

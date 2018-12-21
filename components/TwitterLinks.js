import htm from "htm";
import { h } from "preact";
import { css } from "emotion";
const html = htm.bind(h);

const main = css`
  color: #ff1493;

  li {
    margin-bottom: 10px;

    a {
      display: inline;
      width: auto;
      margin-left: 10px;
    }
  }
`;

const mapItems = item => {
  const href = `https://twitter.com/${item}`;
  const alt = `${item} on Twitter`;
  return html`
    <li><a alt="${alt}" href=${href}>${item}</a></li>
  `;
};

export const TwitterLinks = ({ items = [] }) => {
  return html`
    <ul class="${main}">
      ${items.map(mapItems)}
    </ul>
  `;
};

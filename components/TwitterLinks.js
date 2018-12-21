import htm from "htm";
import { h } from "preact";
import { css } from "emotion";
import { link } from "../theme";

const html = htm.bind(h);

const main = css`
  margin-top: 20px;
`;

export const TwitterLinks = () => {
  const items = ["@rauchg", "@timarney", "@TejasKumar_", "@aaronshaf"];
  return items.map(item => {
    const href = `https://twitter.com/${item}`;
    const alt = `${item} on Twitter`;
    return html`
      <div><a alt="${alt}" class="${link}" href=${href}>${item}</a></div>
    `;
  });
};

import htm from "htm";
import { h } from "preact";
import { link } from "../theme";
const html = htm.bind(h);
export const Header = () => {
  return html`
    <div>
      <a class="${link}" title="home" href="/"> Home </a>
      <a class="${link}" title="about" href="/about"> About </a>
    </div>
  `;
};

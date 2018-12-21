import htm from "htm";
import { h } from "preact";
const html = htm.bind(h);
export const Header = () => {
  return html`
    <div>
      <a title="home" href="/"> Home </a>
      <a title="about" href="/about"> About </a>
    </div>
  `;
};

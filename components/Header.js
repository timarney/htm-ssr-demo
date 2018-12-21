import htm from "htm";
import { h } from "preact";
const html = htm.bind(h);
export const Header = () => {
  return html`
    <div>
      <a alt="home" href="/"> Home </a> <a alt="about" href="/about"> About </a>
    </div>
  `;
};

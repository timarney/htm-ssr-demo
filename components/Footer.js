import htm from "htm";
import { h } from "preact";
import { link } from "../theme";
const html = htm.bind(h);
export const Footer = () => {
  return html`
    <p>
      <strong>Source:</strong>
      <a
        alt="Demo Link"
        class="${link}"
        href="https://github.com/timarney/htm-ssr-demo"
      >
        htm-ssr-demo
      </a>
    </p>
  `;
};

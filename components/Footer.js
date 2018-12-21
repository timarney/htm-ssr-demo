import htm from "htm";
import { h } from "preact";
const html = htm.bind(h);
export const Footer = () => {
  return html`
    <p>
      <strong>Source:</strong>
      <a alt="Demo Link" href="https://github.com/timarney/htm-ssr-demo">
        htm-ssr-demo
      </a>
    </p>
  `;
};

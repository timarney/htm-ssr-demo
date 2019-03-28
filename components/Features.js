import htm from "htm";
import { h } from "preact";
const html = htm.bind(h);
export const Features = () => {
    return html`
        <p>
        <h2>Features:</h2>
        <ul>
            <li>Server Side Rendered HTML + CSS (Emotion)</li>
            <li>HTM Rendering using JSX-like syntax in plain JavaScript - no transpiler necessary.</li>
            <li>Zero Babel config</li>
        </ul>
        </p>
  `;
};
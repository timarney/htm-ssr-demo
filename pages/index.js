import htm from "htm";
import { h } from "preact";
import { css } from "emotion";
import { Header, Footer, Features, TwitterLinks } from "../components/";

const html = htm.bind(h);

const pink = css`
  color: #ff1493;
`;

const items = ["@rauchg", "@timarney", "@TejasKumar_", "@aaronshaf"];

export const IndexPage = () => {
  return html`
    <div>
      <${Header} />
      <p>
        <a href="https://twitter.com/_developit/status/1075860623119081472">HTM 2 is here! 🎉</a>
      </p>
      <h1 class="${pink}">People who have been waiting for HTM 2 !</h1>
      <${TwitterLinks} items="${items}" /> 
      <${Features} />
      <${Footer} />
    </div>
  `;
};

export const AboutPage = () => {
  return html`
    <div>
      <${Header} />
      <h1 class="${pink}">About</h1>
      <p>Nice</p>
      <${Footer} />
    </div>
  `;
};

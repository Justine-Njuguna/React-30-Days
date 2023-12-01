import React from "react";
import ReactDOM from "react-dom";

const htmlLogo = <img src="./HTML.png" alt="html logo" />;
const cssLogo = <img src="./CSS.jpeg" alt="css logo" />;
const jsLogo = <img src="./Js.png" alt="js logo" />;
const reactLogo = <img src="./logo.svg" alt="react logo" />;

// JSX element, header
const headerStyles = {
  display: "flex",
  alignItems: "center",
  padding: "1rem",
};

const header = (
  <header className={headerStyles}>
    <h3>Front end Technologies</h3>
  </header>
);

// main styles css
const mainStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "lightblue",
};

const main = (
  <main>
    <div className={mainStyles}>
      <ul>
        <li>{htmlLogo}</li>
        <li>{cssLogo}</li>
        <li>{jsLogo}</li>
        <li>{reactLogo}</li>
      </ul>
    </div>
  </main>
);

// footer styles css
const footerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "lightpurple",
};

const footer = (
  <footer>
    <div className={footerStyles}>
      <p>CopyRight 2023</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, document.getElementById("root"));

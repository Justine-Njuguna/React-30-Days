import React from "react";
import ReactDOM from "react-dom";
import htmlLogo from './images/HTML.png'
import cssLogo from './images/CSS.jpeg'
import jsLogo from "./images/Js.png"
import reactLogo from "./images/logo.svg"


// main styles css
const mainStyles = {
  display: "flex",
  flexDirection: "column", // Stack items vertically
  // justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  textAlign: "center",
  height: "100vh", // Full viewport height
};

// Apply a common style for the logos
const logoStyle = {
  width: "50px", // Adjust the width as needed
  height: "auto", // Maintain aspect ratio
  margin: "0.5rem", // Add margin for spacing
};

const newsLetter = {
  fontSize: "15px",
  backgroundColor: 'lightblue',
  margin: "5px",
  padding: "25",
  lineHeight: "1.5"
}

const formDesign = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
}

const subscribeButton = {
  padding: "0.5rem 1rem", //Added some padding
  borderRadius: "8px", //soft edges
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "all 0.3s ease",
  outline: "none",
  width: "100%",
  margin: "0.5rem 0",
  // Add hover effects
  ":hover": {
    backgroundColor: "red",
  },
  ":active": {
    backgroundColor: "darkred",
  },
}

const main = (
  <main style={mainStyles}>
    <header>
      <h3>Front end Technologies</h3>
    </header>
    <div>
      <img src={htmlLogo} alt="html Logo" style={logoStyle} />
      <img src={cssLogo} alt="css Logo" style={logoStyle} />
      <img src={jsLogo} alt="js logo" style={logoStyle} />
      <img src={reactLogo} alt="react logo" style={logoStyle} />
    </div>

    <div className={newsLetter}>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <form style={formDesign}>
        <input type="email" placeholder="Enter your email" />
        <input type="text" placeholder="Enter your first name" />
        <input type="text" placeholder="Enter your last name" />
        <button style={subscribeButton}>Subscribe</button>
      </form>
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
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, document.getElementById("root"));

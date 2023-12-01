import React from "react";
import ReactDOM from "react-dom";
import htmlLogo from './images/HTML.png'
import cssLogo from './images/CSS.jpeg'
import jsLogo from "./images/Js.png"
import reactLogo from "./images/logo.svg"
import aeldraUser from "./images/Aeldra.jpg"
import { mainStyles, newsLetter, logoStyle, formDesign, inputStyle, subscribeButton, userCard, userDetails, userImage, imgStyle, skills, skillItem, skillList, footerStyles } from "./exercises/Day_1/styles";

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

    <div style={newsLetter}>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <form style={formDesign}>
        <input type="email" placeholder="Enter your email" style={inputStyle}/>
        <input type="text" placeholder="Enter your first name" style={inputStyle} />
        <input type="text" placeholder="Enter your last name" style={inputStyle}/>
        <button style={subscribeButton}>Subscribe</button>
      </form>
    </div>

    <div style={userCard}>
      <div style={userImage}>
        <img src={aeldraUser} alt="user profile" style={imgStyle} />
      </div>
      <div style={userDetails}>
      <h2>Justine Aeldra</h2>
      <p>Front-end Developer, Mombasa</p>
      </div>
      
      <div style={skills}>
        <h2>SKILLS</h2>
        <ul style={skillList}>
        <li style={skillItem}>HTML</li>
        <li style={skillItem}>CSS</li>
        <li style={skillItem}>JavaScript</li>
        <li style={skillItem}>React</li>
        <li style={skillItem}>Sass</li>
        <li style={skillItem}>Flask</li>
        <li style={skillItem}>Angular</li>
          </ul>
      </div>
    </div>

  </main>
);

const footer = (
  <footer>
    <div style={footerStyles}>
      <p style={{ margin: 0 }}>© 2023, Aeldra</p>
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

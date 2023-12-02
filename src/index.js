import React from "react";
import ReactDOM from "react-dom";
import htmlLogo from './images/HTML.png'
import cssLogo from './images/CSS.jpeg'
import jsLogo from "./images/Js.png"
import reactLogo from "./images/logo.svg"
import aeldraUser from "./images/Aeldra.jpg"
import { colorContainer, colorText, colorBox, mainStyles, headerStyles, newsLetter, logoStyle, formDesign, inputStyle, subscribeButton, userCard, userDetails, userImage, imgStyle, skills, skillItem, skillList, footerStyles } from "./exercises/Day_1/styles";

const calculateRemainingDays = () => {
  const currentDate = new Date();
  const targetDate = new Date('December 30, 2023');

  // Calculate the difference in milliseconds
  const differenceInTime = targetDate.getTime() - currentDate.getTime();

  // Calculate the remaining days
  const remainingDays = Math.floor(differenceInTime / (1000 * 3600 * 24)) + 1;

  return remainingDays;
};

const remainingDays = calculateRemainingDays();
const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' });

// Logo component
const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} style={logoStyle} />
)

// Hex Color Generator component
const HexColorGenerator = ({ colors }) => {
  const generateColors = () => {
    return colors.map((hexCode, index) => (
      <div key={index} style={colorContainer}>
        <p style={colorText}>{hexCode}</p>
        <div style={{...colorBox, backgroundColor: hexCode}}></div>
      </div>
    ));
  }

  return (
    generateColors()
  );
}


// Header component
const Header = () => (
  <header style={headerStyles}>
    <h1>{`${remainingDays} DAYS OF REACT | Day ${30 - remainingDays + 1}/30 :) - ${today}`}</h1>
    <h3>Front end Technologies</h3>
  </header>
);

// UserCard component
const UserCard = () => (
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
);




// Main component
const Main = () => (
  <main style={mainStyles}>
    <UserCard />
    <div>
    <Logo src={htmlLogo} alt="html Logo" />
      <Logo src={cssLogo} alt="css Logo" />
      <Logo src={jsLogo} alt="js logo" />
      <Logo src={reactLogo} alt="react logo" />
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
    <HexColorGenerator colors={["#518cef", "#3b10c4", "#9aede6", "#8ee763", "#a30dd0"]} />
  </main>
);

// Footer component
const Footer = () => (
  <footer>
    <div style={footerStyles}>
      <p style={{ margin: 0 }}>© 2023, Aeldra</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

ReactDOM.render(app, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";
import htmlLogo from './images/HTML.png'
import cssLogo from './images/CSS.jpeg'
import jsLogo from "./images/Js.png"
import reactLogo from "./images/logo.svg"
import checkMark from "./images/checkmark.png"
import aeldraUser from "./images/Aeldra.jpg"
import { colorContainer, colorText, colorBox, mainStyles, headerStyles, newsLetter, logoStyle, formDesign, inputStyle, subscribeButton, userCard, userDetails, userImage, imgStyle, skills, skillItem, skillList, footerStyles } from "./exercises/Day_1/styles";

//state for hover effect
const CustomInput = ({ placeholder }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        ...inputStyle,
        borderBottom: isHovered ? '5px solid #518cef' : '2px solid lightblue',
        marginBottom: isHovered ? '20px' : '10px', // Adjusted margin for hover effect
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

const checkmarkIcon = (
  <img
    src={checkMark}
    alt="verified"
    style={{ width: '25px', height: 'auto', verticalAlign: 'middle',marginRight: '5px', marginLeft: '5px' }}
  />
)

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
  <img src={src} alt={alt} style={{...logoStyle, margin: '0 10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}} />
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

// Updated UserCard component
const UserCard = () => (
  <div style={userCard}>
    <div style={userImage}>
      <img src={aeldraUser} alt="user profile" style={imgStyle} />
    </div>
    <div style={userDetails}>
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        Justine Aeldra
        {checkmarkIcon}  
      </h2>
      <p style={{ marginBottom: '15px', color: '#555' }}>Front-end Developer, Mombasa</p>
    </div>
    <div style={skills}>
      <h2 style={{ marginBottom: '10px' }}>SKILLS</h2>
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
      <h1 style={{ marginBottom: '10px' }}>SUBSCRIBE</h1>
      <p style={{ marginBottom: '20px' }}>Sign up with your email address to receive news and updates.</p>
        <form style={formDesign}>
          <CustomInput placeholder="Enter your email" />
          <CustomInput placeholder="Enter your first name" />
          <CustomInput placeholder="Enter your last name" />
          <button style={ subscribeButton}>Subscribe</button>
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

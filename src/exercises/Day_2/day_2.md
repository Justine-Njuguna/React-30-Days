# Day 2: React Styling and Hover Effects

## Introduction

In today's session, we continued working on our React application. The major highlights include:

- Implementing a hover effect on form input fields.
- Enhancing the UserCard component.
- Introducing a new Logo component.
- Styling improvements to the newsletter form.
- Restructuring the main component.

## Hover Effect on Form Input Fields

We added a hover effect to the input fields in the newsletter form. This effect adjusts the bottom border when the user hovers over an input field. The styling was achieved using a combination of React state and CSS transitions.

```jsx
// State for hover effect
const CustomInput = ({ placeholder }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        ...inputStyle,
        borderBottom: isHovered ? '5px solid #518cef' : '2px solid lightblue',
        marginBottom: isHovered ? '20px' : '10px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}; 
```
## UserCard Component Enhancement
The UserCard component received several improvements. Notable changes include the addition of a checkmark icon and adjustments to the layout and styling for a more refined appearance.

```const UserCard = () => (
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
```

##Introduction of Logo Component
A new Logo component was introduced to better handle the rendering of logos. This component enhances the visual consistency of the application.

```// Logo component
const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} style={{...logoStyle, margin: '0 10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}} />
);
```

## Styling Improvements to Newsletter Form
The newsletter form underwent significant styling improvements for a more modern and engaging appearance. Notably, the hover effect was applied to input fields.

```// Styling for input fields
export const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  margin: "0.5rem 0",
  borderRadius: "4px",
  border: "none",
  borderBottom: "2px solid lightblue",
  outline: "none",
  transition: 'border-bottom 0.3s ease',
};
```

## Main Component Restructuring
The main component was restructured to enhance the overall layout of the application. The Logo and HexColorGenerator components were introduced, providing better organization and visual appeal.

```// Main component
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
      {/* ... (unchanged) */}
    </div>
    <HexColorGenerator colors={["#518cef", "#3b10c4", "#9aede6", "#8ee763", "#a30dd0"]} />
  </main>
);
```

## Conclusion
These changes collectively contribute to a more polished and interactive React application. We look forward to further enhancements and functionalities in the coming sessions.

© 2023, Aeldra
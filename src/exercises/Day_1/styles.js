// main styles css
export const mainStyles = {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    // justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    minHeight: "100vh", // Full viewport height
  };
  
  // Apply a common style for the logos
  export const logoStyle = {
    width: "100px", // Adjust the width as needed
    height: "auto", // Maintain aspect ratio
    margin: "0.5rem", // Add margin for spacing
  };
  
  export const newsLetter = {
    fontSize: "15px",
    margin: "15px",
    padding: "25px",
    lineHeight: "1.5"
  }
  
  export const formDesign = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
  }
  
  export const subscribeButton = {
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
  
  export const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    margin: "0.5rem 0",
    borderRadius: "4px",
    border: "none",
    borderBottom: "2px solid lightblue", // You can adjust the border style
    outline: "none",
  };
  
  export const userCard = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    marginBottom: "1rem",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }
  
  export const userDetails = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1, // Allow it to grow and take remaining space
  };
  
  export const userImage = {
    width: "100px",
    height: "100px",
    borderRadius: "50%", // Make it circular
    overflow: "hidden", // Hide overflow to maintain circular shape
  }
  
  export const imgStyle ={
    width: "100%",
    height: "100%",
    objectFit: "cover", // Maintain aspect ratio
  }
  
  export const skills = {
    marginTop: "1rem",
  }
  
  export const skillList = {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
  }
  
  export const skillItem = {
    backgroundColor: "#ff00ff",
    borderRadius: "4px",
    margin: "0.5rem",
    padding: "0.5rem",
  }

  export const footerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem", // Reduced padding for a more subtle footer
    backgroundColor: "lightpurple",
    marginTop: "2rem", // Adjusted margin for separation
    borderTop: "1px solid #ccc", // Added a border at the top for separation
  };
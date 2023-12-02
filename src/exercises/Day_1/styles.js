
// main styles css
export const mainStyles = {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    // justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    minHeight: "100vh", // Full viewport height
    marginTop: "10rem",
  };

  export const headerStyles  = {
    position: "fixed",
    top: "0",
    width: "100%",
    backgroundColor: "white",
    padding: "1rem",
    textAlign: "Center",
    zIndex: 1,
  }
  
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

  //color generator
  export const colorContainer = {
    marginBottom: '15px',
    textAlign: 'center',
    width: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: '0.3s',
    overflow: 'hidden',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
    position: 'relative',
  }

  export const colorText = {
    margin: '0',
    color: '#ffffff',
    padding: '10px',
    fontFamily: 'Helvetica',
    lineHeight: '1.5',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '.7px',
    // background: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%'
  }

  export const colorBox = {
    height: '40px',
    width: '100%',
    borderRadius: '8px 8px 0 0',
    transition: '0.3s',
    ':hover': {
      transform: 'scale(1.1)',
    },
  }
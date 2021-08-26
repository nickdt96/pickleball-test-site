import backgroundImage from "../../assets/images/backgroundMain.jpg"

const Welcome = () => {
  return (
    /* Background Image and welcome message */
    <img 
      src={backgroundImage} 
      style={{ 
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      }}
    />
  )
}

export default Welcome;

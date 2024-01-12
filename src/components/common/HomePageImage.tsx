import { Box, useTheme } from "@material-ui/core";
import backgroundImage from "../../assets/images/pickleball.jpg"
import backgroundImageMobile from "../../assets/images/backgroundMainMobile.jpg"
import pickleballLogo from "../../assets/images/Pickleballers-logo.png"

const HomePageImage = (props: { children: any; }) => {

  // TODO - Get this image looking better for mobile.  Fix the breakpoint mediaQuery

  const theme = useTheme();

  return (
    <>
      <Box 
        style={{ 
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${theme.breakpoints.up('md') ? backgroundImage : backgroundImageMobile})`,
        }}
      >
       <img
          src={pickleballLogo}
          alt="Pickleball Logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:"translate(-50%, -50%)",
            maxWidth: "75%",
            maxHeight: "75%",
            objectFit: "contain", // Adjust the object-fit property as needed
          }}
        />

      {props.children}
      </Box>
    </>
  )
}

export default HomePageImage;

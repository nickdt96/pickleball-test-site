import { Box, useTheme } from "@material-ui/core";
import backgroundImage from "../../assets/images/backgroundMain.jpg"
import backgroundImageMobile from "../../assets/images/backgroundMainMobile.jpg"

const HomePageImage = (props: { children: any; }) => {

  // TODO - Get this image looking better for mobile.  Fix the breakpoint mediaQuery

  const theme = useTheme();

  return (
    <>
      <Box 
        style={{ 
          width: "100%",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${theme.breakpoints.up('md') ? backgroundImage : backgroundImageMobile})`,
        }}
      >
      {props.children}
      </Box>
    </>
  )
}

export default HomePageImage;

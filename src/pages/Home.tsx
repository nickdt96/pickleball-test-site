import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RccFormButton } from "../components/common/Buttons";
import HomePageImage from "../components/common/HomePageImage";
import { brand, fontWeights } from "../constants/brand";

const Home = () => {
  const history = useHistory();

  // TODO - fix the header + the placement of the info box.  Link the Contact Us functionality to the contact form

  return (
    <HomePageImage>
      <Box
        mx={{ xs: 1, md: 6 }}
        p={{ xs: 1, md: 9 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgcolor="white"
          width={{ xs: 1, md: 4 / 5 }}
          style={{
            opacity: "0.8"
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={brand.shape.borderRadius}
          p={6}
          mt={2}
        >
          <Box
            style={{ opacity: "1" }}
            justifyItems="center"
            display="center"
            alignContent="center"
          >
            <Typography
              variant="h2"
              style={{ fontWeight: fontWeights.bold, textAlign: "center" }}
            >
              Pickleballers
            </Typography>
            <Box justifyContent="center" display="flex">
              <Typography variant="h5">
                Find a community of pickleball enthusiasts.
              </Typography>
            </Box>
            <Box justifyContent="center" display="flex" mt={6}>
              <Box width={{ xs: 1, md: 1 / 3 }} p={1}>
                <RccFormButton onClick={() => history.push("/shop")}>
                  Rec Centers
                </RccFormButton>
              </Box>
              {/* <Box width={{ xs: 1, md: 1 / 3 }} p={1}>
                <RccFormButton onClick={() => history.push("/contact")}>
                  Contact Us
                </RccFormButton>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ opacity: ".8" }}
        display="flex"
        justifyContent="center"
      >
        <Box
            mt={10} 
            width={{ xs: 1, md: 4 / 5 }}
            borderRadius={brand.shape.borderRadius}
            bgcolor="white" 
            height="20vh" 
            p={6}
            display="flex"
            justifyContent="center">
            <Typography 
              variant="h5"
              style={{ fontWeight: fontWeights.bold, textAlign: "center" }}>
              Home Detail Section
              ----- Categories -----
            </Typography>
        </Box>
      </Box>
    </HomePageImage>
  );
};

export default Home;

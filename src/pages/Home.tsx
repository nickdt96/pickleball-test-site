import { Box, Typography } from "@material-ui/core";
import { RccFormButton } from "../components/common/Buttons";
import HomePageImage from "../components/common/HomePageImage";
import { brand } from "../constants/brand";

const Home = () => {

    // TODO - fix the header + the placement of the info box.  Link the Contact Us functionality to the contact form
    
    return (
      <HomePageImage>
        <Box mx={6}>
          <Box
            bgcolor="white"
            width={1/2}
            style={{
              opacity: "0.8"
            }}
            display="flex"
            justifySelf="center"
            alignItems="center"
            textAlign="left"
            borderRadius={brand.shape.borderRadius}
            p={4}
          >
            <Box style={{ opacity: "1" }} alignItems="center">
              <Typography variant="h4">
                Roberson Cartridge Company
              </Typography>
              <Typography variant="h6">
                We sell quality brass cartridges for any firearm.
              </Typography>
              <Box width={1/2}>
                <RccFormButton>
                  Contact Us
                </RccFormButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </HomePageImage>
    )
}

export default Home;
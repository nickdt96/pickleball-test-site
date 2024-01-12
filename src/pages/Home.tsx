import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RccFormButton } from "../components/common/Buttons";
import HomePageImage from "../components/common/HomePageImage";
import PickleballLogo from "src/assets/images/Pickleballers-logo.png"
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
      </Box>
    </HomePageImage>
  );
};

export default Home;

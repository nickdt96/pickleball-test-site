import { Box, Typography } from "@material-ui/core";

const Footer = () => {

  // TODO - Expand the footer + Make this footer sticky (http://localhost:3000/library looks like crap without the sticky footer)

  return (
    <Box
      bgcolor="primary.main"
      p={4}
    >
      <Typography variant="h6">
        This is a footer
      </Typography>
    </Box>
  )
}

export default Footer;
import { Box, Divider, Typography } from "@material-ui/core";
import { brand, fontWeights } from "../../constants/brand";

const PageContainer = ({ children, title }: { children: any; title?: string; }) => {
  return (
    <Box m={4}>
      <Typography variant="h3" color="primary" style={{ fontWeight: fontWeights.bold }}>
        <Box mb={3}>
          {title}
        </Box>
        <Divider />
      </Typography>
      <Box py={5}>
        {children}
      </Box>
    </Box>
  )
}

export default PageContainer;
import { Box, Typography } from "@material-ui/core";

const PageContainer = ({ children, title }: { children: any; title?: string; }) => {
  return (
    <Box m={4}>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default PageContainer;
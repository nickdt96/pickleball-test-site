import { Box } from "@material-ui/core";

const PageContainer = ({children} : {children: any;}) => {
  return (
    <Box m={4}>
      {children}
    </Box>
  )
}

export default PageContainer;
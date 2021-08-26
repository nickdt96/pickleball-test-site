import { Button, ButtonProps, Typography } from "@material-ui/core"
import { brand } from "../../constants/brand"

export const RccButton = ({children, onClick}: {children: any; onClick: (arg0: React.MouseEvent<HTMLElement>, arg1?: string) => void;}) => {
  return (
    <Button 
      fullWidth
      color="primary"
      style={{
        backgroundColor: brand.palette.secondary.main,
        height: "30px",
        padding: brand.spacing[3],
        marginRight: brand.spacing[1]
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2" style={{ color: "#fff"}}>
        {children}
      </Typography>
    </Button>
  )
}
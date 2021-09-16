import { Button, ButtonProps, Typography } from "@material-ui/core"
import { brand } from "../../constants/brand"

export const RccNavButton = ({ children, onClick }: { children: any; onClick: (arg0: React.MouseEvent<HTMLElement>, arg1?: string) => void }) => {
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
      <Typography variant="subtitle2" style={{ color: "#fff" }}>
        {children}
      </Typography>
    </Button>
  )
}

export const RccCartButton = ({ children, onClick }: { children: any; onClick: (arg0: React.MouseEvent<HTMLElement>, arg1?: string) => void }) => {
  return (
    <Button
      fullWidth
      style={{
        backgroundColor: brand.palette.secondary.main,
        height: "15px",
        padding: brand.spacing[4],
        marginRight: brand.spacing[1]
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2" style={{ color: "#fff" }}>
        {children}
      </Typography>
    </Button>
  )
}

export const RccFormButton = ({ children, onClick }: { children: any; onClick?: (arg0: React.MouseEvent<HTMLElement>, arg1?: string) => void }) => {
  return (
    <Button
      fullWidth
      style={{
        backgroundColor: brand.palette.secondary.main,
        height: "45px",
        padding: brand.spacing[3],
        marginRight: brand.spacing[1]
      }}
      onClick={onClick}
      type="submit"
    >
      <Typography variant="subtitle2" style={{ color: "#fff" }}>
        {children}
      </Typography>
    </Button>
  )
}

export const RccCancelButton = ({ children, onClick }: { children: any; onClick?: (arg0: React.MouseEvent<HTMLElement>, arg1?: string) => void }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      style={{
        height: "45px",
        padding: brand.spacing[3],
        marginRight: brand.spacing[1],
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2">
        {children}
      </Typography>
    </Button>
  )
}

export const RccActionButton = ({ children, onClick }: { children: any; onClick?: (arg0: React.MouseEvent<HTMLElement>, arg1?: string) => void }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      style={{
        height: "30px",
        padding: brand.spacing[3],
        marginRight: brand.spacing[1]
      }}
      color="primary"
      onClick={onClick}
    >
      <Typography variant="subtitle2">
        {children}
      </Typography>
    </Button>
  )
}
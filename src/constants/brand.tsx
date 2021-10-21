
export const fonts = {
  body: '"Lato", sans-serif',
  heading: '"Lato", sans-serif',
};

export const fontSizes = [
  "0.625rem",
  "0.75rem",
  "0.875rem",
  "1rem",
  "1.125rem",
  "1.25rem",
  "1.5rem",
  "1.75rem",
  "2rem",
  "2.5rem",
  "3rem"
];

export const fontWeights = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
};

export const letterSpacings = {
  default: "normal",
  tracked: "0.04em"
};

export const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512
];
export const sizes = [
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  768,
  1024,
  1536
];

export const breakpoints = ["40em", "56em", "64em"];


export const brand: any = {
    palette: {
      type: "light",
      primary: {
        //main: "#EAEAEA",
        main: "#3c3b6e"
      },
      secondary: {
        main: "#b22234",
      },
      common: {
        black: "#fff"
      }
    },
    spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 50, 60, 70, 80, 90, 100],
    overrides: {
      MuiAppBar: { 
        root: { 
          minHeight: "100px"
        },
      },
      MuiTypography: {
        root: {},
        h6: {
            fontSize: fontSizes[3],
            fontFamily: fonts.body,
            fontWeight: fontWeights.semiBold,
            //margin: theme.spacing(1)
        },
        h3: {
            fontSize: fontSizes[6],
            fontFamily: fonts.heading,
            fontWeight: fontWeights.bold,
            //margin: theme.spacing(1)
        },
        h4: {
            fontSize: fontSizes[5],
            fontFamily: fonts.heading,
            fontWeight: fontWeights.bold,
            //margin: theme.spacing(1)
        },
        subtitle1: {
            fontSize: fontSizes[1],
            fontFamily: fonts.body,
            //margin: theme.spacing(1),
            fontWeight: fontWeights.normal
        },
        subtitle2: {
            fontSize: fontSizes[1],
            fontFamily: fonts.body,
            //marginTop: theme.spacing(4),
            fontWeight: fontWeights.bold
        }

      }
    },
    shape: {
      borderRadius: "8px",
    },
    breakpoints: {
      keys: [
          'xs', 'sm', 'md', 'lg', 'xl'
      ],
      values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920
      }
    }
  };
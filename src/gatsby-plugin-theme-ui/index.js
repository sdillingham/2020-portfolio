export default {
  colors: {
    text: "#D8D7E0",
    background: "#161533",
    han: "#3F39C1",
    slates: ["#A7A3FF", "#8A85FF", "#655EFF", "#161533"],
    grays: [
      "#FFFFFF",
      "#F3F2F7",
      "#D8D7E0",
      "#9F9EAE",
      "#6F6E87",
      "#4A495D",
      "#131229",
      "#10101E",
      "#09090C",
    ],
  },
  fonts: {
    mono: "apercu-mono-pro, monospace",
    sans: "apercu-pro, sans-serif",
    serif: "canela, serif",
    serifText: "canela-text, serif",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: [12, 15, 17, 19, 22, 27, 32, 37, 42, 50, 59],
  letterSpacings: {
    compact: "-0.02em",
    standard: "0",
    comfortable: "0.05em",
    wide: "0.10em",
    extrawide: "0.15em",
  },
  lineHeights: {
    tight: 1.2,
    compact: 1.25,
    standard: 1.47,
    comfortable: 1.6,
    generous: 2,
  },
  space: [0, 7, 14, 28, 35, 56, 84, 112, 140, 196],
  breakpoints: ["768px", "1025px", "1356px"],
  headings: {
    workH1: {
      borderBottom: "3px solid",
      borderColor: "grays.4",
      color: "grays.0",
      fontFamily: "serif",
      fontSize: [7, 9, 9],
      fontWeight: "medium",
      lineHeight: "tight",
      paddingBottom: 2,
    },
    workH2: {
      borderBottom: "3px solid",
      borderColor: "grays.3",
      color: "grays.7",
      fontFamily: "serif",
      fontSize: [6, 7, 7],
      fontWeight: "medium",
      lineHeight: "tight",
      paddingBottom: 2,
    },
  },
  texts: {
    cardText: {
      color: "grays.4",
      fontFamily: "sans",
      fontSize: [2, 4, 4],
      fontWeight: "normal",
      lineHeight: "standard",
      textAlign: ["left", "center", "center"],
    },
    workDescription: {
      color: "grays.2",
      fontFamily: "sans",
      fontSize: [2, 3, 3],
      fontWeight: "normal",
      lineHeight: "standard",
      mb: 3,
    },
    workBodyDark: {
      color: "grays.6",
      fontFamily: "sans",
      fontSize: 2,
      fontWeight: "normal",
      lineHeight: "comfortable",
      mb: 3,
    },
    workSubheadDark: {
      color: "grays.4",
      fontFamily: "sans",
      fontSize: [3, 4, 4],
      fontWeight: "light",
      lineHeight: "compact",
    },
    workSubheadLight: {
      color: "grays.2",
      fontFamily: "sans",
      fontSize: [4, 5, 5],
      fontWeight: "light",
      lineHeight: "compact",
    },
    metadata: {
      fontFamily: "mono",
      fontSize: 0,
      fontWeight: "medium",
      letterSpacing: "comfortable",
      lineHeight: "standard",
      textTransform: "uppercase",
    },
  },
  boxes: {
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: ["auto", "100vh", "100vh"],
      overflow: ["visible", "hidden", "hidden"],
      position: ["auto", "sticky", "sticky"],
      px: ["21px", 0, 0],
      py: [5, 0, 0],
      top: ["auto", 0, 0],
      width: "100vw",
    },
    wrapper: {
      position: "sticky",
      top: "-1000%",
    },
    scrollBox: {
      overflowX: ["scroll", "auto", "auto"],
      width: "100%",
    }
  },
  images: {
    desktop: {
      borderStyle: "solid",
      borderWidth: [0, "28px", "28px"],
      borderRadius: [0 , "28px", "28px"],
      display: "block",
      height: ["auto", "75vh", "75vh"],
    },
    desktopInline: {
      borderStyle: "solid",
      borderWidth: [0, "28px", "28px"],
      borderRadius: [0 , "28px", "28px"],
      display: "block",
    },
    mobile: {
      borderStyle: "solid",
      borderWidth: "28px 7px",
      borderRadius: "28px",
      display: "block",
    },
    overflow: {
      height: ["50vh", "auto", "auto"],
      maxWidth: ["inherit", "100%", "100%"], 
      width: "auto",
    },
    full: {
      display: "block",
      width: "100%",
      height: ["auto", "100vh", "100vh"],
      objectFit: "cover",
      objectPosition: "top center",
    }
  }
}

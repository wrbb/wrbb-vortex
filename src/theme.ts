import type { Theme } from "theme-ui";

const red = "#d30f0f";
const black = "#191819";

export const theme: Theme = {
  colors: {
    text: black,
    primary: red,
    secondary: black,
    background: "#F7F5ED",
    accent: "#FCC5C5",
  },
  text: {
    default: {
      color: black,
    },
    body: {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "1.5",
    },
    // Heading styles
    heading1: {
      fontFamily: "serif",
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
    heading2: {
      fontFamily: "serif",
      fontSize: "1.5rem",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
  },
  sizes: {
    container: 960,
  },
};

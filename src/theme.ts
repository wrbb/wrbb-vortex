import type { Theme } from "theme-ui";

export const theme: Theme = {
  colors: {
    text: "#191819",
    primary: "#D30F0F",
    secondary: "#E98787",
    background: "#F7F5ED",
    accent: "#FCC5C5",
    muted: "#AC0C0C",
  },
  text: {
    body: {
      fontFamily: "Gambarino, serif",
      fontSize: "16px",
      lineHeight: "1.5",
    },
    heading1: {
      fontFamily: "Gambarino, serif",
      fontSize: "2rem",
      fontWeight: "800",
      lineHeight: "1.2",
    },
    heading2: {
      fontFamily: "Gambarino, serif",
      fontSize: "1.5rem",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
    heading3: {
      fontFamily: "Gambarino, serif",
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: "1.2",
    },
  },
  sizes: {
    container: 768,
  },
  breakpoints: ["480px", "768px", "1024px", "1440px"],
};

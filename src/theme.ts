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
  buttons: {
    primary: {
      fontFamily: "Gambarino, serif",
      cursor: "pointer",
      backgroundColor: "primary",
      borderRadius: 0,
      color: "background",
      ":hover": {
        opacity: "90%",
      },
      ":active": {
        backgroundColor: "muted",
      },
    },
    secondary: {
      fontFamily: "Gambarino, serif",
      cursor: "pointer",
      backgroundColor: "background",
      color: "primary",
      border: "1px solid #D30F0F",
      borderRadius: 0,
      ":hover": {
        backgroundColor: "rgba(19, 18, 19, 0.05)",
      },
      ":active": {
        backgroundColor: "rgba(19, 18, 19, 0.1)",
      },
    },
  },
  breakpoints: ["480px", "768px", "1024px", "1440px"],
};

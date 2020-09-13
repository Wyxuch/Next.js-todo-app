export default {
  colors: {
    dark: "#444444",
    light: "#777777",
    lighter: "#bdbdbd",
    white: "#ffffff",
    success: "#28a745",
    danger: "#dc3545",
  },
  shadows: {
    vertical: "0px 1px 5px -1px rgba(0, 0, 0, 0.75)",
    small: "2px 2px 2px 0px rgba(0,0,0,0.15)",
  },
  default: {
    p: 0,
    m: 0,
    font: "sans-serif",
  },
  variants: {
    navbar: {
      bg: "dark",
      boxShadow: "vertical",
      p: 2,
      mt: 0,
      mb: 1,
      px: 2,
      alignItems: "center",
      color: "white",
    },
    main: {
      flexWrap: "wrap",
      alignItems: "center",
      margin: "0 auto",
      justifyContent: "left",
    },
    note: {
      p: 3,
      m: 1,
      bg: "dark",

      color: "lighter",
      boxShadow: "small",
      borderRadius: 12,
      overflow: "hidden",
      width: "calc((100vw/5) - 12px)",
      height: "calc((100vw/5) - 12px)",
      "@media (orientation: portrait)": {
        width: "calc((100vw/2) - 8px)",
        height: "calc((100vw/2) - 8px)",
      },
    },
    edit: {
      position: "fixed",
      top: 0,
      zIndex: "1",
      width: "100vw",
      height: "100vh",
      overflow: "auto",
      bg: "dark",
      "@media (orientation: landscape)": {
        borderRadius: 20,
        position: "static",
        width: "70vw",
        height: "90vh",
      },
    },
    editbg: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      zIndex: "1",
      width: "100vw",
      height: "100vh",
      overflow: "auto",
      bg: "rgba(0,0,0,0.7)",
      "@media (orientation: portrait)": {
        display: "none",
      },
    },
  },
  buttons: {
    addButton: {
      bg: "success",
      borderRadius: "50%",
      fontWeight: 900,
      display: "block",
      size: "3em",
      lineHeight: "1",
      textAlign: "center",
      color: "white",
      outline: 0,
      boxShadow: "small",
      cursor: "pointer",
      position: "fixed",
      bottom: 25,
      left: 25,
      "@media (orientation: landscape)": {
        display: "none",
      },
    },
    addNoteTile: {
      p: 3,
      m: 1,
      bg: "dark",
      color: "lighter",
      boxShadow: "small",
      borderRadius: 12,
      overflow: "hidden",
      width: "calc((100vw/5) - 12px)",
      height: "calc((100vw/5) - 12px)",
      fontWeight: 500,
      color: "lighter",
      fontSize: "calc((70vw/5) - 8px)",
      "@media (orientation: portrait)": {
        display: "none",
      },
    },
    success: {
      bg: "success",
      flex: 1,
      fontWeight: 900,
      display: "inline-block",
      size: "3em",
      lineHeight: "1",
      textAlign: "center",
      color: "white",
      outline: 0,
      cursor: "pointer",
      borderRadius: 0,
    },
    danger: {
      bg: "danger",
      flex: 1,
      fontWeight: 900,
      display: "inline-block",
      size: "3em",
      lineHeight: "1",
      textAlign: "center",
      color: "white",
      outline: 0,
      cursor: "pointer",
      borderRadius: 0,
    },
  },
  text: {
    note: {
      overflow: "hidden",
      width: "100%",
      height: "100%",
      pb: 2,
    },
    time: {
      fontSize: "small",
      fontWeight: 600,
      color: "white",
      borderBottom: "1px solid #777777",
      pb: 1,
      mb: 1,
    },
  },
  forms: {
    search: {
      borderRadius: "20px",
      border: 0,
      bg: "light",
      outline: 0,
      "&::placeholder": {
        color: "lighter",
      },
    },
    fillTextarea: {
      flex: 1,
      outline: 0,
      border: 0,
      borderRadius: 0,
      resize: "none",
      fontSize: 2,
      color: "white",
      caretColor: "#28a745",
      px: 4,
      py: 3,
    },
  },
};
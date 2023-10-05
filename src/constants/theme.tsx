const Theme = {
  border: {
    radius: {
      default: "2px",
      semicircle: "18px",
      circle: "50px",
    },
  },

  breakpoints: {
    xm: {
      small: "320px",
      large: "480px",
    },
    sm: {
      small: "481px",
      large: "768px",
    },
    md: {
      small: "769px",
      large: "1024px",
    },
  },

  color: {
    background: {
      ultralight: "#FFFFFF",
      light: "#F1F1F1",
      default: "#FFD836",
      inverted: "#FAFAFA",
    },

    font: {
      lightblack: "#000000cc",
      black: "#000",
    },
  },

  font: {
    size: {
      normal: "1.1250em",
      description: "1.3125em",
      subtitle: "1.75em",
      title: "2em",
      supertitle: "2.25em",
    },
    weight: {
      light: "400",
      semilight: "500",
      regular: "700",
      bold: "800",
    },
  },

  spacing: {
    alface: "8px",
    abacaxi: "20px",
    linguica: "24px",
    frango: "28px",
    picanha: "42px",
  },

  shadow: {
    default: "0px 0px 16px 0px rgba(0, 0, 0, 0.06)",
  },

  zIndex: {
    overlay: 1,
    content: 10,
    modal: 100,
    logo: 1000,
  },
};

export default Theme;

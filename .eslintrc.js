module.exports = {
    extends: "next",
    rules: {
      "react/no-unescaped-entities": "off", // Fix quotes issue
      "@next/next/no-img-element": "off" // Allow <img> tags
    }
  };
  
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    fontFamily: {
      primary: '"Space Grotesk", sans-serif',
      secondary: '"Instrument Sans", sans-serif',
      tertiary: '"Space Grotesk", sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      
      colors: {
        primary: '#0f172a',
        accent: '#0ea5e9',
      },
      
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/avatar.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark Navy Blue
        secondary: '#3B82F6', // Soft Blue
        accent: '#FACC15', // Warm Yellow
        neutral: '#F8FAFC', // Off-white
        text: '#E2E8F0', // Light Gray
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

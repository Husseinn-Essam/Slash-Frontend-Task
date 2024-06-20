import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       
        'light': {
          'background': '#ffffff',
          'text': '#333333',
        },
        'dark': {
          'bg': '#141624',
          'txt': '#ffffff',
          'primary': '#4B6BFB',
        },
      },
      fontFamily: {
      
        'theme-sans': ['Open Sans', 'sans-serif'],
      },
   
    
    },
  },
  plugins: [],
};

export default config;
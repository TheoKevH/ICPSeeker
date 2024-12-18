/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"'], 
        body: ['Syne'], 
      },
      fontSize: {
        // Headings (Plus Jakarta Sans)
        h1: ['4rem', { lineHeight: '120%', fontWeight: '700' }], // 64px, 76.8px line-height
        h2: ['3rem', { lineHeight: '120%', fontWeight: '700' }], // 48px, 57.6px line-height
        h3: ['2rem', { lineHeight: '120%', fontWeight: '700' }], // 32px, 38.4px line-height
        h4: ['1.5rem', { lineHeight: '120%', fontWeight: '700' }], // 24px, 28.8px line-height
        h5: ['1.25rem', { lineHeight: '120%', fontWeight: '700' }], // 20px, 24px line-height
        h6: ['1rem', { lineHeight: '120%', fontWeight: '700' }], // 16px, 19.2px line-height

        // Body (Syne)
        p1: ['1.5rem', { lineHeight: '150%', fontWeight: '400' }], // 24px, 36px line-height
        p2: ['1.25rem', { lineHeight: '150%', fontWeight: '400' }], // 20px, 30px line-height
        p3: ['1rem', { lineHeight: '150%', fontWeight: '400' }], // 16px, 24px line-height
        p4: ['0.875rem', { lineHeight: '150%', fontWeight: '400' }], // 14px, 21px line-height
        p5: ['0.75rem', { lineHeight: '150%', fontWeight: '400' }], // 12px, 18px line-height
        p6: ['0.625rem', { lineHeight: '150%', fontWeight: '400' }], // 10px, 15px line-height
      },
      colors: {
        purple: {
          light: "#efe7fd", 
          "light-hover": "#e7dbfb", 
          "light-active": "#cdb4f8", 
          normal: "#5f0ee7",
          "normal-hover": "#560dd0", 
          "normal-active": "#4c0bb9", 
          dark: "#470bad", 
          "dark-hover": "#39088b", 
          "dark-active": "#2b0668", 
          darker: "#210551", 
        },
        orange: {
          light: "#fff0e7", 
          "light-hover": "#ffe8db", 
          "light-active": "#ffd0b4", 
          normal: "#ff660e", 
          "normal-hover": "#e65c0d", 
          "normal-active": "#cc520b", 
          dark: "#bf4d0b", 
          "dark-hover": "#993d08", 
          "dark-active": "#732e06", 
          darker: "#592405",
        },
        blue: {
          light: "#f7f2ff", 
          "light-hover": "#f3ecff", 
          "light-active": "#e7d7fe",
          normal: "#b07ffc", 
          "normal-hover": "#9e72e3", 
          "normal-active": "#8d66ca",
          dark: "#845fbd",
          "dark-hover": "#6a4c97", 
          "dark-active": "#4f3971", 
          darker: "#3e2c58", 
        },
        gradient: {
          "start": "#5f0ee7", // Gradient start (Purple)
          "end": "#ff660e", // Gradient end (Orange)
        },
        state: {
          success: "#28a745", // State Success (Green)
          danger: "#dc3545", // State Danger (Red)
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },      
    },
  },
  plugins: [],
};

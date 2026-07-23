/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./source/ts/**/*.ts",
    "./source/ts/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        golden: {
          50: "#fef8f0",
          100: "#fdf0e1",
          300: "#f9d88a",
          500: "#dba507",
          700: "#b88a04",
          900: "#7a5802",
        },
        // Neutral/Dark Colors
        dark: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#545b62",
          700: "#101a2b",
          800: "#0f161f",
          900: "#050607",
        },
        // Card Colors
        card: {
          bg: "#212128",
          border: "#2a2a32",
        },
        // Text Colors
        text: {
          primary: "#e9ecef",
          secondary: "#cacaca",
          muted: "rgba(202, 202, 202, 0.8)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text.secondary"),
            a: {
              color: theme("colors.golden.500"),
              "&:hover": {
                color: theme("colors.golden.300"),
              },
            },
            strong: {
              color: theme("colors.text.primary"),
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      }),
      fontFamily: {
        strong: ["font-strong", "system-ui"],
        regular: ["font-md", "system-ui"],
        display: ["PlayfairDisplay-Bold", "system-ui"],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "14px",
        lg: "16px",
        xl: "17px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "50px",
      },
      spacing: {
        xs: "3px",
        sm: "5px",
        md: "10px",
        lg: "1rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "10px",
        lg: "1rem",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        slideUp: "slideUp 1.25s ease-out",
        slideDown: "slideDown 1s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      screens: {
        xs: "300px",
        sm: "420px",
        md: "576px",
        lg: "760px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1550px",
      },
    },
  },
  plugins: [],
};

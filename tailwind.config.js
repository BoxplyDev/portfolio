/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(15px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(150, 100, 255, 0.3)',
          },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        float2: 'float2 10s ease-in-out infinite',
        float3: 'float3 7s ease-in-out infinite',
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

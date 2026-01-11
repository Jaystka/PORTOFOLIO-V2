/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Perhatikan ini beda dengan v3
    autoprefixer: {},
  },
};

export default config;

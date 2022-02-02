module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@themesberg/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      zIndex: {
        1000: '1000'
      }
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
};

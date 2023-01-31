module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        stars: "url('images/bg.jpeg')"
      }),
    },
  },
  plugins: [],
}

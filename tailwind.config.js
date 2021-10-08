module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#fca311',
          darkgray: '#3d405b',
          lightyellow: '#fca21146',
          blue: {
            100: '#002333a1',
            200: '#002333',
            300: '#0077b6',
            400: '#4361ee',
          },
          red: {
            100: '#e6394736',
          },
          purple: {
            100: '#f77f00',
          },
        },
      },
      height: {
        card: '260px',
        106: '280px',
        325: '325px',
        500: '500px',
        88: '22rem',
      },
      backgroundImage: {
        'header-image': 'url(~assets/images/home-bg-image-small.jpg)',
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        spectral: ['Spectral', 'sans-serif'],
        'standard-tt': ['Old Standard TT', 'sans-serif'],
        muli: ['Mulish', 'sans-serif'],
      },
      minHeight: {
        106: '280px',
      },
      width: {
        '7/7': '90%',
        '2/8': '80%',
        '9/2': '45%',
        '48p': '48%',
        106: '280px',
      },
      transitionProperty: {
        'z-index': 'z-index',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}

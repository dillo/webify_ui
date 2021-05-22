module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile-280': '280px',
      // => @media (min-width: 280px) { ... }

      'mobile-320': '320px',
      // => @media (min-width: 320px) { ... }

      'mobile-360': '360px',
      // => @media (min-width: 360px) { ... }

      'mobile-375': '375px',
      // => @media (min-width: 375px) { ... }

      'mobile-411': '411px',
      // => @media (min-width: 411px) { ... }

      'sm-tablet': '540px',
      // => @media (min-width: 540px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'mobile-717': '717px',
      // => @media (min-width: 717px) { ... }

      'mobile-768': '768px',
      // => @media (min-width: 768px) { ... }

      'mobile-1114': '1114px',
      // => @media (min-width: 1114px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px'
    },
    extend: {
      spacing: {
        '33': '8.5rem',
        '46': '11.5rem',
        '82': '22rem',
        '98': '28rem',
        '99': '30rem',
        '100': '32rem',
        '102': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

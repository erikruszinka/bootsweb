const _ = require('lodash')

module.exports = {
  theme: {
    margin: {
        '-48px': '-79px',
        '-84px': '-91px'
      },
    rotate: {
      '1/4': '35deg',
      '1/2': '-35deg',
      '3/4': '270deg',
    },
    extend: {

      width: {
        '24rem': '24rem',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '450px': '450px',
        '400px': '400px',
        '94%': '94%'

      },
      height:{
        '500px': '600px',
        '80%':'80%',
        '94%':'94%'
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities, config, e }) {
      const rotateUtilities = _.map(config('theme.rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities)
    }
  ]
}

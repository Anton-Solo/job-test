/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xlg': '1440px',
        'xsm': '320px'
      },
      boxShadow: {
        'custom': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        'blue-dark': '#3A4562',
        'gray-light': '#878D9D',
        'blue-light': '#5876C5',
        'gray-super-light': '#DEE3EF',
        'gray-medium': '#70778B',
        'mobile-item': '#EFF0F5',
        'gray-opacity': 'rgba(56, 65, 93, 0.355988)',
        'blue-opacity': 'rgba(161, 177, 219, 0.317343)',
        'blue-border': 'rgba(85, 105, 158, 0.3)',
        'yellow-opacity': 'rgba(255, 207, 0, 0.15)',
        'yellow-border': '#FFCF00',
        'blue-bg': '#2A3047',
        'contact-color': '#E7EAF0',
        'main-bg': '#E6E9F2'
      },
      spacing: {
        '26px': '26px',
        '49px': '49px',
        '85': '85px',
        '10.4px': '10.4px',
        '30px': '30px',
        '29px': '29px',
        '18px': '18px',
        '19px': '19px',
        '111px': '111px',
        '13px': '13px',
        '31px': '31px',
        '39px': '39px',
        '7px': '7px',
        '1px': '1px',
        '44px': '44px',
        '15px': '15px',
        '23px': '23px',
        '62px': '62px',
        '56px': '56px',
        '162px': '162px',
        '273px': '273px',
        '89px': '89px',
        '66px': '66px',
        '85px': '85px'
      },
      lineHeight: {
        '25px': '25px'
      },
      borderRadius: {
        '10.4px': '10.4px'
      },
      maxWidth: {
        '515px': '515px',
        '890px': '890px',
        '96px': '96px',
        '138px': '138px',
        '690px': '690px',
        '540px': '540px',
        '721px': '721px',
        '222px': '222px',
        '402px': '402px',
        '501px': '501px'
      },
      fontSize: {
        '20.8px': '20.8px',
        '28px': '28px'
      },
      backgroundImage: {
        'arrow': "url(img/Arrow.svg)"      
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container:{
      center:true
    },
    fontFamily:{
      'body':["'Manrope', sans-serif"]
    },
    extend: {
      boxShadow:{
        'hexagon':'0 3px 8px 12px rgba(30, 42, 57, 0.08)',
      },
      margin:{
        '53':'53px',
        '83':'83px',
      },
      height:{
        '72':'72px'
      },
      fontSize:{
        "discount":["11px",{lineHeight:"16px"}],
        "ft":["12px",{lineHeight:"16px"}],
        "mn":["14px",{lineHeight:"16px"}],
        "d-m":["16px",{lineHeight:"22px"}],
        "ct0":["14px",{lineHeight:"24px"}],
        "pv":["16px",{lineHeight:"24px"}],
        'money':["16px",{lineHeight:"26px"}],
        "or":["18px",{lineHeight:"26px"}],
        "p-l":["18px",{lineHeight:"28px"}],
        "ct":["14px",{lineHeight:"28px"}],
        "soci":["20px",{lineHeight:"32px"}],
        "stt":["18px",{lineHeight:"32px"}],
        "tt":["32px",{lineHeight:"40px"}],
        "h2":["48px",{lineHeight:"70px"}],
        "ordct":["14px",{lineHeight:"20px"}],
        'icon':["64px",{lineHeight:"32px"}],
        'fter':["14px",{lineHeight:"18px"}],
      },
      colors:{
        'primary':{
          100:'#777E90',
          200:'#1E2A39',
          300:'rgba(30, 42, 57, 0.5)',
        },
        'espec':'linear-gradient(93.26deg, #F078AB 2.7%, #A478C8 37.67%, #FFAC61 100%)',
        'secondry': '#FFA654',
        'frame':'DBDFE4',
        'blue':{
          '1':'#5DBCF1',
          '2':'#3772FF',
        },
        'white':{
          '1':'#FFFFFF',
          '2':'#E0E0E0',
          '3':'#CCCCCC'
        },
        'black':{
          '0':'#161616',
          '1':'#000000',
          '2':'#3E3E3E',
          '3':'#393939',
          '4':'#6B6B6B',
        },
        'provide':'#6F6F6F',
        'background': '#E5E5E5',
        "radio":'rgba(30, 42, 57, 0.5)',
        "red":'#D00000',
        "red05":'rgba(208, 0, 0, 0.5)',
        "vnd":'#828282',
        "vnd05":'rgba(130, 130, 130, 0.5)', 
      }
    },
    
  },
  plugins: [],
}

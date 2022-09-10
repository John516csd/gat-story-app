type ColorType = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  export type PaletteType = {
    mask: string;
    blue: ColorType;
    gray: ColorType;
    pink: ColorType;
    purple: ColorType;
    green: ColorType;
    orange: ColorType;
    red: ColorType;
    yellow: ColorType;
    brand: ColorType;
  };
  
  const palette: PaletteType = {
    mask: 'rgba(0, 0, 0, 0.6)',
    brand: {
      50: '#FBF0FF',
      100: '#F3D1FF',
      200: '#E5A8FF',
      300: '#D580FF',
      400: '#BD55FA',
      500: '#9F2AEC',
      600: '#7C1AC7',
      700: '#5C0DA1',
      800: '#3F047A',
      900: '#280254',
    },
    blue: {
      50: '#f0f8ff',
      100: '#d4eaff',
      200: '#abd4ff',
      300: '#82baff',
      400: '#599eff',
      500: '#307dfb',
      600: '#1e5dd4',
      700: '#1042ad',
      800: '#052a87',
      900: '#031a61',
    },
    gray: {
      50: '#F6F7F9',
      100: '#EAEDF0',
      200: '#DADEE3',
      300: '#C0C6CB',
      400: '#9DA3AB',
      500: '#7D848E',
      600: '#575D64',
      700: '#41454B',
      800: '#282B32',
      900: '#1B1E28',
    },
    pink: {
      50: '#FFF0F5',
      100: '#FFD6E6',
      200: '#FFADCF',
      300: '#FF85BC',
      400: '#FF5DAA',
      500: '#D94390',
      600: '#D94390',
      700: '#B32E77',
      800: '#8C1D5E',
      900: '#661447',
    },
    purple: {
      50: '#F9F0FF',
      100: '#F8F0FF',
      200: '#E8CFFF',
      300: '#D2A6FF',
      400: '#BA7DFF',
      500: '#9F54FF',
      600: '#7B3DD9',
      700: '#5B29B3',
      800: '#40198C',
      900: '#2B1166',
    },
    green: {
      50: '#F0FFF4',
      100: '#CFFFDD',
      200: '#9DF2BA',
      300: '#70E69B',
      400: '#48D982',
      500: '#22CC6D',
      600: '#14A658',
      700: '#098044',
      800: '#025930',
      900: '#01331D',
    },
    orange: {
      50: '#FFF8F0',
      100: '#FFF6ED',
      200: '#FFE0C4',
      300: '#FFC79C',
      400: '#FFAB73',
      500: '#FF8C4B',
      600: '#D96B34',
      700: '#B34D22',
      800: '#8C3414',
      900: '#66220D',
    },
    red: {
      50: '#FFF2F0',
      100: '#FFE9E6',
      200: '#FFC3BD',
      300: '#FF9B94',
      400: '#FF706B',
      500: '#FF4242',
      600: '#D92E33',
      700: '#B31D27',
      800: '#8C0F1C',
      900: '#660A16',
    },
    yellow: {
      50: '#FFFEF0',
      100: '#FFFAC7',
      200: '#FFF49E',
      300: '#FFEA75',
      400: '#FFDE4D',
      500: '#FECE24',
      600: '#D9A714',
      700: '#B38207',
      800: '#8C6000',
      900: '#664200',
    },
  };
  
  export default palette;
  
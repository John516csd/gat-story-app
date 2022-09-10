export type ShadowColor = {
    300?: string;
    200: string;
    100: string;
  };
  
  export type ShadowsType = {
    brand: ShadowColor;
    gray: ShadowColor;
    blue: ShadowColor;
    red: ShadowColor;
  };
  
  const shadows: ShadowsType = {
    brand: {
      200: '0px 2px 4px rgba(159, 42, 236, 0.32), 0px 4px 8px rgba(159, 42, 236, 0.38)',
      100: '0px 1px 2px rgba(159, 42, 236, 0.38), 0px 2px 4px rgba(159, 42, 236, 0.48)',
    },
    gray: {
      300: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 8px 20px rgba(0, 0, 0, 0.04)',
      200: '0px 1px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)',
      100: '0px 1px 4px rgba(0, 0, 0, 0.16), 0px 2px 6px rgba(0, 0, 0, 0.12)',
    },
    blue: {
      200: '0px 2px 4px rgba(48, 125, 251, 0.32), 0px 4px 8px rgba(48, 125, 251, 0.38)',
      100: '0px 1px 2px rgba(48, 125, 251, 0.38), 0px 2px 4px rgba(48, 125, 251, 0.48)',
    },
    red: {
      200: '0px 4px 8px rgba(255, 66, 66, 0.38), 0px 2px 4px rgba(255, 66, 66, 0.32)',
      100: '0px 2px 4px rgba(255, 66, 66, 0.48), 0px 1px 2px rgba(255, 66, 66, 0.38)',
    },
  };
  export default shadows;
  
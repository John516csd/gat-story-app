type TFontParams = {
    fontSize: string;
    fontWeight: number | string;
    lineHeight: string;
};

export type YBlogFontType = {
    fontFamily: string;
    max: TFontParams;
    bh: TFontParams;
    lh: TFontParams;
    h1: TFontParams;
    h2: TFontParams;
    h3: TFontParams;
    body: TFontParams;
    caption: TFontParams;
};

const yblogFont: YBlogFontType = {
    fontFamily: `'Montserrat', sans-serif`,
    max: {
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: "48px",
    },
    bh: {
        fontSize: "32px",
        fontWeight: 500,
        lineHeight: "32px",
    },
    lh: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "36px",
    },
    h1: {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "30px",
    },
    h2: {
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "28px",
    },
    h3: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
    },
    body: {
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "22px",
    },
    caption: {
        fontSize: "12px",
        fontWeight: "normal",
        lineHeight: "18px",
    },
};

export default yblogFont;

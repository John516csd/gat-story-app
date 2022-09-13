import { background, extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors, { PaletteType } from "./palette";
import shadows, { ShadowsType } from "./shadows";
import yBlogFont, { YBlogFontType } from "./yblogFont";

type YBlogTheme = {
    colors: PaletteType;
    shadows: ShadowsType;
    airgramFont: YBlogFontType;
};

const breakpoints = {
    sm: "575px",
    md: "767px",
    lg: "991px",
    xl: "1200px",
    "2xl": "1600px",
};

const customTheme = extendTheme(
    {
        initialColorMode: 'light',
        useSystemColorMode: false,
        breakpoints,
        fonts: {
            heading: `Montserrat, sans-serif`,
            body: `'Montserrat', sans-serif`,
        },
        styles: {
            global: (props: Record<string, any>) => {
                return ({
                    // 保留原有属性
                    // fontFamily: "body",
                    color: mode("gray.900", "whiteAlpha.900")(props),
                    bg: mode("white", "gray.900")(props),
                    lineHeight: "base",
                    html: {
                        scrollBehavior: "smooth",
                    },
                    "*::placeholder": {
                        color: mode("gray.400", "whiteAlpha.400")(props),
                    },
                    "*, *::before, &::after": {
                        borderColor: mode("gray.200", "whiteAlpha.300")(props),
                        wordWrap: "break-word",
                    },
                    fontFeatureSettings: `"pnum"`,
                    fontVariantNumeric: "proportional-nums",
                    fontSize: "15px",
                    a: {
                        outline: "none !important",
                        // boxShadow: '0 0 0 3px rgba(66,153,225,0.16)',
                    },
                    // 按下 tab 键时按钮和链接的 focus 效果
                    button: {
                        outline: "none !important",
                    },
                    "span[data-focus]": {
                        boxShadow: "none !important",
                    },
                    b: {
                        color: "gray.900",
                    },
                })
            }
        },
        components: {
            // 重设按钮样式
            Button: {
                baseStyle: {
                    borderRadius: "lg",
                    _disabled: {
                        bg: `${colors.gray["100"]} !important`,
                        borderColor: "gray.200",
                        color: "gray.400",
                        opacity: 1,
                    },
                },
                sizes: {
                    md: {
                        height: "38px",
                        ...yBlogFont.body,
                    },
                    xs: {
                        height: "24px",
                        ...yBlogFont.caption,
                    },
                },
            },
            Heading: {
                sizes: {
                    h1: {
                        fontSize: "32px",
                        fontWeight: "normal",
                    },
                    h2: {
                        fontSize: "24px",
                        fontWeight: "normal",
                    },
                    h3: {
                        fontSize: "22px",
                        fontWeight: "normal",
                    },
                    h4: {
                        fontSize: "16px",
                        fontWeight: "normal",
                    },
                },
            },
            Input: {
                defaultProps: {
                    focusBorderColor: "brand.500",
                    borderRadius: "8px",
                },
            },
            Textarea: {
                defaultProps: {
                    focusBorderColor: "brand.500",
                },
            },
            // Tooltip: {
            //   baseStyle: ({ colorScheme }) => ({
            //     bg: isEqual(colorScheme, 'white') ? 'white' : 'gray.900',
            //     color: isEqual(colorScheme, 'white') ? 'gray.900' : 'white',
            //     padding: '4px 8px',
            //     borderRadius: '4px',
            //     ...airgramFont.caption,
            //   }),
            // },
        },
        colors,
        shadows,
        yBlogFont,
    },
    withDefaultColorScheme({
        colorScheme: "brand",
        components: ["Checkbox", "Switch", "Radio"],
    })
);

export default customTheme as YBlogTheme & Theme;

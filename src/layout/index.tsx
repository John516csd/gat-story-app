import * as React from "react";
import {
    ChakraProvider,
    Box, ColorModeScript,
    theme, ColorModeProvider, useColorMode,
    useColorModeValue, Button,
    IconButton,
} from "@chakra-ui/react";
import { GatsbyLink } from "@/components/common/index";
import { SunIcon, MoonIcon, AtSignIcon } from '@chakra-ui/icons'
import Header from './Header'
const { useState, useEffect } = React;
import Nav from './Header/nav'

import yBlogTheme from "../assets/theme"
import Footer from "./Footer";

interface IProps {
    children: React.ReactNode;
    topLayout?: React.ReactNode;
    bottomLayout?: React.ReactNode;
    showFooter?: boolean;
    footerPaddingTop?: string | number;
    minW?: string;
    maxW?: string;
    minH?: string;
    px?: string;
    margin?: string;
    isNewStyle?: boolean;
}

const getPaddingTop = (isNewStyle: boolean) =>
    isNewStyle
        ? {
            base: "62px",
            sm: "70px",
            md: "70px",
            lg: "70px",
            xl: "74px",
            "2xl": "74px",
        }
        : {
            base: "102px",
            sm: "134px",
            md: "150px",
            lg: "190px",
            xl: "194px",
            "2xl": "194px",
        };

const Layout: React.FC<IProps> = ({
    children,
    topLayout,
    bottomLayout,
    showFooter = true,
    isNewStyle = false,
    footerPaddingTop = 0,
    maxW = {
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "1120px",
        xl: "1440px",
        "2xl": "1600px",
    },
    minW = {
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "912px",
        xl: "1040px",
        "2xl": "1280px",
    },
    px = {
        base: "24px",
        sm: "40px",
        md: "40px",
        lg: "40px",
        xl: "80px",
        "2xl": "160px",
    },
    margin = "auto",
    minH = "100vh"
}) => {

    const pt = getPaddingTop(isNewStyle);
    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue('#000', 'white');
    const bg = useColorModeValue('rgba(255, 255, 255, 0.75)', 'gray.800');
    const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);
    const hoverBG = useColorModeValue('rgba(0, 0, 0, 0.08)', 'rgba(255, 255, 255, 0.08)');
    let googleLoginRes;
    if(typeof window !== 'undefined') {
        googleLoginRes = window.localStorage.getItem('google-login') || undefined;
    }
    const [isLogin, setIsLogin] = useState(typeof googleLoginRes !== 'undefined');

    return (
        <ChakraProvider resetCSS theme={yBlogTheme}>
            <Box>
                {topLayout}
                <Box
                    top="0"
                    left="0"
                    position="fixed"
                    width="100%"
                    zIndex="100"
                    px={{
                        base: "24px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                        xl: "80px",
                        "2xl": "160px",
                    }}
                    py="12px"
                    color={color}
                    boxShadow="0 4px 8px 0 rgb(0 0 0 / 10%)"
                    background={bg}
                    backdropFilter="blur(5px)"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Nav />
                    <IconButton
                        icon={<ToggleIcon />}
                        aria-label={"toggle"}
                        onClick={toggleColorMode}
                        _hover={{ bg: hoverBG }}
                        bg={hoverBG}
                    />
                </Box>
                <Box px={px}>
                    <Box pt={pt} minW={minW} maxW={maxW} minH={minH} margin={margin}>
                        {children}
                    </Box>
                    {bottomLayout}
                </Box>
                {showFooter && <Footer paddingTop={footerPaddingTop} />}
            </Box>
        </ChakraProvider>
    );
};

export default Layout;

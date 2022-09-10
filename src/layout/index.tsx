import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
const { useState, useEffect } = React;

import yBlogTheme from "./index"

interface IProps {
  children: React.ReactNode;
  topLayout?: React.ReactNode;
  bottomLayout?: React.ReactNode;
  showFooter?: boolean;
  footerPaddingTop?: string | number;
  minW?: string;
  maxW?: string;
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
  margin = "auto"
}) => {

  const pt = getPaddingTop(isNewStyle);

  return (
    <ChakraProvider resetCSS theme={yBlogTheme}>
      {topLayout}
      {/* <Header /> */}
      <Box px={px}>
        <Box pt={pt} minW={minW} maxW={maxW} margin={margin}>
          {children}
        </Box>
        {bottomLayout}
      </Box>
      {/* {showFooter && <Footer paddingTop={footerPaddingTop} />} */}
    </ChakraProvider>
  );
};

export default Layout;

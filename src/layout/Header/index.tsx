import { Box, Button, Center, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react"

interface IProp {

}

const Header: React.FC<IProp> = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('#000', 'white');
    const bg = useColorModeValue('rgba(255, 255, 255, 0.75)', 'gray.800');

    return (
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
            backdropFilter="blur(64px)"
        >
            Header
            <Button onClick={toggleColorMode}>Change Theme</Button>
        </Box>
    )
}

export default Header;
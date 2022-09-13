import { useColorMode } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react"

const useModeChange = (lightMode: string, darkMode: string) => {
    const { colorMode } = useColorMode();
    return colorMode === 'light' ? lightMode : darkMode;
}

export default useModeChange;
import * as React from "react";
import { Box, Button, Center, Flex, Image, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import IndexPageHero from "@/assets/images/IndexPageHero.jpeg";
import IndexPageGif from "@/assets/images/IndexPageGif.gif";

interface IProp {
    content?: React.ReactNode
}

const Example: React.FC<IProp> = ({ content }) => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, [
        "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
        "linear-gradient(180deg, rgba(34,141,195,1) 0%, rgba(83,72,219,1) 100%)",
        "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    ]);

    return (
        <motion.div className="colorful-container" style={{ background }}>
            {/* {content} */}
            <Flex
                w="full"
                h="full"
                flexDir={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                    '2xl': "row"
                }}
                gap={{
                    base: "32px",
                    sm: "32px",
                    md: "64px",
                    lg: "64px",
                    xl: "64px",
                    '2xl': "64px"
                }}
            >

                <Center
                    flex="1"
                    flexDir="column"
                    borderRadius="12px"
                    boxShadow="0 30px 60px -10px rgb(0 0 0 / 22%), 0 18px 36px -18px rgb(0 0 0 / 25%)"
                    className="home-cover"
                >
                    <Image h="full" w="full" objectFit="cover" src={IndexPageGif} borderRadius="12px" />
                </Center>
                <motion.div
                    className="move-handler"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                >
                    👈 👉
                </motion.div>
                <Center
                    flex="1"
                    flexDir="column"
                    justifyContent="flex-start"
                >
                    <Center
                        w="full"
                        h="full"
                        p="12px"
                        flexDir="column"
                        borderRadius="12px"
                        gap="12px"
                        boxShadow="0 30px 60px -10px rgb(0 0 0 / 22%), 0 18px 36px -18px rgb(0 0 0 / 25%)"
                    >
                        <Text as="h2" textAlign="center">About me</Text>
                        <Text as="h3">💼 Mind Cruiser / Front End</Text>
                        <Text as="h3">📧 chenhao.yan@airgram.io</Text>
                        <Flex w="full" flexDir="column">
                            <Text as="h3">🪧 Skills</Text>
                            <Box px="40px">
                                <Text as="li">HTML JS CSS</Text>
                                <Text as="li">React Umi</Text>
                                <Text as="li">Vue</Text>
                                <Text as="li">Node.js</Text>
                                <Text as="li">Gatsby</Text>
                            </Box>
                        </Flex>
                        <Text as="h3">❤️ Hobbies: 💻 🏀 🎧 🎬 🎮</Text>
                    </Center>
                </Center>
            </Flex>

        </motion.div>
    );
};


export default Example;
import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from '@components/head'
import { useStoryblokState, StoryblokComponent, SbBlokData, storyblokEditable } from 'gatsby-source-storyblok'
import { graphql } from 'gatsby'
import Layout from "@layout/index"
import IndexPageHero from "@/assets/images/IndexPageHero.jpeg"
import { Box, Button, Center, Flex, Image, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
interface IProp {
  data: any
}

const IndexPage = ({ data }: IProp) => {
  const color = useColorModeValue('gray.900', 'white');

  return (
    <Layout isNewStyle>
      <Text as="h1" my="40px">🎯 Documenting Life & Technology</Text>
      <Flex
        h="full"
        flexDir={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          '2xl': "row"
        }}
        gap="24px"
      >
        <Center
          flex="1"
          flexDir="column"
        >
          <Image h="full" src={IndexPageHero} borderRadius="12px" />
        </Center>
        <Center
          flex="1"
          textAlign={{
            base: "center",
            sm: "center",
            md: "start",
            lg: "start",
            xl: "start",
            "2xl": "start"
          }}
          px="24px"
          flexDir="column"
          justifyContent="flex-start"
        >
          <Center w="full" border="1px solid #f2f2f2" p="12px" flexDir="column" borderRadius="12px">
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

    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <Header title="Home" />
}

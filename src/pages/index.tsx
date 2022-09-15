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
          border="1px solid #f2f2f2"
          flexDir="column"
          borderRadius="12px"
          p="12px"
          boxShadow="0 30px 60px -10px rgb(0 0 0 / 22%), 0 18px 36px -18px rgb(0 0 0 / 25%)"
        >
          <Image h="full" w="full" objectFit="fill" src={IndexPageHero} borderRadius="12px"/>
        </Center>
        <Center
          flex="1"
          px="24px"
          flexDir="column"
          justifyContent="flex-start"
        >
          <Center
            w="full"
            h="full"
            border="1px solid #f2f2f2"
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
      <Center w="full" my="56px">
        <Flex w="50%" h="64px" borderRadius="16px" filter="5px" boxShadow="0 30px 60px -10px rgb(0 0 0 / 22%), 0 18px 36px -18px rgb(0 0 0 / 25%)"></Flex>
      </Center>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <Header title="Home" />
}

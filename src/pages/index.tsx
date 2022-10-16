import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from '@components/head'
import { useStoryblokState, StoryblokComponent, SbBlokData, storyblokEditable } from 'gatsby-source-storyblok'
import { graphql } from 'gatsby'
import Layout from "@layout/index"
import NottaLogo from '@/assets/images/nottalogo.jpeg'
import AirgramLogo from '@/assets/images/airgramlogo.jpeg'
import IndexPageHero from "@/assets/images/IndexPageHero.jpeg"
import { Box, Button, Center, Flex, Image, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import GameBlock from '@components/common/GameBlock'
import GrowNumber from "@/components/animations/grow-number"
interface IProp {
  data: any
}

const socialMedia = [
  {
    imgUrl: "https://img.icons8.com/plasticine/100/000000/github-squared.png",
    alt: "github",
    link: "https://github.com/John516csd"
  },
  {
    imgUrl: NottaLogo,
    alt: "Notta",
    link: "https://www.notta.ai/en"
  },
  {
    imgUrl: AirgramLogo,
    alt: "airgram",
    link: "https://www.airgram.io"
  }
]

const IndexPage = ({ data }: IProp) => {
  const color = useColorModeValue('gray.900', 'white');

  return (
    <Layout isNewStyle>
      <Text as="h1" my="40px">🎯 Documenting Life & Technology</Text>
      {/* <GrowNumber number={300} numberStyle={{
        fontSize: "20px",
        fontWeight: "600"
      }}/> */}
      <Center borderRadius="12px">
        <GameBlock />
      </Center>
      <Center w="full" my="56px">
        <Flex p="12px" borderRadius="16px" filter="5px" boxShadow="0 30px 60px -10px rgb(0 0 0 / 22%), 0 18px 36px -18px rgb(0 0 0 / 25%)" gap="12px">
          {
            socialMedia.map((item) => {
              return (
                <Link href={item.link} target="_blank" key={item.alt}>
                  <Box
                    _hover={{
                      transform: "translateY(-5px)"
                    }}
                    transition="all 0.25s ease-out"
                    bg="#ffffff"
                    borderRadius="12px"
                  >
                    <Image w="48px" h="49px" src={item.imgUrl} alt={item.alt} borderRadius="12px" />
                  </Box>
                </Link>
              )
            })
          }
        </Flex>
      </Center>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <Header title="Home" />
}

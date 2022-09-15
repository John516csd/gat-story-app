import * as React from "react"
import type { HeadFC } from "gatsby"
import Header from '@components/head'
import { useStoryblokState, StoryblokComponent, SbBlokData, storyblokEditable } from 'gatsby-source-storyblok'
import { graphql } from 'gatsby'
import Layout from "@layout/index"
import { Button, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
interface IProp {
  data: any
}

const IndexPage = ({ data }: IProp) => {
  const color = useColorModeValue('gray.900', 'white');

  return (
    <Layout isNewStyle>
      <Text
        as="h1"
        color={color}
        textAlign="center"
      >
        YBlog
      </Text>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <Header title="Home"/>
}

import * as React from "react"
import type { HeadFC } from "gatsby"
import { useStoryblokState, StoryblokComponent, SbBlokData, storyblokEditable } from 'gatsby-source-storyblok'
import { graphql } from 'gatsby'
import Layout from "@layout/index"
import { Button, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
interface IProp {
  data: any
}

const IndexPage = ({ data }: IProp) => {
  console.log("🚀 ~ file: index.tsx ~ line 12 ~ IndexPage ~ data", data)
  const color = useColorModeValue('gray.900', 'white');
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

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

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "blog" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>

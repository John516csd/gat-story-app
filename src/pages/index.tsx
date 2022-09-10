import * as React from "react"
import type { HeadFC } from "gatsby"
import { useStoryblokState, StoryblokComponent, SbBlokData, storyblokEditable } from 'gatsby-source-storyblok'
import { graphql } from 'gatsby'
import Layout from "@layout/index"
import { Text } from '@chakra-ui/react'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
interface IProp {
  data: any
}

const IndexPage = ({ data }: IProp) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);

  return (
    <Layout>
      <Text as="h1">YBlog</Text>
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

import { border, Box, Center, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import { graphql, Script } from "gatsby";
import React from "react"
import useStoryblok from '../components/storyblok'
import StoryBlokClient from 'storyblok-js-client'
import Layout from "@/layout";
import Header from '@components/head'

interface IProp {
  data: {
    storyblokEntry: any
  },
  location: any,
}

export const Head = () => {
  return (
    <Header title="Blog" description="this is a blog page">
      <script defer src="https://chirpy.dev/bootstrap/comment.js" data-chirpy-domain="yanchenhaoblog.gatsbyjs.io"></script>
    </Header>
  )
}

const App: React.FC<IProp> = ({ data, location }) => {
  const story = useStoryblok(data.storyblokEntry, location);
  const StoryBlok = new StoryBlokClient({
    accessToken: process.env.GATSBY_STORYBLOCK_ACCESS_TOKEN
  })
  const color = useColorModeValue('#000', '#fff');
  const { content } = story;
  const {
    table,
    cover,
    Rich_Content
  } = content;
  const { colorMode } = useColorMode();

  return <Layout>
    {/* <Center>
      <Image src={'https:' + cover} w="full" borderRadius="12px" />
    </Center>
    <Center w="full">
      <Box p="24px" className="cms-html" color={color} dangerouslySetInnerHTML={{
        __html: StoryBlok.richTextResolver.render(Rich_Content)
      }}></Box>
    </Center> */}
    <Center w="full" p="24px">
      <div
        style={{
          width: "100%",
        }}
        data-chirpy-theme={colorMode}
        data-chirpy-comment="true"
      ></div>
    </Center>
  </Layout>
}

export const query = graphql`
query MyQuery($full_slug: String!) {
  storyblokEntry(full_slug: { eq: $full_slug }) {
    content
    full_slug
    id
    slug
    children {
      id
    }
  }
}
`;
export default App;
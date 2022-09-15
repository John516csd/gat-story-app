import useStoryblok from "@/components/storyblok";
import Layout from "@/layout";
import Header from "@components/head";
import { graphql } from "gatsby";
import React from "react"
import { Center, Image, Text, Link as ChakraLink, Grid, GridItem } from '@chakra-ui/react'

interface IProp {
  data: any,
  location: any,
}

interface IBlogCardProp {
  data: {
    full_slug: string,
    content: string,
  }
}

export const Head = () => {
  return (
    <Header title="blogs" />
  )
}

const BlogCard: React.FC<IBlogCardProp> = ({ data }) => {
  const content = JSON.parse(data.content);
  console.log("🚀 ~ file: index.tsx ~ line 28 ~ content", content)
  const { Title, author, cover } = content;
  return <ChakraLink href={data.full_slug}>
    <Center border="1px solid #eaedf0" flexDir="column" borderRadius="10px">
      <Image src={'https:' + cover} w="full" h="200px" borderTopRadius="10px"/>
      <Center flexDir="column" p="12px" borderTop="1px solid #f1f1f1" w="full" >
        <Text as="h4">{Title}</Text>
        <Text as="h4">@{author}</Text>
      </Center>
    </Center>
  </ChakraLink>
}

const Blog: React.FC<IProp> = ({ data, location }) => {
  const { nodes } = data.allStoryblokEntry;
  console.log("🚀 ~ file: index.tsx ~ line 20 ~ nodes", nodes);
  return <Layout>
    <Text as="h1">Blogs</Text>
    <Grid
      gap="64px"
      mt="64px"
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr",
        xl: "1fr 1fr",
        "2xl": "1fr 1fr 1fr",
      }}
    >
      {
        nodes.map((item) => {
          return <GridItem>
            <BlogCard data={item} key={item.full_slug} />
          </GridItem>
        })
      }
    </Grid>
  </Layout>
}

export const query = graphql`
  query TemplateQuery {
    allStoryblokEntry(filter: { field_component: { eq: "page" } }) {
      nodes {
        slug
        full_slug
        content
        id
      }
    }
  }
`;


export default Blog;
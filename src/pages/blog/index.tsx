import useStoryblok from "@/components/storyblok";
import Layout from "@/layout";
import Header from "@components/head";
import { graphql } from "gatsby";
import React from "react"
import { Center, Image, Text, Link as ChakraLink } from '@chakra-ui/react'

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
    <Center border="1px solid #f1f1f1" flexDir="column" w="400px" h="300px" borderRadius="10px">
      <Image src={'https:' + cover} w="full" h="200px" />
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
  return <Layout isNewStyle>
    <Text as="h1">Blogs</Text>
    <Center gap="64px" mt="64px" justifyContent="flex-start">
      {
        nodes.map((item) => {
          return <BlogCard data={item} key={item.full_slug} />
        })
      }
    </Center>
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
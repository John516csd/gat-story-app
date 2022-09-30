import useStoryblok from "@/components/storyblok";
import Layout from "@/layout";
import Header from "@components/head";
import { graphql } from "gatsby";
import React, { useEffect } from "react"
import { Center, Image, Text, Link as ChakraLink, Grid, GridItem } from '@chakra-ui/react'

interface IProp {
  data: any,
  location: any,
}

interface IBlogCardProp {
  data: {
    slug: string,
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
  return <ChakraLink >
    <Center border="1px solid #eaedf0" flexDir="column" borderRadius="10px">

    </Center>
  </ChakraLink>
}

const Blog: React.FC<IProp> = ({ data, location }) => {
  console.log("🚀 ~ file: index.tsx ~ line 51 ~ data", data)
  const { nodes } = data.allMarkdownRemark;
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
          return <GridItem key={item.id}>
            {/* <BlogCard data={item} /> */}
            {item.frontmatter.title}
          </GridItem>
        })
      }
    </Grid>
  </Layout>
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      nodes {
        frontmatter {
          date
          description
          title
        }
        id
        rawMarkdownBody
      }
    }
  }
`


export default Blog;
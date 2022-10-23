import useStoryblok from "@/components/storyblok";
import Layout from "@/layout";
import Header from "@components/head";
import { graphql } from "gatsby";
import React, { useEffect } from "react"
import { Center, Image, Text, Link as ChakraLink, Grid, GridItem } from '@chakra-ui/react'
import { GatsbyLink } from "@/components/common";

interface IProp {
  data: any,
  location: any,
}

interface IBlogCardProp {
  data: {
    fields: {
      slug: string
    },
    frontmatter: {
      date: string
      description: string
      title: string
      author: string
    }
  }
}

export const Head = () => {
  return (
    <Header title="blogs">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
      </style>
    </Header>
  )
}

const BlogCard: React.FC<IBlogCardProp> = ({ data }) => {
  return <GatsbyLink to={data.fields.slug} w="full">
    <Center
      w="full"
      flexDir="column"
      p="24px"
      justifyContent="flex-start"
      className="blog-card"
    >
      <Text as="h3" className="blog-card-title">{data.frontmatter.title}</Text>
      <Text style={{ margin: "6px" }}>📝 {data.frontmatter.description}</Text>
      <Text style={{ margin: "6px" }}>🧑🏻‍💻 {data.frontmatter.author}</Text>
      <Text style={{ margin: "6px", fontWeight: 300 }} as="span" display="inline-block" w="full">📆 {data.frontmatter.date}</Text>
    </Center>
  </GatsbyLink>
}

const Blog: React.FC<IProp> = ({ data, location }) => {
  const { nodes } = data.allMarkdownRemark;
  return <Layout>
    <Text as="h1">Blogs</Text>
    <Grid
      w="full"
      gap="64px"
      mt="64px"
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr",
        xl: "1fr 1fr 1fr",
        "2xl": "1fr 1fr 1fr",
      }}
    >
      {
        nodes.map((item) => {
          return <GridItem
            w="full"
            borderRadius="10px"
            border="1px solid #eaedf0"
            key={item.id}
          >
            <BlogCard data={item} />
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
          author
        }
        id
        rawMarkdownBody
        fields {
          slug
        }
      }
    }
  }
`


export default Blog;
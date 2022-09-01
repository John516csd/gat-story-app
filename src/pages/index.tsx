import * as React from "react"
import type { HeadFC } from "gatsby"
import { useStoryblokState, StoryblokComponent, SbBlokData, storyblokEditable } from 'gatsby-source-storyblok'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
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
  console.log("🚀 ~ file: index.tsx ~ line 24 ~ IndexPage ~ story", story)

  const components = story.content.body.map((blok: SbBlokData) => {
    return (<StoryblokComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <h1 style={headingStyles}>
        Congratulations
      </h1>
      <div {...storyblokEditable(story.content)}>
        <p>{story.name}</p>
        {components}
      </div>
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

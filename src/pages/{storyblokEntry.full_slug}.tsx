import { graphql } from "gatsby";
import React from "react"
import useStoryblok from '../components/storyblok'

interface IProp {
  data: {
    storyblokEntry: any
  },
  location: any,
}

const App: React.FC<IProp> = ({ data, location }) => {
  const story = useStoryblok(data.storyblokEntry, location);
  console.log("🚀 ~ file: {storyblokEntry.full_slug}.tsx ~ line 17 ~ story", story)
  return <>storyblokEntry</>
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
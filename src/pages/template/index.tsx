import { graphql } from "gatsby";
import React from "react"

interface IProp {
    data: any,
}

const Template: React.FC<IProp> = (data) => {
    return <h1>Template</h1>
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


export default Template
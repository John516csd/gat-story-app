import type { GatsbyConfig } from "gatsby"


const INTERCOM_APP_ID = "i9m4o3sh";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gat-story-app`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'AwWUfrDOwzxCkknZnDq9Zgtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: INTERCOM_APP_ID,
      },
    },
  ],
}

export default config

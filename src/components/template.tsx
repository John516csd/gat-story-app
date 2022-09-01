import { storyblokEditable } from "gatsby-source-storyblok"
import StoryblokClient from "storyblok-js-client";
import * as React from "react"

interface IProp {
    blok: any
}

const Template = ({ blok }: IProp) => {
    const storyblok = new StoryblokClient({
        accessToken: process.env.GATSBY_STORYBLOCK_ACCESS_TOKEN,
        cache: {
            clear: "auto",
            type: "memory",
        },
    })

    return (
        <div {...storyblokEditable(blok)}>
            <p>template:</p>
            <div dangerouslySetInnerHTML={
                {
                    __html: storyblok.richTextResolver.render(blok.rich)
                }
            }></div>
        </div>
    )
}

export default Template
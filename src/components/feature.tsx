import { storyblokEditable } from "gatsby-source-storyblok"
import * as React from "react"

interface IProp {
    blok: any
}

const Feature = ({ blok }: IProp) => {
   return (
        <div {...storyblokEditable(blok)}>
            <p>feature:</p>
            <h1>{blok.name}</h1>
        </div>
    )
}

export default Feature
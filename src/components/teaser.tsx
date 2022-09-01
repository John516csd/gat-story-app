import * as React from "react"
import {storyblokEditable} from 'gatsby-source-storyblok'

interface IProp {
    blok: any
}

const Teaser = ({ blok }: IProp) => {
    return (
        <div {...storyblokEditable(blok)}>
            <p>teaser:</p>
            <h1>{blok.headline}</h1>
        </div>
    )
}

export default Teaser
import * as React from 'react';
import PropTypes from 'prop-types';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import Teaser from '../components/teaser';
import Feature from '../components/feature';
import Template from './template';

storyblokInit({
    accessToken: process.env.GATSBY_STORYBLOCK_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
        teaser: Teaser,
        feature: Feature,
        template: Template
    }
})

const Layout = ({ children }: { children: any }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
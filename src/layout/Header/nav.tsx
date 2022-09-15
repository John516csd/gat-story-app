import { GatsbyLink } from '@/components/common';
import { AtSignIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import * as React from 'react';

const IndexPage = () => {
    return <Center columnGap="64px">
        <GatsbyLink to="/">
            <Center>
                <Text as="h4">
                    Home
                </Text>
            </Center>
        </GatsbyLink>
        <GatsbyLink to="/blog">
            <Center>
                <Text as="h4">
                    Blogs
                </Text>
            </Center>
        </GatsbyLink>
    </Center>
}

export default IndexPage;
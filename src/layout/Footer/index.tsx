import { Center, Link, Text, Image } from '@chakra-ui/react';
import * as React from 'react'

interface IProp {
    paddingTop: any,
}

const IndexPage: React.FC<IProp> = ({ paddingTop }) => {
    return (
        <Center h="100px" textAlign="center" flexDir="column" bg="black">
            <Text as="p" color="white">
                © Design by yanchenhao
            </Text>
        </Center>
    )
}

export default IndexPage;
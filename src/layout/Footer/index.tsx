import { Center, Text } from '@chakra-ui/react';
import * as React from 'react'

interface IProp {
    paddingTop: any,
}

const IndexPage: React.FC<IProp> = ({ paddingTop }) => {
    return (
        <Center h="100px" textAlign="center">
            <Text as="p">
            © Design by yanchenhao
            </Text>
        </Center>
    )
}

export default IndexPage;
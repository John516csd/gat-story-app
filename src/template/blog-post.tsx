import Layout from "@/layout"
import { Box, Center, useColorMode } from "@chakra-ui/react"
import React from "react"
import Header from '@components/head'
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
interface IProp {
    pageContext: {
        data: string,
        title: string,
        markDown: string
    }
}

const Post: React.FC<IProp> = (data) => {
    const { colorMode } = useColorMode();
    const html = data.pageContext.data;
    const title = data.pageContext.title;
    const markDown = data.pageContext.markDown;

    return <Layout>
        <Header title={title} description={`${title} details`}>
            <script defer src="https://chirpy.dev/bootstrap/comment.js" data-chirpy-domain="yanchenhaoblog.gatsbyjs.io"></script>
        </Header>
        <ReactMarkdown
            children={markDown}
            components={{
                code({ node, inline, className, children, ...props }) {
                    return !inline ?
                        <SyntaxHighlighter
                            language={className.split('-')[1]}
                            children={String(children).replace(/\n$/, '')}
                            style={okaidia}
                            PreTag="div"
                            {...props}
                        /> :
                        <code className={className} {...props}>
                            {children}
                        </code>
                }
            }}
        />
        {/* <Box p="24px" className="cms-html" dangerouslySetInnerHTML={{ __html: html }} /> */}
        <Center w="full">
            <div
                style={{
                    width: "100%",
                }}
                data-chirpy-theme={colorMode}
                data-chirpy-comment="true"
            ></div>
        </Center>
    </Layout >
}

export default Post
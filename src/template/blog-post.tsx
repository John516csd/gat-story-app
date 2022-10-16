import Layout from "@/layout"
import { Box, Center, useColorMode } from "@chakra-ui/react"
import React from "react"

interface IProp {
    pageContext: {
        data: string
    }
}

const Post: React.FC<IProp> = (data) => {
    console.log("🚀 ~ file: blog-post.tsx ~ line 8 ~ data", data)
    const { colorMode } = useColorMode();
    const html = data.pageContext.data;
    return <Layout>
        <Box p="24px" className="cms-html" dangerouslySetInnerHTML={{ __html: html }} />
        <Center w="full" p="24px">
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
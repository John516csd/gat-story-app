import React, { memo } from "react";
import { Box, Center } from "@chakra-ui/react";
import { Link } from "gatsby";

interface IGatsbyLink {
    to: string;
    [keys: string]: any;
}
const GatsbyLink: React.FC<IGatsbyLink> = (props) => {
    const { to, children, ...others } = props;
    return (
        // @ts-ignore https://github.com/gatsbyjs/gatsby/issues/35715
        <Link style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} to={to}>
            <Center {...others}>{children}</Center>
        </Link>
    );
};

export default memo(GatsbyLink);

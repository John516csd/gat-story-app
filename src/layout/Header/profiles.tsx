import React, { memo } from "react";
import { Box, Button, Center, Image, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react'

interface IUserInfo {
    picture: string,
    email: string,
    family_name: string,
    given_name: string,
    name: string
}

const IndexPage: React.FC<{ userInfo: IUserInfo, googleLogout: () => void }> = ({ userInfo, googleLogout }) => {
    return <Center>
        <Menu>
            <MenuButton>
                <Image src={userInfo.picture} w="40px" h="38px" borderRadius="100%" />
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                    <MenuItem as="p">{'👋 Hi! ' + userInfo.name}</MenuItem>
                    <MenuItem as="p">📬 Email: {userInfo.email} </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem onClick={googleLogout}>🫣 Logout</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    </Center>
}

export default memo(IndexPage);
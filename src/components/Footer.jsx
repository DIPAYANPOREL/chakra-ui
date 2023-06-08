import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={"40"} padding="16" color={"white"} >
            <Stack direction={["column", "row"]} >
                <VStack alignItems={"stretch"}
                    w={"full"}
                    px={'5'}>
                    <Heading size="md" textTransform={"uppercase"} textAlign={["center", "left"]} >
                        Follow my more work on my github
                    </Heading>
                    <HStack borderBottom={"2px solid white"}
                        py={'1'} >
                        <Input placeholder='Enter Email here...'
                            border={"none"}
                            borderRadius={"none"}
                            outline={"none"}
                            focusBorderColor='none' />
                        <Button padding={"0"}
                            colorScheme={"purple"}
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"} >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]} >
                    <Heading textTransform={"uppercase"}
                        textAlign={"center"}>
                        MOVIE HUB
                    </Heading>
                    <Text>
                        All rights received
                    </Text>
                </VStack>
                <VStack w={'full'} >
                    <Heading size={"md"}
                        textTransform={"uppercase"} >
                        Social media
                    </Heading>
                    <Button variant={"link"}
                        colorScheme={"purple"} >
                        <a target={"blank"} href="https://github.com/DIPAYANPOREL">
                            Github
                        </a>
                    </Button>
                    <Button variant={"link"}
                        colorScheme={"purple"} >
                        <a target={"blank"} href="https://twitter.com/dipayan_porel?t=LYQk4XF4FAJxdWAwoZwANQ&s=09">
                            Twitter
                        </a>
                    </Button>
                    <Button variant={"link"}
                        colorScheme={"purple"} >
                        <a target={"blank"} href="https://www.linkedin.com/in/dipayan-porel-799376246">
                            LinkedIn
                        </a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
}

export default Footer;
import { Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
    return (
        <Container
            maxW={"container.xl"}
            h={"100vh"}
            padding={"16"}>
            <form>
                <VStack
                    alignItems={"stretch"}
                    spacing={"8"}
                    w={"96"}
                    margin={"auto"}
                    my={"16"}>
                    <Heading>Welcome back!</Heading>
                    <Input
                        placeholder={"Email"}
                        type={"email"}
                        required
                        focusBorderColor={"purple.500"}
                    />
                    <Input
                        placeholder={"Password"}
                        type={"password"}
                        required
                        focusBorderColor={"purple.500"}
                    />
                </VStack>
            </form>
        </Container>
    );
};

export default Login;
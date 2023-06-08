import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';    

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
                    w={["full", "96"]}
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
                    <Button variant={"link"}
                        alignSelf={"flex-end"}>
                        <Link to={"/forgetpassword"}>Forget password?</Link>
                    </Button>
                    <Button
                        colorScheme='purple'
                        type='submit'>
                        Log In
                    </Button>
                    <Text
                        textAlign={"right"}>
                        New User?{" "}
                        <Button variant={"link"}
                            alignSelf={"flex-end"}
                            colorScheme={"purple"}>
                            <Link to={"/signup"}>Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    );
};

export default Login;
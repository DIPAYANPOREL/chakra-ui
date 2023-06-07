import React from 'react';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    padding: "4",
    size: "3xl"
}

const Home = () => {
    return (
        <Box >
            <MyCarousel />
            <Container maxW={"container.xl"} minH={"100vh"} padding="16" >
                <Heading
                    textTransform={"uppercase"}
                    margin={"auto"}
                    py="2"
                    w={"fit-content"}
                    borderBottom={"2px solid"}>
                    Services
                </Heading>
                <Stack h={"full"}
                    p={"4"}
                    alignItems={"center"}
                    direction={["column", "row"]}>
                    <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corrupti pariatur vel qui sit. 
                        Sint optio tempora exercitationem! Nemo neque quia saepe voluptates ex dolor suscipit exercitationem 
                        reprehenderit nihil iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum 
                        ab repudiandae vel doloremque recusandae nobis voluptatem. Ea fuga corrupti omnis eius rerum fugiat 
                        vitae error? Inventore modi recusandae veritatis? Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Aspernatur, itaque obcaecati dignissimos labore aperiam nemo recusandae laboriosam nostrum vero 
                        quis, modi nesciunt expedita. Sit odio totam corporis fuga provident harum. Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. Itaque consequatur corrupti laboriosam et provident nemo harum saepe, at 
                        vero impedit veritatis pariatur libero perspiciatis deleniti natus! Veritatis adipisci dolorum 
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w="full" h={"100vh"} >
            <Img src={img1} />
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions} >
                Watch the future...
            </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Img src={img2} />
            <Heading bg={"whiteAlpha.800"} color={"black"} {...headingOptions} >
                Future is Gaming...
            </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Img src={img3} />
            <Heading bg={"whiteAlpha.800"} color={"black"} {...headingOptions} >
                Gaming on console
            </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Img src={img4} />
            <Heading bg={"whiteAlpha.400"} color={"black"} {...headingOptions} >
                Movie night is fun
            </Heading>
        </Box>
    </Carousel>
)
export default Home;